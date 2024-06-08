"use client"
import { ReqCard } from "@/components/molechules";
import Popup from "@/components/molechules/Filter/Popup";
import PopupReq from "@/components/molechules/PopupReq/PopupReq";
import { RequireDetail } from "@/components/molechules/ReqCardDetail/RequireDetail";
import React, { useState } from "react";

const ReqCards = () => {
  const [selectedCard, setSelectedCard] = useState(null); 
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Function to handle card click event
  const handleCardClick = () => {
    // Set the selected card details
    // setSelectedCard(card);
    // Show the popu
      setIsVisible(true);
  };
    return (
      <div className="space-y-3">
        <ReqCard
          onClick={handleCardClick}
          description="18 - 25"
          imageSrc="/assets/icons/age-icon.svg"
          title="Age"
        />
        <ReqCard
          onClick={handleCardClick}
          description="Khmer and English (Basic well)"
          imageSrc="/assets/icons/languages.svg"
          title="Language"
        />
        <ReqCard
          onClick={handleCardClick}
          description="You should also be physically fit, as volunteering overseas can be quite strenuous. If you have any medical/mental health conditions that may affect your participation overseas then these must be declared to us during your online application."
          imageSrc="/assets/icons/skill.svg"
          title="Skill"
        />
        <ReqCard
          onClick={handleCardClick}
          description="Monday - Friday from 09:00 - 14:00"
          imageSrc="/assets/icons/timecommit.svg"
          title="Time Commitment"
        />
        {isVisible && (
          <PopupReq setVisible={setIsVisible} />
        )}
      </div>
    );
  }
;

export default ReqCards;
