import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { HiChatAlt } from "react-icons/hi";
import { FaPodcast, FaVideo } from "react-icons/fa";
import { RiVideoChatFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="grid place-content-center min-h-screen bg-[#A4C4B5]">

      <div className="flex gap-5">

        <div
          className="relative w-40 h-40 group rounded-lg shadow-lg bg-slate-200 grid place-content-center
          text-gray-700 text-xl cursor-pointer transition-all duration-300 hover:bg-slate-100">
          <div className="group-hover:scale-110 duration-300">
            <HiChatAlt size={70} />
          </div>
          <p className="text-center absolute bottom-[-30px] left-0 right-0 duration-300 group-hover:text-slate-100">
            Chat
          </p>
        </div>

        <div
          className="relative w-40 h-40 group rounded-lg shadow-lg bg-slate-200 grid place-content-center
          text-gray-700 text-xl cursor-pointer transition-all duration-300 hover:bg-slate-100">
          <div className="group-hover:scale-110 duration-300">
            <RiVideoChatFill size={70} />
          </div>
          <p className="text-center absolute bottom-[-30px] left-0 right-0 duration-300 group-hover:text-slate-100">
            Call
          </p>
        </div>

        <div
          className="relative w-40 h-40 group rounded-lg shadow-lg bg-slate-200 grid place-content-center
          text-gray-700 text-xl cursor-pointer transition-all duration-300 hover:bg-slate-100">
          <div className="group-hover:scale-110 duration-300">
            <FaPodcast size={70} />
          </div>
          <p className="text-center absolute bottom-[-30px] left-0 right-0 duration-300 group-hover:text-slate-100">
            Podcast
          </p>
        </div>

        <div
          className="relative w-40 h-40 group rounded-lg shadow-lg bg-slate-200 grid place-content-center
           text-gray-700 text-xl cursor-pointer transition-all duration-300 hover:bg-slate-100">
          <div className="group-hover:scale-110 duration-300">
            <FaVideo size={70} />
          </div>
          <p className="text-center absolute bottom-[-30px] left-0 right-0 duration-300 group-hover:text-slate-100">
            Video Stream
          </p>
        </div>

      </div>

    </div>
  );
}
