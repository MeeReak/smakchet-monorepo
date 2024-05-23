import { Card } from "@/components/molechules";
import { MyContext } from "@/contexts/CardContext";
import React, { useContext } from "react";

interface CardListProps {
  cate: string;
}

const CardList: React.FC<CardListProps> = ({ cate }) => {
  const { CardInfo } = useContext(MyContext);

  const filteredCards = cate === "All" ? CardInfo : CardInfo.filter((item) => item.cate === cate);

  return (
    <div className="max-[1030px]:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {filteredCards.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          src={item.src}
          alt={item.alt}
          title={item.title}
          date={item.date}
          location={item.location}
          isFavorite={item.isFavorite}
        />
      ))}
    </div>
  );
};

export default CardList;
