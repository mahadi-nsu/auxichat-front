import React from 'react';

const ChatListCard = ({ chatPreviewData }) => {
    return (
        <div className="flex">
            <div className="basis-[25%] min-w-max">
                <img className="object-cover h-[44px] w-[44px] rounded-full" src={chatPreviewData.profile_pic} alt="card-img" />
            </div>

            <div className="basis-[65%] flex flex-col justify-around">
                <p className="text-[14px] text-[#52585D] font-semibold">{chatPreviewData.name}</p>
                <p className="py-[2px] text-xs text-gray-400">
                    {chatPreviewData.lastText}
                </p>
            </div>
            <div className="pt-1 flex flex-col items-end justify-between basis-[10%]">
                <p className="text-xs text-gray-400">{chatPreviewData.lastChatTime}</p>
                <img className="w-[13px]" src="/images/online.png" alt="online" />
            </div>

        </div>
    );
};

export default ChatListCard;