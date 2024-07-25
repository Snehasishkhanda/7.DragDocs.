import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
export const Card = ({data,containerRef}) => {
  return (
    <>
<motion.div drag dragConstraints={containerRef} whileDrag={{scale:1.2}} dragElastic={.2} className='h-48 w-36 bg-zinc-800 rounded-md text-white p-3 relative overflow-hidden'>
        <FaRegFileAlt/>
        <p className='leading-none mt-2'>{data.des}</p>
        <div className='absolute left-0 bottom-9 flex h-2 w-full justify-between items-center'>
        <h3>{data.filesize}</h3>
        <span className='h-5 w-5 bg-zinc-600 flex items-center justify-center rounded-full'>
          <span>{data.close?<IoIosCloseCircle/>:<MdDownload/>}</span>
        </span>
        </div>
        {data.tag.isopen?(
          <div className={`btm h-6 w-full ${data.tag.tagColour==="blue"?"bg-blue-600":"bg-green-600"} absolute left-0 bottom-0 text-center`}>{data.tag.tegTitle}</div>
        ):null}
    </motion.div>
    </>
  )
}
