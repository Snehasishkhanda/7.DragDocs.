import React, { useRef } from 'react'
import { Card } from './Card'

export const Foreground = () => {

 const ref = useRef(null);

  const data =[
    {
    des:"I always happy when do coding",
    filesize:".9mb",
    close:true,
    tag:{
      isopen:true,tegTitle:"Good work!",tagColour:"blue"
    }
  },
  {
    des:"I try to create something new that is help for contribute the world",
    filesize:".3mb",
    close:false,
    tag:{
      isopen:false,tegTitle:"Ok Ok!",tagColour:"blue"
    },
  },
  {
    des:"i will successfull one day!",
    filesize:".7mb",
    close:true,
    tag:{
      isopen:true,tegTitle:"Download!",tagColour:"green"
    },
  }
]
  
  return (
    <>
    <div ref={ref} className=' flex flex-wrap gap-5 fixed top-0 left-0 w-full h-screen z-[3] py-[20px] px-[20px]'>
     {data.map((item,index)=>(
      <Card data={item} containerRef={ref}/>
     ))}
    </div>
    </>
  )
}
