"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export interface CardModal {
  id: string;
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
  isFavorite: boolean;
  cate: string;
}

export interface CardUser {
  id: string;
  name: string;
  date: string;
  gmail: string;
  profile: string;     
  status: string
}

interface CardContextProp {
  children: ReactNode;

}

interface ContextProps {
  CardInfo: CardModal[];
  CardUser: CardUser[];
  setCardInfo: React.Dispatch<React.SetStateAction<CardModal[]>>;
  setUserInfo: React.Dispatch<React.SetStateAction<CardUser[]>>
  toggleFavorite: (id: string) => void;
  setAccept: (id: string)=> void;
  setDecline: (id: string)=> void;
}

export const MyContext = createContext<ContextProps>({
  CardInfo: [],
  CardUser: [],
  setCardInfo: () => {},
  setUserInfo: () => {},
  toggleFavorite: () => {},
  setAccept: () => {},
  setDecline: () => {},
});

const CardContext: React.FC<CardContextProp> = ({ children }) => {
  const [CardInfo, setCardInfo] = useState([
    {
      id: "1",
      src: "/assets/image/National_day_of_Science,Technology_and_Innovation.png",
      alt: "National day of Science, Technology and Innovation 2024",
      title: "National day of Science, Technology and Innovation 2024",
      date: "Mar 03 2024",
      location: "Phnom Penh",
      isFavorite: false,
      cate: "Exhibition",
    },
    {
      id: "2",
      src: "/assets/image/cambodia_book_fair.png",
      alt: "Cambodia Book Fair",
      title: "Cambodia Book Fair",
      date: "Oct 25 2024",
      location: "Phnom Penh",
      isFavorite: false,
      cate: "Charity",    },
    {
      id: "3",
      src: "/assets/image/ace_volunteer.png",
      alt: "ACE Graduation Ceremony",
      title: "ACE Graduation Ceremony",
      date: "May 18 2024",
      location: "Phnom Penh",
      isFavorite: false,
      cate: "Environmental",
    },
    {
      id: "4",
      src: "/assets/image/National_day_of_Science,Technology_and_Innovation.png",
      alt: "National day of Science, Technology and Innovation 2024",
      title: "National day of Science, Technology and Innovation 2024",
      date: "Mar 03 2024",
      location: "Phnom Penh",
      isFavorite: false,
      cate: "Sport",    },
    {
      id: "5",
      src: "/assets/image/cambodia_book_fair.png",
      alt: "Cambodia Book Fair",
      title: "Cambodia Book Fair",
      date: "Oct 25 2024",
      location: "Phnom Penh",
      isFavorite: false,
      cate: "Workshop",
    },
    {
      id: "6",
      src: "/assets/image/ace_volunteer.png",
      alt: "ACE Graduation Ceremony",
      title: "ACE Graduation Ceremony",
      date: "May 18 2024",
      location: "Phnom Penh",
      isFavorite: false,
      cate: "Education",
    },
  ]);

  const [CardUser, setCardUser] = useState([
    {
      id: "1",
      name: "Peng maleap",
      date: "Feb 08, 2020",
      gmail: "pengmaleap@gmail.com",
      profile: "/assets/image/leap.svg",
      status: "Pending",
    },
    {
      id: "2",
      name: "kimlarng",
      date: "Feb 09, 2020",
      gmail: "kimlarng@gmail.com",
      profile: "/assets/image/leap.svg",
      status: "Pending",
    },
    {
      id: "3",
      name: "sarun",
      date: "Feb 10, 2020",
      gmail: "sarun@gmail.com",
      profile: "/assets/image/leap.svg",
      status: "Pending",
    },
    {
      id: "4",
      name: "reak",
      date: "Feb 11, 2020",
      gmail: "reak@gmail.com",
      profile: "/assets/image/leap.svg",
      status: "Pending",
    },
    {
      id: "5",
      name: "nith",
      date: "Feb 12, 2020",
      gmail: "nith@gmail.com",
      profile: "/assets/image/leap.svg",
      status: "Pending",
    },
    {
      id: "6",
      name: "heloo",
      date: "Feb 12, 2020",
      gmail: "helloo@gmail.com",
      profile: "/assets/image/leap.svg",
      status: "Pending",
    },
  ]);

  useEffect(() => {
    const data = getLocalStorage("cardInfo")
      ? getLocalStorage("cardInfo")
      : CardInfo;
    setCardInfo(data);
  }, []);

  function toggleFavorite(id: string) {
    const updatedCard = CardInfo.map((card) => {
      if (card.id == id) {
        return {
          ...card,
          isFavorite: !card.isFavorite,
        };
      }
      return card;
    });
    setLocalStorage("cardInfo", updatedCard);
    setCardInfo(updatedCard);
  }

  function setAccept(id: string) {
    const updatedUsers = CardUser.map((user) => {
      if (user.id === id && user.status === "Pending") {
        return {
          ...user,
          status: "Accepted",
        };
      }
      console.log("accept function is working")
      return user;
    });
    setLocalStorage("applicantInfo", updatedUsers)
    setCardUser(updatedUsers);
  }

  function setDecline(id: string) {
    const updatedUsers = CardUser.map((user) => {
      if (user.id === id && user.status === "Pending") {
        return {
          ...user,
          status: "Rejected",
        };
      }
      console.log("decline function is working")
      return user;
    });
    setLocalStorage("applicantInfo", updatedUsers)
    setCardUser(updatedUsers);
  }


  const Contextvalue = {
    toggleFavorite,
    CardInfo,
    setCardInfo,
    CardUser,
    setCardUser,
    setAccept,
    setDecline,
  };
  return (
    <MyContext.Provider value={Contextvalue}>{children}</MyContext.Provider>
  );
};

export default CardContext;
function usrEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
