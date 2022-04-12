import React from "react";

const ContactInfo = () => {
  const profileData = {
    name: "Alena Rhiel Madsen",
    designation: "Sr. Visual Designer",
    profile_pic: "/images/user_profile.png",
  };
  return (
    <div className=" mt-2 mr-2 flex flex-col items-center">
      <span className="text-[#6588DE] text-[18px] font-semibold">
        Contact Info
      </span>
      <img
        className="object-cover h-28 w-28 rounded-full mt-4"
        src={profileData.profile_pic}
        alt="profile-img"
      />
      <span className="text-[#6588DE] text-[18px] font-semibold mt-3">
        {profileData.name}
      </span>

      <span className="text-[#52585D] text-[15px] font-normal mt-3">
        {profileData.designation}
      </span>

      <div className=" h-14 mt-4 w-3/4 flex justify-evenly">
        <div className="bg-[#6588DE] w-28 h-6 rounded-3xl flex items-center">
          <div className="bg-[#46D362] h-2 w-2 rounded-full ml-2"></div>
          <span className="text-[#F2F6F7] mr-2 mb-1 ml-3">Available</span>
        </div>
        <div className="bg-[#F7B6B4] w-28 h-6 rounded-3xl flex items-center">
          <div className="text-[#F2F6F7] h-4 w-5 rounded-full ml-2 mb-1">
            <img src="/images/phone_icon.png" />
          </div>
          <span className="text-[#F2F6F7] mr-4 mb-1 ml-4">Call</span>
        </div>
      </div>
      <div class="py-1">
        <div class="w-80  max-w-full border-t border-[#D0D9DF]"></div>
      </div>
    </div>
  );
};

export default ContactInfo;
