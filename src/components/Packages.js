import React from 'react'

const Packages = () => {
    return (
        <div className='lg:mx-36 md:mx-24 mx-4 text-center md:mt-24'>
            <h1 className='font-semibold text-4xl mb-5'>Packages</h1>
            <p className='mb-16 text-lg'>Discover our range of packages, each crafted to enhance your MBTI visual typing experience. Select a plan that suits your needs, offering in-depth insights and personalized guidance on your path to self-discovery and improved interpersonal skills.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='bg-slate-400 rounded-lg mb-3 p-4 w-full flex flex-col items-center'>
                        <h1 className='font-semibold'>10 Lesson Pack</h1>
                        <h1 className='text-5xl font-bold'>180$</h1>
                        <p>For achieving short term goals</p>
                        <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 w-[90%] mt-5'>Select</button>
                        <div className='mt-4'>
                            <p className='italic mb-4 text-lg font-medium'>10 Group lessons</p>
                            <p className='italic mb-4 text-lg font-medium'>Online resources</p>
                        </div>
                    </div>

                    <div className='bg-[#FF7648] rounded-lg mb-3 p-4 w-full relative flex flex-col items-center'>
                        <p className='absolute top-[-4%] bg-[#FFBBA3] p-1 font-semibold'>Best Value</p>
                        <h1 className='font-semibold'>Monthly Unlimited</h1>
                        <h1 className='text-5xl font-bold'>250$</h1>
                        <p>Unlimited access to tutoring and materials</p>
                        <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 w-[90%] mt-5'>Select</button>
                        <div className='mt-4'>
                            <p className='italic mb-4 text-lg font-medium'>Unlimited lessons</p>
                            <p className='italic mb-4 text-lg font-medium'>Unlimited practice materials</p>
                            <p className='italic mb-4 text-lg font-medium'>Online resources</p>
                            <p className='italic mb-4 text-lg font-medium'>Weekly newsletter</p>
                        </div>
                    </div>
                
                    <div className='bg-slate-400 rounded-lg mb-3 p-4 w-full flex flex-col items-center'>
                        <h1 className='font-semibold'>Weekly Tutoring</h1>
                        <h1 className='text-5xl font-bold'>75$</h1>
                        <p>For achieving long term goals</p>
                        <button className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 w-[90%] mt-5'>Select</button>
                        <div className='mt-4'>
                            <p className='italic mb-4 text-lg font-medium'>4 lessons</p>
                            <p className='italic mb-4 text-lg font-medium'>Unlimited practice materials</p>
                            <p className='italic mb-4 text-lg font-medium'>Online resources</p>
                            <p className='italic mb-4 text-lg font-medium'>Weekly newsletter</p>
                            <p className='italic mb-4 text-lg font-medium'>Priority support</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Packages