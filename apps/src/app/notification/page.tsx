import { NotiCardList, Typography } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-[#f0f2f5] h-[100vh] pt-[100px] pb-[30px] flex justify-center'>
        <div className='xl:w-[855px] md:w-screen w-screen bg-white rounded-lg drop-shadow-lg p-4'>
            <Typography fontSize='h1' fontWeight='bold'>Notifications</Typography>
            <Typography fontSize='h3' fontWeight='normal' className='mt-[25px]'>Earlier</Typography>
            <div>
                <NotiCardList classname="xl:w-[706px] h-[100px]"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
