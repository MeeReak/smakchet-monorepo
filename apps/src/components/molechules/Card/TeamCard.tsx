import React from 'react'
import Image from "next/image"
import { Typography } from '@/components'

const TeamCard = () => {
  return (
    <div>
      {/* box-shadow: 0px 4px 4px 0px #0000001A; */}

      <div className='flex items-center flex-col gap-y-[15px] px-5 py-[25px] shadow-none md:shadow-md rounded-[10px]'>
        <div>
            <Image
              src={"/assets/image/leap.svg"}
              alt={"profile"}
              width={100}
              height={100}
              className="rounded-full border border-[#207bff]" 
            ></Image>
        </div>
        <div>
            <Typography className='!text-base' fontWeight='medium' align='center'>Peng Maleap</Typography>
            <Typography className='!text-base' align='center' fontSize='h3'>Currently : UX/UI Designer</Typography>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
