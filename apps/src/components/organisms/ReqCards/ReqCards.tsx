import { ReqCard } from "@/components/molechules";
import React from "react";

const ReqCards = () => {
  return (
    <div className="space-y-3">
      <ReqCard
        description="18 - 25"
        imageSrc="/assets/icons/age-icon.svg"
        title="Age"
      />
      <ReqCard
      
        description="Khmer and English (Basic well)"
        imageSrc="/assets/icons/languages.svg"
        title="Language"
      />
      <ReqCard
        description="You should also be physically fit, as volunteering overseas can be quite strenuous. If you have any medical/mental health conditions that may affect your participation overseas then these must be declared to us during your online application."
        imageSrc="/assets/icons/skill.svg"
        title="Skill"
      />
      <ReqCard
        description="Monday - Friday from 09:00 - 14:00"
        imageSrc="/assets/icons/timecommit.svg"
        title="Time Commitment"
      />
    </div>
  );
};

export default ReqCards;
