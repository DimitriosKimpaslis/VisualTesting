import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resultValue = queryParams.get('result');
  const totalValue = queryParams.get('total');
  const generateResultHtml = (resultNumber) => {
    if (resultNumber == 10) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <img src={require('../media/gifs/perfect.gif')} alt='perfect' />
          <h1>Perfect Score!</h1>
          <h2>Good Job!</h2>
        </div>
      )
    } else if (resultNumber >= 8) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <img src={require('../media/gifs/suprised.gif')} alt='great' />
          <h1>Great Job!</h1>
          <h2>Almost Perfect!</h2>
        </div>
      )
    } else if (resultNumber >= 6) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <img src={require('../media/gifs/relaxed.gif')} alt='good' />
          <h1>Good Job!</h1>
          <h2>Keep Practicing!</h2>
        </div>
      )
    } else if (resultNumber >= 4) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <img src={require('../media/gifs/hideThePain.gif')} alt='not bad' />
          <h1>Not Bad!</h1>
          <h2>Keep Practicing!</h2>
        </div>
      )
    } else if (resultNumber >= 2) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <img src={require('../media/gifs/angry.gif')} alt='not good' />
          <h1>Not Good!</h1>
          <h2>Keep Practicing!</h2>
        </div>
      )
    } else if (resultNumber >= 0) {
      return (
        <div className='flex flex-col justify-center items-center'>
          <img src={require('../media/gifs/furious.gif')} alt='bad' />
          <h1>Bad!</h1>
          <h2>Keep Practicing!</h2>
        </div>
      )
    }
  }

  return (
    <div className='flex justify-center w-full items-center h-[80vh]'>
      <div className='bg-white shadow-md md:max-w-xl md:mx-0 mx-4 w-full text-center p-4'>
        <h1>Results</h1>
        <h2 className='mb-5'>You got {resultValue} out of {totalValue}!</h2>
        {generateResultHtml(resultValue)}
        <button className='bg-green-500 px-8 py-1 my-5 md:hover:bg-green-600 font-medium' onClick={() => navigate('/grid')}>Try again</button>
      </div>
    </div>
  )
}

export default Results