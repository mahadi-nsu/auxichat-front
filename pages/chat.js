import React, { useState, useEffect } from "react";
import { BiUser, BiStar, BiSearch } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import { axios } from "../lib/axios";

import ChatListCard from "../components/ChatLeftSideBar/ChatListCard";
import ChatUserSelfCard from "../components/ChatLeftSideBar/ChatUserSelfCard";
import ContactActions from "../components/ContactMedia/ContactActions";
import ContactInfo from "../components/ContactMedia/ContactInfo";
import ContactMedia from "../components/ContactMedia/ContactMedia";
import { baseURL } from "../config";
import { chatListData } from "../dummyChatList";

const chat = () => {
  const router = useRouter();
  const [selectedChat, setSelectedChat] = useState("");
  const [chatOrMedia, setChatOrMedia] = useState("Chat");
  const [me, setMe] = useState(null);
  const [users, setUsers] = useState([]);
  const [onlineUserIds, setOnlineUserIds] = useState([]);
  const [chatSocket] = useState(
    io(`ws://${baseURL}/chat`, {
      withCredentials: true,
      autoConnect: false,
    })
  );
  const demoChat = [
    {
      name: "Mehmat",
      message: "hey, how are you",
      photo: "/images/person (11).png",
      time: "10:10",
    },
    {
      name: "Alena",
      message: "fine, what is going on with you ?",
      photo: "/images/person (1).png",
      time: "10:10",
    },
    {
      name: "Mehmat",
      message: "nice, very nice",
      photo: "/images/person (11).png",
      time: "10:11",
    },
  ];

  useEffect(() => {
    axios
      .get("/users/me")
      .then((res1) => {
        setMe(res1.data);
        chatSocket.on("connect_error", (error) => {
          console.log(error.message);
        });
        chatSocket.on("onlineUserIds", (userIds) => {
          setOnlineUserIds(userIds);
        });

        if (!chatSocket.connected) {
          chatSocket.connect();
        }

        axios.get("/users/getAll").then((res2) => {
          const usersExceptMe = res2.data.result.filter(
            (u) => u._id !== res1.data._id
          );
          setUsers(usersExceptMe);
          setSelectedChat(usersExceptMe[0]._id);
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        router.push("/login");
      });
  }, []);

  return (
    <div className="h-screen flex gap-5 bg-[#F8FAFB]">
      {/* LEFT SIDE BAR START */}
      <div className="flex flex-col basis-[22%] min-w-max max-w-sm min-h-screen overflow-y-scroll hide_scrollbar">
        <div className="bg-[#E3F6FC] rounded-b-lg p-5">
          {me ? <ChatUserSelfCard data={me} /> : "Loading"}
        </div>
        <div className="bg-[#E3F6FC] mt-4 p-4 flex flex-col gap-5 rounded-t-lg">
          {users &&
            users.map((user, index) => (
              <ChatListCard
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                chatPreviewData={user}
                online={onlineUserIds.includes(user._id)}
                key={index}
              />
            ))}
        </div>
        <div className="bg-[#E3F6FC] border-t flex justify-evenly items-center h-full">
          <div className=" hover:text-[#6588de] text-[#AFBCC6] hover:scale-110 duration-200 py-3">
            <BiUser size={25} />
          </div>
          <div className=" hover:text-[#6588de] text-[#AFBCC6] hover:scale-110 duration-200 py-3">
            <FiUsers size={25} />
          </div>
          <div className=" hover:text-[#6588de] text-[#AFBCC6] hover:scale-110 duration-200 py-3">
            <BiStar size={25} />
          </div>
          <div className=" hover:text-[#6588de] text-[#AFBCC6] hover:scale-110 duration-200 py-3">
            <BiSearch size={25} />
          </div>
        </div>
      </div>
      {/* LEFT SIDE BAR END */}

      {/* MIDDLE PART START */}

      <div className="grow relative flex flex-col justify-end ">
        <div className="absolute top-5 centered-axis-x h-[40px] rounded-[14px] shadow-md bg-[#FDFDFD] shadow-black/25 text-[12px] font-semibold">
          <button
            onClick={() => setChatOrMedia("Chat")}
            className={`text:[#52585E] w-[130px] rounded-[14px] h-full focus:outline-none active:outline-none
            ${chatOrMedia === "Chat" ? "text-[#FDFDFE] bg-[#6588DE]" : ""}
            `}
          >
            Chat
          </button>
          <button
            onClick={() => setChatOrMedia("Media")}
            className={`text:[#52585E] w-[130px] rounded-[14px] h-full focus:outline-none
            ${chatOrMedia === "Media" ? "text-[#FDFDFE] bg-[#6588DE]" : ""}
            `}
          >
            Media
          </button>
        </div>

        <div className="flex flex-col mb-[80px]">
          {demoChat.map((content, index) => (
            <div
              key={index}
              className={`${
                content.name === "Mehmat" ? "self-end" : "self-start"
              }`}
            >
              <div
                className={`${content.name === "Mehmat" ? "text-right" : ""}`}
              >
                <p className={`text-[#52585D] text-[12px] font-semibold py-2`}>
                  {content.name}
                </p>
              </div>

              <div
                className={`flex gap-5 ${
                  content.name === "Mehmat" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <img
                  className="w-[44px] h-[44px]"
                  src={content.photo}
                  alt="photo"
                />
                <div
                  className={`${
                    content.name === "Mehmat"
                      ? "bg-[#F3BA4A] rounded-tr-none text-[#FDFDFE]"
                      : "bg-[#E3F6FC] rounded-tl-none text-[#52585D]"
                  } py-3 px-5 rounded-[14px]`}
                >
                  <p className="text-[12px]">{content.message}</p>
                  <p className="text-[10px] text-right pt-3">{content.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 w-full flex items-center gap-5">
          <img className="px-3 h-[20px]" src="/images/settings.png" alt="" />
          <div className="flex items-center w-full pl-3 h-[40px] border border-[#96A9BA] bg-[#FDFDFD] rounded-[14px]">
            <img
              className="px-3 h-[20px]"
              src="/images/attachment icon.png"
              alt=""
            />
            <img
              className="px-3 h-[20px]"
              src="/images/voice icon.png"
              alt=""
            />
            <input
              className="focus:outline-none w-full px-5"
              type="text"
              placeholder="Type a new message..."
            />
            <button className="bg-[#6588DE] border border-[#6588DE] h-[40px] rounded-[13px] text-[12px] font-semibold text-[#FDFDFE] w-[108px]">
              Send
            </button>
          </div>
        </div>
      </div>
      {/* MIDDLE PART END */}

      {/* right sidebar started */}

      <div
        className="bg-[#E3F6FC] mt-[2vh] mr-[2vh] basis-[20%] min-w-max max-w-xs
       h-[96vh] rounded-lg overflow-y-scroll hide_scrollbar shadow-xl"
      >
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
