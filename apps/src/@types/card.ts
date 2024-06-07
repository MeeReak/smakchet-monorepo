interface CardProps {
  _id: string;
  thumbnail: string;
  alt: string;
  eventName: string;
  Date:{
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
  }
  location: string;
  isFavorite?: boolean;
}

export type { CardProps };
