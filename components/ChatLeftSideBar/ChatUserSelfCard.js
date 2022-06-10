import React from "react";

const ChatUserSelfCard = ({ data: { name, gender, image } }) => {
  const profile_pic = image
    ? image
    : gender === "male"
    ? "/images/male.jpg"
    : "/images/female.jpg";

  return (
    <div className="flex">
      <div className="basis-[20%] min-w-max">
        <img
          className="object-cover h-[44px] w-[44px] rounded-full"
          src={profile_pic}
          alt="card-img"
        />
      </div>

      <div className="basis-[80%] flex flex-col justify-around">
        <p className="text-[14px] text-[#52585D] font-semibold whitespace-nowrap">
          {name}
        </p>
        <div className="bg-[#6588DE] flex items-center gap-2 py-[2px] px-1.5 rounded-full w-max">
          <div className="w-3 h-3 bg-[#F3BA4A] rounded-full"></div>
          <select
            className="text-[10px] text-white bg-[#6588DE] rounded-full focus:outline-none"
            name=""
            id=""
          >
            <option value="">Sleeping</option>
            <option value="">Working</option>
            <option value="">Traveling</option>
          </select>
        </div>
      </div>
      <div className="pt-1">
        <img className="h-[21px]" src="/images/settings.png" alt="settings" />
      </div>
    </div>
  );
};

export default ChatUserSelfCard;
