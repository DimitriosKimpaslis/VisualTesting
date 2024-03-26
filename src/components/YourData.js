import React, { useContext, useEffect, useState } from 'react'
import supabase from './root/Client'
import { User, UserBigData } from './root/App'
import { CircularProgress, Tooltip } from '@mui/material'
import { getAllData } from '../functions/statistics'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts'
import { useLocation, useNavigate } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';


const YourData = () => {
  const { user } = useContext(User)
  const { bigData } = useContext(UserBigData)
  const [loading, setLoading] = useState(true)
  const [analytics, setAnalytics] = useState({})
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const testing = new URLSearchParams(useLocation().search).get('testing')

  const navigate = useNavigate()

  const handleLogout = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
    navigate('/')
    window.location.reload()
  }

  useEffect(() => {
    if (bigData.length < 50 && !testing) {
      return navigate(`/error?error=You have to type at least 50 celebrities to see your data!`)
    }
    if (testing) {
      setAnalytics(getAllData('testing'))
      setLoading(false)
      return
    }
    setAnalytics(getAllData(bigData))
    setLoading(false)
  }, [bigData])

  return (
    <div className='w-full text-center'>
      {loading ? <CircularProgress /> :
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='space-y-4 mb-4'>
            <h1 className='text-4xl font-semibold'>Your Data</h1>
            {user && <p className='text-xl'>Logged in as: {user.email}</p>}
            <button onClick={handleLogout} className='bg-red-500 text-xl p-4 w-[200px] hover:bg-red-800'>Logout</button>
          </div>
          <div className=' bg-white bg-opacity-30 p-4 mb-5 w-[90%] grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10 shadow-md'>
            <div className='shadow-lg flex flex-col items-center justify-center'>
              <Tooltip title={<p className='text-base'>How many times you found the correct type</p>} enterTouchDelay={0}>
                <div className='flex justify-center items-center'>
                  <h1 className='text-4xl mr-2'>Types</h1>
                  <InfoIcon className='top-1 relative' />
                </div>
              </Tooltip>
              <p className='font-bold text-2xl mb-5'>{analytics.accuracy.accuracyType.toFixed(2)}%</p>
              <PieChart
                series={[
                  {
                    paddingAngle: 5,
                    innerRadius: 10,
                    arcLabel: 'onTopLabel',
                    data: [
                      { id: 0, value: analytics.accuracy.correctCount, onTopLabel: 'Right', color: '#96ceb4' },
                      { id: 1, value: analytics.accuracy.wrongCount, onTopLabel: 'Wrong', color: '#ff6f69' },
                    ]
                  }
                ]}
                height={200}
                margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
              />
            </div>
            <div className='shadow-lg flex flex-col items-center justify-center'>
              <Tooltip title={<p className='text-base'>How many times the type you chose was the correct quadra</p>} enterTouchDelay={0}>
                <div className='flex justify-center items-center'>
                  <h1 className='text-4xl mr-2'>Quadras</h1>
                  <InfoIcon className='top-1 relative' />
                </div>
              </Tooltip>
              <p className='font-bold text-2xl mb-5'>{analytics.accuracy.accuracyQuadra.toFixed(2)}%</p>
              <PieChart
                series={[
                  {
                    paddingAngle: 5,
                    innerRadius: 10,
                    arcLabel: 'onTopLabel',
                    data: [
                      { id: 0, value: analytics.accuracy.correctCountQuadra, onTopLabel: 'Right', color: '#96ceb4' },
                      { id: 1, value: analytics.accuracy.wrongCountQuadra, onTopLabel: 'Wrong', color: '#ff6f69' },
                    ]
                  }
                ]}
                height={200}
                margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
              />
            </div>

          </div>

          <div className='w-[90%] bg-green-300 flex justify-center'>
            <h1 className='text-5xl my-4'>Insights</h1>
          </div>

          <div className=' bg-green-300 bg-opacity-60 p-4 w-[90%] grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-y-10 gap-y-16 mb-5 shadow-md '>

            <div className='shadow-lg flex flex-col items-center justify-center gap-y-1 p-2'>
              <h1 className='text-3xl'>Most correct Quadra</h1>
              <p className='font-bold text-2xl border-b-2 border-black'>{analytics.maxQuadra}</p>
              <p className='font-bold text-2xl'>{analytics.maxQuadraAccuracy.toFixed(2)}%</p>
            </div>
            <div className='shadow-lg flex flex-col items-center justify-center gap-y-1 p-2'>
              <h1 className='text-3xl'>Least correct Quadra</h1>
              <p className='font-bold text-2xl border-b-2 border-black'>{analytics.minQuadra}</p>
              <p className='font-bold text-2xl'>{analytics.minQuadraAccuracy.toFixed(2)}%</p>

            </div>
            <div className='shadow-lg flex flex-col items-center justify-center gap-y-1 p-2'>
              <h1 className='text-3xl'>Most correct Type</h1>
              <p className='font-bold text-2xl border-b-2 border-black'>{analytics.maxType}</p>
              <p className='font-bold  text-2xl '>{analytics.maxTypeAccuracy.toFixed(2)}%</p>

            </div>
            <div className='shadow-lg flex flex-col items-center justify-center gap-y-1 p-2'>
              <h1 className='text-3xl'>Least correct Type</h1>
              <p className='font-bold text-2xl border-b-2 border-black'>{analytics.minType}</p>
              <p className='font-bold text-2xl '>{analytics.minTypeAccuracy.toFixed(2)}%</p>
            </div>

          </div>
          <div className=' bg-blue-300 bg-opacity-60 p-4 w-[90%] flex flex-col items-center mb-5 shadow-md'>
            <h1 className='text-5xl mb-8'>Least Correct Type Insights</h1>
            <p className='text-xl'>From all the times you chose wrongly for <b>{analytics.minType}</b></p>
            <p className='text-xl mb-4'>you usually chose the following types:</p>
            <div className='flex justify-center gap-5 mb-5'>
              {analytics.leastTypeInfo.typesArray.map((type, index) => {
                return <p key={index} className='text-xl font-semibold'>{type.name}: {analytics.leastTypeInfo.typesRatio[index].value.toFixed(2)}%</p>
              })}
            </div>
            <PieChart
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 10,
                  arcLabel: 'onTopLabel',
                  data: analytics.leastTypeInfo.typesArray.map((type, index) => {
                    return { id: index, value: analytics.leastTypeInfo.typesRatio[index].value.toFixed(2), onTopLabel: type.name }
                  })
                }
              ]}
              height={200}
              margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
            />
          </div>
          <div className=' bg-blue-300 bg-opacity-60 p-4 w-[90%] flex flex-col items-center mb-5 shadow-md'>
            <h1 className='text-5xl mb-8'>Least Correct Quadra Insights</h1>
            <p className='text-xl'>From all the times you chose wrongly for <b>{analytics.minQuadra}</b></p>
            <p className='text-xl mb-4'>you usually chose the following quadras:</p>
            <div className='flex justify-center gap-5 mb-5'>
              {analytics.leastQuadraInfo.quadrasArray.map((type, index) => {
                return <p key={index} className='text-xl font-semibold'>{type.name}: {analytics.leastQuadraInfo.quadrasRatio[index].value.toFixed(2)}%</p>
              })}
            </div>
            <PieChart
              series={[
                {
                  paddingAngle: 5,
                  innerRadius: 10,
                  arcLabel: 'onTopLabel',
                  data: analytics.leastQuadraInfo.quadrasArray.map((type, index) => {
                    return { id: index, value: analytics.leastQuadraInfo.quadrasRatio[index].value.toFixed(2), onTopLabel: type.name }
                  })
                }
              ]}
              height={200}
              margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
            />
          </div>
          <div className='flex flex-col w-[90%] gap-y-5'>
            <div className='bg-gray-50 bg-opacity-70 p-4 shadow-lg md:flex hidden flex-col items-center justify-center'>
              <h1 className='text-5xl mb-8'>Quadra Statistics</h1>
              <BarChart
                dataset={analytics.formatedQuadraData}
                xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={[
                  { dataKey: 'correct', label: 'Correct', color: '#2eab27' },
                  { dataKey: 'wrong', label: 'Wrong', color: '#d62d2d' },
                ]}
                width={screenWidth * 0.5}
                height={500}
                yAxis={[{ label: 'answers' }]}
              />
            </div>
            <div className='bg-gray-50 bg-opacity-70 p-4 shadow-lg md:flex hidden flex-col items-center justify-center '>
              <h1 className='text-5xl mb-8'>Type Statistics</h1>
              <BarChart
                dataset={analytics.formatedTypeData}
                xAxis={[{ scaleType: 'band', dataKey: 'name', }]}
                series={[
                  { dataKey: 'correct', label: 'Correct', color: '#2eab27' },
                  { dataKey: 'wrong', label: 'Wrong', color: '#d62d2d' },
                ]}
                width={screenWidth < 1370 ? screenWidth * 0.9 : screenWidth * 0.5}
                height={500}
                yAxis={[{ label: 'answers' }]}
              />
            </div>
            <div className='bg-gray-50 bg-opacity-70 p-4 shadow-lg md:hidden flex flex-col items-center justify-center w-full'>
              <h1 className='text-5xl mb-8'>Quadra Statistics</h1>
              <BarChart
                dataset={analytics.formatedQuadraData}
                yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                series={[
                  { dataKey: 'correct', label: 'Correct', color: '#2eab27' },
                  { dataKey: 'wrong', label: 'Wrong', color: '#d62d2d' },
                ]}
                width={screenWidth * 0.9}
                height={500}
                layout='horizontal'
                xAxis={[{ label: 'answers' }]}
                margin={{ top: 100, right: 110, bottom: 50, left: 100 }}
              />
            </div>
            <div className='bg-gray-50 bg-opacity-70 p-4 shadow-lg md:hidden flex flex-col items-center justify-center '>
              <h1 className='text-5xl mb-8'>Type Statistics</h1>
              <BarChart
                dataset={analytics.formatedTypeData}
                yAxis={[{ scaleType: 'band', dataKey: 'name', }]}
                series={[
                  { dataKey: 'correct', label: 'Correct', color: '#2eab27' },
                  { dataKey: 'wrong', label: 'Wrong', color: '#d62d2d' },
                ]}
                width={screenWidth < 1370 ? screenWidth * 0.9 : screenWidth * 0.5}
                height={500}
                layout='horizontal'
                xAxis={[{ label: 'answers' }]}
              />
            </div>
          </div>


        </div>
      }
    </div>
  )
}

export default YourData