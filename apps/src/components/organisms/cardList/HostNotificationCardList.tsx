'use client'
import React, {FC, useState} from 'react'
import { HostNotificationCard } from '@/components/molechules'

interface HostNotificationListProps {
    className?: string;
    displayCount?: number;
}

interface HostNotificationCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    time: string;
}
const  HostNotificationCardList: FC<HostNotificationListProps> = ({
    className,
    displayCount = 2
}) => {
    const [hostNotificationInfo, setHostNotificationInfo] = useState<HostNotificationCardProps[]>([
        
        {
            id: '1',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '2',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',

        },
        {
            id: '3',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '4',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '5',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '6',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '7',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '8',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
        {
            id: '9',
            title: 'Peng Maleap',
            description: 'applied to your event',
            image: '/assets/image/leap.jpg',
            time: '11 hours ago',
        },
    ])
    
  return (
    <div>
        {hostNotificationInfo.slice(0, displayCount).map((item,index)=>(
            <HostNotificationCard 
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description} 
                time={item.time}                               />
                
        ))}
    </div>
  )
}

export {HostNotificationCardList}