import React from "react";
import ChatListCard from "../components/ChatLeftSideBar/ChatListCard";
import ChatUserSelfCard from "../components/ChatLeftSideBar/ChatUserSelfCard";
import ContactActions from "../components/ContactMedia/ContactActions";
import ContactInfo from "../components/ContactMedia/ContactInfo";
import ContactMedia from "../components/ContactMedia/ContactMedia";
import { chatListData } from "../dummyChatList";

const chat = () => {
  return (
    <div className="h-screen flex gap-5">
      {/* LEFT SIDE BAR START */}
      <div className="flex flex-col basis-[20%] max-w-xs h-screen overflow-y-scroll hide_scrollbar">
        <div className="bg-[#E3F6FC] rounded-b-lg p-5">
          <ChatUserSelfCard />
        </div>
        <div className="bg-[#E3F6FC] mt-4 p-5 flex flex-col gap-10 h-full rounded-t-lg">
          {
            chatListData.map((chatPreviewData, index) => (
              <ChatListCard
                chatPreviewData={chatPreviewData}
                key={index}
              />
            ))
          }
        </div>
        <div className="bg-[#E3F6FC]"></div>
      </div>
      {/* LEFT SIDE BAR END */}

      <div className="grow"></div>

      {/* right sidebar started */}

      <div className="bg-[#E3F6FC] mt-[2vh] mr-[2vh] basis-[20%] min-w-max max-w-xs
       h-[96vh] rounded-lg overflow-y-scroll hide_scrollbar shadow-xl">
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
