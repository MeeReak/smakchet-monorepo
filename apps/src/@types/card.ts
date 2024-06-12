interface CardProps {
  _id: string;
  thumbnail: string;
  alt: string;
  eventName: string;
  Date: {
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
  };
  location: string;
  isLoading?: boolean;
  isFavorite?: Array<string> | undefined;
}

interface Requirement {
  age: string;
  language: string;
  skill: string;
  timeCommitment: string;
}

export type { CardProps, Requirement };
