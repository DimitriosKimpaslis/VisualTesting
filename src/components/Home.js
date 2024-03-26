import { Button } from '@mui/material'
import React from 'react'
import { ReactComponent as Person } from '../media/images/person.svg'
import { ReactComponent as Book } from '../media/images/book.svg'
import { ReactComponent as Setting } from '../media/images/setting.svg'
import { ReactComponent as Image } from '../media/images/image.svg'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='absolute top-0'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='flex flex-col justify-center items-center bg-[#FFF1E0] bg-opacity-80 p-5 h-screen text-center'>
          <h1 className='text-5xl font-bold'>Private Lessons Online</h1>
          <p className='text-xl'>Take your visual typing game to the next level</p>
          <div className='my-7 flex gap-5'>
            <button onClick={() => navigate('/contact')} className='bg-blue-700 hover:bg-blue-800 py-2 px-5 text-white font-semibold'>Book a trial</button>
            <button onClick={() => navigate('/packages')} className='bg-white hover:bg-gray-100 py-2 px-5 text-blue-700 font-semibold border border-blue-700'>Pick a package</button>
          </div>
        </div>
        <div className='w-full bg-question bg-cover'>
        </div>
      </div>
      <div className='grid grid-cols-1'>
        <div className='mt-16'>
          <div className='bg-white p-10 md:mx-20 mx-5 mt-10 rounded-sm shadow-xl'>
            <h1 className='text-3xl font-semibold mb-4 md:text-left text-center'>What Do We Teach?</h1>
            <p className='mb-5 text-lg md:text-left text-justify'>At our core, we specialize in teaching the art and science of visual typing through the lens of MBTI. From decoding personality traits through imagery to guiding individuals on a journey of self-discovery, our focus is on providing a unique and insightful educational experience. Join us to explore the rich tapestry of human personalities and gain a deeper understanding of yourself and those around you.</p>
            <div className='flex md:justify-start justify-center'>
              <button onClick={() => navigate('/contact')} className='bg-blue-700 hover:bg-blue-800  py-2 px-5 text-white font-semibold'>Contact</button>

            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-24 md:mx-10 mx-5 mt-5 text-justify'>
          <div className='space-y-4'>
            <div className='text-4xl text-center'>
              <p>Visual</p>
              <p>Typing:</p>
            </div>

            <div className='bg-yellow-500 rounded-sm flex justify-center items-center p-4 shadow-lg'>
              <Person className='w-[50%] h-[200px] my-5' />
            </div>
            <p className='text-gray-600 italic text-lg'>Explore visual typing and MBTI with us! You will find interactive tests and insights into your personality through visual cues. Join us as we dive into the realm of visual typing, where each image tells a unique story about personality.</p>
          </div>
          <div className='space-y-4'>
            <div className='text-4xl text-center'>
              <p>MBTI</p>
              <p>Mastery:</p>
            </div>
            <div className='bg-blue-600 rounded-sm mb-3 flex justify-center items-center p-4 shadow-lg'>
              <Book className='w-[50%] h-[200px] my-5' />
            </div>
            <p className='text-gray-600 italic text-lg'>Join us in unlocking the intricacies of MBTI! Explore tailored assessments, unravel secrets behind each personality dimension, and embark on a journey of self-discovery with our community of enthusiasts.</p>
          </div>
          <div className='space-y-4'>
            <div className='text-4xl text-center'>
              <p>Social</p>
              <p>Engineering:</p>
            </div>

            <div className='bg-red-400 rounded-sm mb-3 flex justify-center items-center p-4 shadow-lg'>
              <Setting className='w-[50%] h-[200px] my-5' />
            </div>
            <p className='text-gray-600 italic text-lg'>Delve into the art and science of human interaction with us. Start training, to master persuasive communication, enhance interpersonal skills, and decode the subtle cues that shape behavior. Let's elevate your social engineering skills together.</p>
          </div>
          <div className='space-y-4'>
            <div className='text-4xl text-center'>
              <p>Imagery</p>
              <p>Insights:</p>
            </div>
            <div className='bg-purple-400 rounded-sm mb-3 flex justify-center items-center p-4 shadow-lg'>
              <Image className='w-[50%] h-[200px] my-5' />
            </div>
            <p className='text-gray-600 italic text-lg'>Embark on a visual journey with us as we unravel personality insights through imagery and MBTI. Explore the fascinating connection between visual elements and individual traits. Join our community to delve into the art of visual typing, where each image becomes a portal to understanding the intricate details of personality and self-discovery.</p>
          </div>
        </div>
      </div>
      <div className='md:h-10 h-20'>{/*im using absolute top-0 on this component so i have to use this custom spacer block instead of the one in App.js that is included to every component */}</div>
    </div>
  )
}

export default Home