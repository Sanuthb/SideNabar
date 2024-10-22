import {
  Menu,
  House,
  Users,
  FolderClosed,
  Calendar,
  Files,
  ChartPie,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const SideBar = () => {
  const [togglebar, settogglebar] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("none");
  return (
    <motion.div
      className="h-screen bg-primary_color text-gray-400 flex items-baseline justify-between flex-col p-5 gap-2"
      initial={{ width: "16vw" }}
      animate={{ width: togglebar ? "5vw" : "16vw" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        onClick={() => {
          togglebar ? settogglebar(false) : settogglebar(true);
        }}
        className="flex justify-between w-fit p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all"
      >
        <Menu />
      </div>
      <div className="h-1/2">
        <ul className="flex  flex-col h-full justify-between">
          <li className="flex gap-4  w-full p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all">
            <House />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: togglebar ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {togglebar ? "" : "Dashboard"}
            </motion.span>
          </li>
          <li className="flex gap-4 w-full p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all">
            <Users />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: togglebar ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {togglebar ? "" : "Team"}
            </motion.span>
          </li>
          <li
            onClick={() => {
              activeSubmenu === "Projects"
                ? setActiveSubmenu("none")
                : setActiveSubmenu("Projects");
            }}
            className="flex justify-between  gap-2 flex-col w-full p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all"
          >
            <span className="flex gap-4">
              <FolderClosed />
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: togglebar ? 0 : 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {togglebar ? "" : "Projects"}
              </motion.span>
            </span>
            <motion.ul
              className=" bg-hover_color"
              initial={{ display: "none" }}
              animate={{
                display:
                  activeSubmenu === "Projects" && togglebar === false
                    ? "block"
                    : "none",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <li className="flex justify-between  w-full p-2">Project 1</li>
              <li className="flex justify-between w-full p-2">Project 2</li>
              <li className="flex justify-between w-full p-2">Project 3</li>
            </motion.ul>
          </li>
          <li className="flex gap-4 w-full p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all">
            <Calendar />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: togglebar ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {togglebar ? "" : "Calendar"}
            </motion.span>
          </li>
          <li className="flex gap-4   w-full p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all">
            <Files />
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: togglebar ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {togglebar ? "" : "Documents"}
            </motion.span>
          </li>
          <li
            onClick={() => {
              activeSubmenu === "Reports"
                ? setActiveSubmenu("none")
                : setActiveSubmenu("Reports");
            }}
            className="flex justify-between  gap-2 flex-col w-full p-2 cursor-pointer hover:bg-hover_color rounded-md hover:text-white transition-all"
          >
            <span className="flex gap-4">
              <ChartPie />
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: togglebar ? 0 : 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {togglebar ? "" : "Reports"}
              </motion.span>
            </span>
            <motion.ul
              className=" bg-hover_color"
              initial={{ display: "none" }}
              animate={{
                display:
                  activeSubmenu === "Reports" && togglebar === false
                    ? "block"
                    : "none",
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <li className="flex justify-between  w-full p-2">Reports 1</li>
              <li className="flex justify-between  w-full p-2">Reports 2</li>
              <li className="flex justify-between  w-full p-2">Reports 3</li>
            </motion.ul>
          </li>
        </ul>
      </div>
      <motion.div
        className="flex w-full items-center justify-between"
        initial={{ flexDirection: "row" }}
        animate={{ flexDirection: togglebar ? "column" : "row" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="cursor-pointer hover:bg-hover_color rounded-md hover:text-white p-2 transition-all">
          <Instagram />
        </div>
        <div className="cursor-pointer hover:bg-hover_color rounded-md hover:text-white p-2 transition-all">
          <Twitter />
        </div>
        <div className="cursor-pointer hover:bg-hover_color rounded-md hover:text-white p-2 transition-all">
          <Youtube />
        </div>
        <div className="cursor-pointer hover:bg-hover_color rounded-md hover:text-white p-2 transition-all">
          <Linkedin />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
