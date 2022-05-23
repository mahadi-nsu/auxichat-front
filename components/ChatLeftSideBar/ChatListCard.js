import React from 'react';

const ChatListCard = ({ chatPreviewData, selectedChat, setSelectedChat, online }) => {
    const profile_pic = chatPreviewData.image
      ? chatPreviewData.image
      : chatPreviewData.gender === "male"
      ? "/images/male.jpg"
      : "/images/female.jpg";

    return (
        <div
            onClick={() => setSelectedChat(chatPreviewData)}
            className={` ${selectedChat._id === chatPreviewData._id ? "bg-[#6588DE] translate-x-1 shadow-[#6588DE]/50 shadow-lg" :
                "hover:bg-[#a7b8e25b] hover:translate-x-1"} flex p-3 rounded-[14px] cursor-pointer transition-all duration-200`}
        >
            <div className="basis-[25%] pr-1 min-w-max relative">
                {online && <div className="rounded-full w-3 h-3 bg-[#46D362] absolute left-8 border-2"></div>}
                <img className="object-cover h-[44px] w-[44px] rounded-full" src={profile_pic} alt="card-img" />
            </div>

            <div className="basis-[65%] flex flex-col justify-around">
                <p className={`${selectedChat._id === chatPreviewData._id ? "text-[#FDFDFE]" : "text-[#52585D]"} text-[14px] whitespace-nowrap font-semibold`}>{chatPreviewData.name}</p>
                <p className={`${selectedChat._id === chatPreviewData._id ? "text-[#F2F6F7]" : "text-[#96A9BA]"} py-[2px] text-xs text-gray-400`}>
                    {chatPreviewData.lastText}
                </p>
            </div>
            <div className="pt-1 flex flex-col items-end justify-between basis-[10%]">
                <p className={`${selectedChat._id === chatPreviewData._id ? "text-[#F2F6F7]" : "text-[#96A9BA]"} py-[2px] text-xs text-gray-400`}>
                    {chatPreviewData.lastChatTime}
                </p>
            </div>
        </div>
    );
};

export default ChatListCard;