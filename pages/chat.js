import React from "react";
import ChatUserSelfCard from "../components/ChatLeftSideBar/ChatUserSelfCard";
import ContactActions from "../components/ContactMedia/ContactActions";
import ContactInfo from "../components/ContactMedia/ContactInfo";
import ContactMedia from "../components/ContactMedia/ContactMedia";

const chat = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 gap-5">
      {/* LEFT SIDE BAR START */}
      <div className=" col-span-3 flex flex-col">
        <div className="bg-[#E3F6FC] h-32 rounded-b-lg p-5">
          <ChatUserSelfCard />
        </div>
        <div className="bg-[#E3F6FC] mt-4 h-full rounded-t-lg"></div>
        <div className="bg-[#E3F6FC] h-20"></div>
      </div>
      {/* LEFT SIDE BAR END */}

      <div className="bg-red-100 col-span-6"></div>

      {/* right sidebar started */}

      <div className="bg-[#E3F6FC] w-[420px] mt-4">
        <div className="bg-[#6588DE] w-8 h-8 mt-6 ml-6 p-[4px] rounded-full flex justify-center items-center mb-8">
          <img
            className="object-cover w-[10px] h-[10px]"
            src="/images/Vector.png"
            alt="profile-img"
          />
        </div>
        <ContactInfo />
        <ContactMedia />

        <ContactActions />
      </div>
    </div>
  );
};

export default chat;
