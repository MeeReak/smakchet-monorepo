'use client'
import React, {FC, useState} from 'react'
import { EventNotificationCard } from '@/components/molechules'

interface EventNotificationListProps {
    className?: string;
}

interface EventNotificationCardProps {
    id: string;
    title: string;
    duration: string;
    description: string;
    image: string;
    time: string;
}
const  EventNotificationCardList: FC<EventNotificationListProps> = ({
    className,
}) => {
    const [EventNotificationInfo, setEventNotificationInfo] = useState<EventNotificationCardProps[]>([
        
        {
            id: '1',
            title: 'Cambodia Book Fair',
            duration: 'is coming up in 5 days.',
            description: 'Check volunteer details and make final decison.',
            image: '/assets/image/need_volunteer.png',
            time: '11 hours ago',
        },
       
    ])
    
  return (
    <div>
        {EventNotificationInfo.map((item,index)=>(
            <EventNotificationCard 
                key={index}
                id={item.id}
                title={item.title}
                duration={item.duration}
                image={item.image}
                description={item.description} 
                time={item.time}                               
            />
                
        ))}
    </div>
  )
}

export {EventNotificationCardList}