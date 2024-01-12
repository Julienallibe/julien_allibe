import React from 'react'

const Projects = () => {
  return (
    <div id='contianer'>
        <div className='text-white font-semibold text-center text-6xl mt-[-20px]'>
            Projets
        </div>
        <div className='flex flex-row flex-wrap justify-around items-center max-w-[900px] mx-auto mt-9'>
            <div className='box-border h-[500px] w-[300px] p-4 border-4 rounded-md mr-2'>
                <h3 className='text-white'>Project 1</h3>
            </div>
            <div className='box-border h-[500px] w-[300px] p-4 border-4 rounded-md '>
                <h3 className='text-white'>Project 1</h3>
            </div>
            <div className='box-border h-[500px] w-[300px] p-4 border-4 rounded-md mr-2'>
                <h3 className='text-white'>Project 1</h3>
            </div>
            <div className='box-border h-[500px] w-[300px] p-4 border-4 rounded-md '>
                <h3 className='text-white'>Project 1</h3>
            </div>
        </div>
    </div>
  )
}

export default Projects