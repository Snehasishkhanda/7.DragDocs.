import React from 'react'

export const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-full'>
        <div className='absolute w-full py-10 text-[25px] font-serif flex justify-center text-zinc-600'>Document</div>
        <h1 className='absolute -translate-x-[50%] -translate-y-[50%] text-[15vw] font-semibold text-zinc-800 top-1/2 left-1/2 leading-none tracking-tighter'>Docs.</h1>
        </div>  
    </>
  )
}
