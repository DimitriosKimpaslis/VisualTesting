import { Box, Button, CircularProgress, Grid, IconButton } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import supabase from './root/Client';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ZoomableImage from './children/ZoomableImage';
import { getQuadra } from '../functions/getQuadra';
import correctSound from '../media/audio/correctSound.mp3'
import wrongSound from '../media/audio/wrongSound.mp3'
import { checkCorrectness } from '../functions/checkCorrectness';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getTestingMaterial } from '../functions/getTestingMaterial';
import { User } from './root/App';
import { returnNewAvailableTypesAndTags } from '../functions/tagsFunctionality';

const TryGrid = () => {
    const [testingMaterial, setTestingMaterial] = useState([])
    const { user } = useContext(User)

    const navigate = useNavigate()

    const functions = ['Ti/Fe', 'Fi/Te', 'Ni/Se', 'Si/Ne']
    const quadras = ['SFJ-NTP', 'NFJ-STP', 'NTJ-SFP', 'STJ-NFP']
    const types = ['INTP', 'ENTP', 'ISFJ', 'ESFJ', 'ISTP', 'ESTP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'ISFP', 'ESFP', 'ISTJ', 'ESTJ', 'INFP', 'ENFP']

    const [availableTypes, setAvailableTypes] = useState({ INTP: true, ENTP: true, ISFJ: true, ESFJ: true, ISTP: true, ESTP: true, INFJ: true, ENFJ: true, INTJ: true, ENTJ: true, ISFP: true, ESFP: true, ISTJ: true, ESTJ: true, INFP: true, ENFP: true })
    const [tags, setTags] = useState({ SFJ_NTP: false, NFJ_STP: false, NTJ_SFP: false, STJ_NFP: false, Ti_Fe: false, Fi_Te: false, Ni_Se: false, Si_Ne: false })

    const [id, setId] = useState(0)
    const [currentCelebrity, setCurrentCelebrity] = useState()
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(false)
    const [message, setMessage] = useState('')
    const [typeClicked, setTypeClicked] = useState('')
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [lastTagClicked, setLastTagClicked] = useState()
    const [lastEvent, setLastEvent] = useState()

    const handleTagClick = (e, tagName) => {
        setLastTagClicked(tagName)
        setLastEvent(e.timeStamp)
    }

    const handleClearClick = () => {
        setTags({ SFJ_NTP: false, NFJ_STP: false, NTJ_SFP: false, STJ_NFP: false, Ti_Fe: false, Fi_Te: false, Ni_Se: false, Si_Ne: false })
        setAvailableTypes({ INTP: true, ENTP: true, ISFJ: true, ESFJ: true, ISTP: true, ESTP: true, INFJ: true, ENFJ: true, INTJ: true, ENTJ: true, ISFP: true, ESFP: true, ISTJ: true, ESTJ: true, INFP: true, ENFP: true })
    }

    const isInitialRender = useRef(0);
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            if (isInitialRender.current === 0) {
                isInitialRender.current = isInitialRender.current + 1;
                return; // Skip the effect on the initial render
            }
        } else {
            if (isInitialRender.current <= 1) {
                isInitialRender.current = isInitialRender.current + 1;
                return; // Skip the effect on the initial render
            }
        }
        const { newAvailableTypes, newTags } = returnNewAvailableTypesAndTags(tags, lastTagClicked)
        setAvailableTypes(newAvailableTypes)
        setTags(newTags)
    }, [lastEvent])


    const isInitialRender2 = useRef(0);
    useEffect(() => {
        setLoading(true)
        
        if (process.env.NODE_ENV !== 'production') {
            if (isInitialRender2.current < 1) {
                isInitialRender2.current = isInitialRender2.current + 1;
                return; // Skip the effect on the initial render
            }
        }
        const getQuestions = async () => {
            if (testingMaterial.length === 0) {
                const questions = await getTestingMaterial(user.email)
                setTestingMaterial(questions)
                return questions
            } else {
                return testingMaterial
            }
        }

        const getCurrentCelebrity = async (questions) => {
            if (!user) {
                return navigate('/signin')
            }

            let celebrityIdToSearch = questions[id]

            const { data, error } = await supabase
                .from('celebrities')
                .select('name,image,type,quadra')
                .eq('id', celebrityIdToSearch)
                .single()
            if (error) {
                console.log(error)
            }

            setCurrentCelebrity(data)
        }
        getQuestions().then((res) => {
            getCurrentCelebrity(res).then(() => {
                setLoading(false)
            }
            )
        })
    }, [id])

    const handleChosenAnswer = async (e) => {
        window.scrollTo(0, 0);
        setLoading(true)
        let tempResult = false //State is too slow to change and it uploads only false to DB
        const buttonClicked = e.target
        const buttonClickedType = buttonClicked.textContent
        setTypeClicked(buttonClickedType)
        const quadra = getQuadra(buttonClickedType)
        if (quadra === currentCelebrity.quadra) {
            setMessage('You were right about the quadra! CS Joseph would be proud!')
        } else {
            setMessage(checkCorrectness(buttonClickedType, currentCelebrity.type))
        }
        if (currentCelebrity.type !== buttonClickedType) {
            new Audio(wrongSound).play()
            buttonClicked.classList.add('bg-red-400')
            setResult(false)
        } else {
            new Audio(correctSound).play()
            setResult(true)
            tempResult = true
            setCorrectAnswers(correctAnswers + 1)
        }
        await supabase.from('data')
            .insert([{
                user_email: user.email,
                celebrity_id: testingMaterial[id],
                answer_type: buttonClickedType,
                answer_quadra: quadra,
                result: tempResult,
            }])
    }

    const handleNextQuestion = () => {
        if (id === testingMaterial.length - 1) {
            navigate(`/results?result=${correctAnswers}&total=${testingMaterial.length}`)
            return
        }
        setResult(false)
        setLoading(false)
        setTags({ SFJ_NTP: false, NFJ_STP: false, NTJ_SFP: false, STJ_NFP: false, Ti_Fe: false, Fi_Te: false, Ni_Se: false, Si_Ne: false })
        setAvailableTypes({ INTP: true, ENTP: true, ISFJ: true, ESFJ: true, ISTP: true, ESTP: true, INFJ: true, ENFJ: true, INTJ: true, ENTJ: true, ISFP: true, ESFP: true, ISTJ: true, ESTJ: true, INFP: true, ENFP: true })
        setCurrentCelebrity()
        setId(id + 1)
    }

    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className='w-[80%] flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center '>
                    {currentCelebrity ?
                        <div className='w-full flex flex-col justify-center items-center mb-5'>
                            <div className='h-[400px] w-full relative mb-5'>
                                <ZoomableImage src={currentCelebrity.image} loading={loading} />
                                {loading &&
                                    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-4xl text-white text-center flex flex-col items-center justify-center' >
                                        {result ? <p className='text-green-600 font-bold p-2 mb-2 bg-black opacity-80 rounded-md'> Correct! {currentCelebrity.name.split('_')[0]} is an {currentCelebrity.type}</p>
                                            :
                                            <div className='p-2'>
                                                <p className='text-red-600 bg-black opacity-80 p-2 rounded-md font-bold'>Wrong! {currentCelebrity.name.split('_')[0]} is an {currentCelebrity.type}</p>
                                                <p className='text-xl'>Your answer: {typeClicked}</p>
                                                <p className='text-xl'>{message}</p>
                                            </div>
                                        }
                                        <Button variant="contained" endIcon={<NavigateNextIcon />} onClick={handleNextQuestion}  >Next</Button>
                                    </div>
                                }

                            </div>
                            <div className='flex justify-center items-center'>
                                <div className=' flex items-center hover:cursor-pointer hover:text-blue-600' onClick={() => { window.open(`https://www.google.com/search?q=${currentCelebrity.name.replaceAll('_', ' ')}`, '_blank') }}>
                                    <h1 className='text-3xl text-center font-semibold mr-2'>
                                        {currentCelebrity.name.replaceAll('_', ' ')}
                                    </h1>
                                    <SearchIcon className='text-blue-500 mt-1' />
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex justify-center items-center h-[400px]'>
                            <CircularProgress />
                        </div>
                    }
                </div>
                <Grid container spacing={0} className='sm:h-[200px]'>

                    <Grid item sm={2} xs={12} md={2} lg={2} className=' sm:h-[20%] custom-lg:block hidden bg-gray-400 rounded-tl-lg hover:bg-gray-600'>
                        <IconButton aria-label="delete" className='w-full h-full' onClick={handleClearClick}>
                            <DeleteIcon fontSize='large' color='primary' />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12} sm={10} md={10} lg={10} className='sm:h-[20%] custom-lg:block hidden h-fit'>
                        <Box sx={{ display: 'flex', flexGrow: 1 }} className='h-full w-full flex justify-center items-center flex-wrap sm:flex-nowrap bg-gray-400 text-gray-50 rounded-r-lg font-semibold'>
                            {functions.map((axis, i) => {
                                const axisName = axis.replaceAll('/', '_')
                                return (
                                    <div className='flex-grow sm:w-full p-1 flex justify-center items-center h-full text-lg hover:bg-gray-600' key={i}>
                                        <label htmlFor={axisName} className='flex items-center w-full h-full justify-center hover:cursor-pointer hover:text-blue-500'>
                                            <input
                                                type="checkbox"
                                                id={axisName}
                                                className='h-8 w-8 mx-2 hover:cursor-pointer'
                                                checked={tags[axisName]}
                                                onChange={(e) => handleTagClick(e, axisName)}
                                            />
                                            <span>{axis}</span>
                                        </label>
                                    </div>

                                )
                            })
                            }
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={2} md={2} lg={2} className=' sm:h-[80%] custom-lg:block hidden'>
                        <Box sx={{ display: 'flex', flexGrow: 1 }} className='h-full  w-full justify-center items-center custom-sm:flex-col flex-wrap bg-gray-400 text-gray-50 rounded-b-lg font-semibold'>
                            {quadras.map((quadra, i) => {
                                const quadraName = quadra.replaceAll('-', '_')
                                return (
                                    <div className='flex-grow sm:w-full p-1 flex justify-center items-center text-lg shadow-md hover:bg-gray-600' key={i}>
                                        <label htmlFor={quadraName} className='flex items-center w-full text-center hover:cursor-pointer h-full hover:text-blue-500'>
                                            <input
                                                type="checkbox"
                                                id={quadraName}
                                                className='h-8 w-8 mx-2 hover:cursor-pointer'
                                                checked={tags[quadraName]}
                                                onChange={(e) => handleTagClick(e, quadraName)}
                                            />
                                            <span>{quadra}</span>
                                        </label>
                                    </div>
                                )
                            })}
                        </Box>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={12} lg={10} className=' sm:h-[80%]'>
                        {types.map((type, i) => {
                            return (
                                <Grid item xs={6} sm={6} md={3} className=' flex-grow p-1' key={i}>
                                    <Button variant="contained" className='w-full h-full' disabled={!availableTypes[type] || loading}
                                        onClick={(e) => handleChosenAnswer(e)}>{type}</Button>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}


export default TryGrid