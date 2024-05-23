"use client"
import { Button } from '@/components/atoms'
import React, { FC, useState } from 'react'

interface PostAboutGroupProps {
    setAction : (index: number)=>void
    action: number
    setCategory: (Category: string) => void
}

const PostAboutGroup:FC<PostAboutGroupProps> = ({
    setAction,
    action,
    setCategory
}) => {
    const [type, setType] = useState([
        "Post",
        "About"
    ])
  return (

    <div className="max-[1030px]:px-5 flex items-center space-x-[15px] max-w-[1024px] m-auto">
        <div className=" flex items-center space-x-[15px] overflow-x-auto overflow-hidden scrollbar-hide">
          {type.map((item, index) => (
            <Button
              onclick={() => {
                setAction(index);
                setCategory(item);
              }}
              round="full"
              className={`rounded-full border-[1px] px-6 py-3 max-[640px]:text-xs ${
                action === index
                  ? "bg-[#207b00] text-white"
                  : "hover:bg-[#bdd8ff] hover:text-[#207BFF] hover:border-[#207BFF]"
              } transition-all duration-150 ease-in-out`}
              key={index}
            >
              {item}
            </Button>
          ))}
        </div>
            
    
    </div>

  )
}

export {PostAboutGroup}
