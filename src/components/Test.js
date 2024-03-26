import { NavLink, useNavigate } from 'react-router-dom'
import { UserBigData } from './root/App'
import { useContext } from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Test = () => {
    const navigate = useNavigate()
    const error = new URLSearchParams(window.location.search).get('error')
    const { bigData } = useContext(UserBigData)


    return (
        <div className='w-full flex justify-center'>
            <div className='container flex flex-col justify-center items-center text-justify px-4'>
                <h1 className='text-4xl font-semibold mb-4'>Testing Material</h1>
                <div className='p-10  bg-white text-lg font-medium shadow-md justify-center flex flex-col items-center'>
                    <div className='md:w-[50%]'>
                        <p className='mb-5'><b>1)</b> Clicking the button below will generate a list of 10 random celebrities for you to type.</p>
                        <p className='mb-5'><b>2)</b> There will only be celebrities you never typed before except if you answered all of the available celebrities (around 1200).</p>
                        <p className='mb-5'><b>3)</b> All the photos have been automatically generated from the internet so there might be some misleading pictures. However we constanly update the database and fix bugs. If you see something wrong <NavLink to={'/contact'} className='text-blue-500 hover:text-blue-600'>contact us</NavLink>.</p>
                        <p className='mb-5'><b>4)</b> By clicking Start you understand and concent that your answers will be recorded for statistical purposes.</p>
                    </div>

                </div>
                {error &&
                    <div className='bg-white shadow-lg p-4 rounded-md my-5 space-y-4'>
                        <ErrorIcon />
                        <p className='text-2xl text-red-600 font-bold'>Error!</p>
                        <p className=''>{error}</p>
                        <p className='  border-2 p-2 border-black'>Celebrities typed: <b>{bigData.length}</b></p>
                        <p className=''>Only to test functionality you can use fake data by clicking below</p>
                        <button onClick={() => navigate('/yourdata?testing=true')} className='bg-green-500 hover:bg-green-700 py-2 w-[50%] font-semibold text-lg shadow-md'>Use Fake Data</button>
                        <p className=''>Alternatively <ArrowDownwardIcon /></p>
                    </div>}
                <h1 className='text-3xl font-medium my-4'>Begin Test</h1>

                <button onClick={() => navigate('/grid')} className='bg-green-500 hover:bg-green-700 py-2 w-[50%] font-semibold text-lg shadow-md'>Start</button>
            </div>
        </div>

    )
}

export default Test