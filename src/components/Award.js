import React from 'react'
import Image from 'next/image'

export const Award = ({
  title = `Most Effective Cross-Channel Campaign`,
  collaborators = `withSeismic`,
}) => {
  return (
    <div className="award flex items-top gap-4 max-w-[360px]">
      <div className="award__flag relative">
        <Image
          alt="Performance Marketing Award"
          src="/PMAPMA.png"
          width={108}
          height={100}
        />
      </div>
      <div className="award__text flex flex-col gap-0 font-sans">
        <div className="upper text-[#636363] text-base">
          PERFORMANCE MARKETING AWARDS
        </div>
        <div className="lower uppercase text-2xl font-sans leading-6 text-white">
          {title}
        </div>
        <div className="upper text-brightOrange text-base mt-4">
          {collaborators}
        </div>
      </div>
    </div>
  )
}
