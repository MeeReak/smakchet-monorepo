import { Typography } from '@/components/atoms';
import React from 'react'
import { YesNoQuestion } from '../AnswerType';

interface YesNoProps {
  className?: string;
  question: string;
} 

export const YesNo:React.FC<YesNoProps> = ({className, question}) => {

    
  return (
    <div className="w-[1024px] h-[140px] bg-[#F8F8F8] rounded-[10px]">
      <div className="space-y-3 py-[28px]">
        <Typography className="pl-4" fontSize="h4">
          {question}
          <span className="text-[16px] text-red-500">*</span>
        </Typography>
        <div className="px-4 py-2 ">
          <YesNoQuestion />
        </div>
      </div>
    </div>
  );
}
