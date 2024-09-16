import React from 'react'

const Banner = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex justify-center items-center font-arcade">
      <div className="inner_container text-yellow-400 italic ">
        <div style={{backgroundImage:`url("/images/20.webp")`}} className='relative h-[450px] w-[900px]'>
          
          <h1 className='text-7xl absolute top-6 left-4'><span className='text-8xl'>R</span>aghib Shahriar</h1>
          <h1 className='text-7xl absolute bottom-6 right-4'> <span className='text-8xl'>S</span>oftware Developer</h1>
          <img className='absolute h-20 w-20 top-6 right-4 rounded-full border-2  border-yellow-400 shadow-md shadow-yellow-400' src="/public/images/js.png" alt="" />
          <img className='absolute h-20 w-20 bottom-36 right-[260px] rounded-full border-2  border-green-400 shadow-md shadow-green-400' src="/public/images/node.png" alt="" />
          <img className='absolute h-20 w-40 bottom-64  left-[80px] rounded-full border-2  border-red-400 shadow-md shadow-red-400' src="/public/images/npm.png" alt="" />
          <img className='absolute h-14 w-14 bottom-72 right-[260px] rounded-full border-2  border-yellow-400 shadow-md shadow-yellow-400 m-10' src="/public/images/python.png" alt="" />
          <img className='absolute h-24 w-24 top-44 right-4 rounded-full border-2  border-blue-400 shadow-md shadow-blue-400' src="/public/images/react.png" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Banner