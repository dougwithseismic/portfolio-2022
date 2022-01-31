import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const ArticleCard = ({ title, background, index = 0 }) => {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef()


  return (
    <div
      className="p-8 h-[480px] border-2 border-backgroundBlack rounded-lg relative z-99 cursor-pointer bg-backgroundBlack"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={cardRef}
    >
      <div className="content h-full flex flex-col justify-between z-10 relative">
        <div className="top">
          <Image src={'/war-gaming.svg'} alt="fuck" height={36} width={108} />
        </div>
        <div className="middle text-2xl leading-snug">{title}</div>
        <div className="lower uppercase">View Campaign</div>
      </div>
      <motion.div
        className="z-0"
        initial={{ opacity: 0 }}
        animate={hovered ? { opacity: 0.5 } : { opacity: 0 }}
      >
        {/* <Image
          src={background}
          className=""
          objectFit="cover"
          position="absolute"
          alt={title}
          layout="fill"
        /> */}
      </motion.div>
    </div>
  )
}
