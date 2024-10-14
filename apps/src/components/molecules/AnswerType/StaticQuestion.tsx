import { Typography, WritingQuestion } from '@/components';
import React, { ReactNode } from 'react'

interface StaticQuestionProp{
    children: ReactNode;
}
const StaticQuestion:React.FC<StaticQuestionProp> = ({children}) => {
  return (
    <div>
      <Typography fontSize='h3'>{children}<span className='text-red-500'>*</span></Typography>
      <WritingQuestion classname='w-full'/>
    </div>
  )
}

export default StaticQuestion;
