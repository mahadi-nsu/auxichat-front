import React, { useState } from "react";
import SwitchIcon from "../UI/SwitchIcon";

const ContactActions = () => {
  const [switcValue, setSwitchValue] = useState(false);
  //   const onCheck = () => {
  //     setSwitchValue(!switcValue);
  //   };
  return (
    <>
      <div className="flex">
        <span className="ml-16 mb-4 mt-4 text-[#6588DE]">
          Mute Notifications
        </span>
      </div>
      <div className="py-1 flex justify-center">
        <div className="w-80  max-w-full border-t border-[#D0D9DF]"></div>
      </div>

      <div className="flex">
        <span className="ml-16 mb-4 mt-4 text-[#6588DE]">Starredd Message</span>
      </div>

      <div className="py-1 flex justify-center">
        <div className="w-80  max-w-full border-t border-[#D0D9DF]"></div>
      </div>

      <div className="flex border rounded-lg border-sky-500 w-4/5 mb-4 mt-4 ml-14">
        <span className="ml-16 mb-4 mt-4 text-[#6588DE]">Block Contact</span>
      </div>

      <div className="flex border rounded-lg border-sky-500 w-4/5 mb-20 ml-14">
        <span className="ml-16 mb-4 mt-4 text-[#6588DE]">Delete Chat</span>
      </div>
    </>
  );
};

export default ContactActions;
