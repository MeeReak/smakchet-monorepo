"use client"
import  { SubmitForm } from '@/components/organisms/submitForm/submitForm'
import { MyContext } from '@/contexts/CardContext';
import React, { useContext, useState } from 'react'

interface SubmitFormProp {
  name: string;
  address: string;
  email: string;
  phonenumber: string;
  reason: string;
  joinbefore: string;
}

const Page = () => {

  const { CardInfo } = useContext(MyContext);

  const [submitForm, setSubmitForm] = useState<SubmitFormProp>({
    name: "",
    address: "",
    email: "",
    phonenumber: "",
    reason: "",
    joinbefore: "",
  });

  const handleOnChange = (
    name: string,
    address: string,
    email: string,
    phonenumber: string,
    reason: string,
    joinbefore: string
  ) => {
    setSubmitForm((pre) => ({
      ...pre,
      name: name,
      address: address,
      email: email,
      phonenumber: phonenumber,
      reason: reason,
      joinbefore: joinbefore
    }));
    console.log(submitForm);
  };
  return (
    <div className="xl:w-[1024px] w-screen m-auto space-y-5 z-10 mt-[100px] mb-20">
      <SubmitForm
        onchange={(name, address, email, phonenumber, reason, joinbefore) =>
          handleOnChange(name, address, email, phonenumber, reason, joinbefore)
        }
      />
    </div>
  );
};

export default Page;
