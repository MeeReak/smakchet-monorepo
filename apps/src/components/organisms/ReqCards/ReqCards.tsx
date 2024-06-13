"use client";
import { Requirement } from "@/@types/card";
import { Button } from "@/components/atoms";
import { ReqCard } from "@/components/molechules";
import PopupReq from "@/components/molechules/PopupReq/PopupReq";
import React, { useState } from "react";

const ReqCards = ({ requirement }: { requirement: Requirement }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Function to handle card click event
  const handleCardClick = () => {
    // Set the selected card details
    // setSelectedCard(card);
    // Show the popu
    setIsVisible(true);
  };

  console.log(requirement);

  return (
    <div className="space-y-3">
      <ReqCard
        onClick={handleCardClick}
        description={requirement.age}
        imageSrc="/assets/icons/age-icon.svg"
        title="Age"
      />
      <ReqCard
        onClick={handleCardClick}
        description={requirement.language}
        imageSrc="/assets/icons/languages.svg"
        title="Language"
      />
      <ReqCard
        onClick={handleCardClick}
        description={requirement.skill}
        title="Skill"
        imageSrc="/assets/icons/skill.svg"
      />
      <ReqCard
        onClick={handleCardClick}
        description={requirement.timeCommitment}
        imageSrc="/assets/icons/timecommit.svg"
        title="Time Commitment"
      />
      <Button
        onclick={handleCardClick}
        size="h4"
        className="text-[#207bff] border-[#207bff] py-3"
      >
        Learn more
      </Button>
      {isVisible && (
        <PopupReq requirement={requirement} setVisible={setIsVisible} />
      )}
    </div>
  );
};
export default ReqCards;
