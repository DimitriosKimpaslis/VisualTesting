import React, { useContext } from 'react'
import { UserBigData } from './root/App'
import { useNavigate } from 'react-router-dom'
import ErrorIcon from '@mui/icons-material/Error';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Error = () => {
    const error = new URLSearchParams(window.location.search).get('error')
    const { bigData } = useContext(UserBigData)
    const navigate = useNavigate()
    return (
        <div className='flex justify-center text-center'>
            <div className='bg-white shadow-lg rounded-md py-20 px-4 text-lg space-y-4 flex flex-col justify-center items-center container'>
                <ErrorIcon />
                <p className=''>{error}</p>
                <p className='p-2 border-b-2 border-black'>Celebrities typed: <b>{bigData.length}</b></p>
                <p className=''>Only to test functionality you can use fake data by clicking below</p>
                <button onClick={() => navigate('/yourdata?testing=true')} className='bg-yellow-500 hover:bg-yellow-700 py-2 w-64 font-semibold text-lg shadow-md'>Use Fake Data</button>
                <p className=''>Alternatively <ArrowDownwardIcon /></p>
                <button onClick={() => navigate('/test')} className='bg-green-500 hover:bg-green-700 py-2 w-64 font-semibold text-lg shadow-md'>Begin Test</button>
            </div>
        </div>

    )
}

export default Error