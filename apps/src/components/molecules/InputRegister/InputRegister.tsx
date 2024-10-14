
import { Typography } from '@/components/atoms';
import React, { FC } from 'react'
interface InputRegisterProps {
    placeholder?: string;
    type: string;
    className?: string
    label: string
}


const InputRegister: FC<InputRegisterProps> = ({
    placeholder,
    type,
    className,
    label
}) => {
    const combinedClassName = `md:ml-[25px] ml-[13px] outline-none border-b border-b-[#D6D6D6] py-[10px] w-[312px] w-[312px] md:w-[500px] ${className}`
  return (
    <div className='my-[8px] flex align-middle items-center justify-center md:w-full md:h-[139px] h-[93px]'>
      <div className=' w-[336px] md:w-[711px] h-full md:space-y-5  border border-[#D6D6D6] rounded-[10px]'>
        <Typography  fontWeight='medium' className='md:mt-[30px] md:ml-[25px] mt-3 ml-[15px]' fontSize='h4'>{label}</Typography>
        <input type={type} className={combinedClassName} placeholder={placeholder}/>
      </div>
      
    </div>
  )
}

export {InputRegister}
