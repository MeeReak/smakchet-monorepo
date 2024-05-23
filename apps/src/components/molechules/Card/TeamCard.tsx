import React from 'react'
import Image from "next/image"
import { Typography } from '@/components'

const TeamCard = () => {
  return (
    <div>
      <div className='flex items-center flex-col'>
        <div>
            <Image
              src={"/assets/image/leap.svg"}
              alt={"profile"}
              width={180}
              height={180}
              className="rounded-full border border-[#207bff]"
            ></Image>
        </div>
        <div>
            <Typography align='center'>Peng Maleap</Typography>
            <Typography align='center'>Former:</Typography>
            <Typography align='center'>Full-Stack Developer bootcamp 3.0</Typography>
            <Typography align='center'>Currently:</Typography>
            <Typography align='center'>UX/UI at SabaiCode</Typography>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
