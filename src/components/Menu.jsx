import { useState } from "react";
import {
  Bars4Icon,
  UserPlusIcon,
  QuestionMarkCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  GlobeEuropeAfricaIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import Profile from "./Profile";
import Dropdown from "./DropDown";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { team: "Design Team", icon: <PencilIcon /> },
    {
      team: "Marketing Team",
      icon: <GlobeEuropeAfricaIcon />,
    },
    {
      team: "Development Team",
      icon: <ComputerDesktopIcon />,
    },
    {
      team: "Create a Team",
      icon: <UserGroupIcon />,
    },
  ];

  const folders = [
    {
      folderName: "Product",
      icon: <FolderIcon />,
      nestedItem: ["Roadmap", "Feedback", "Performace", "Team", "Analytics"],
    },

    {
      folderName: "Sales",
      icon: <FolderIcon />,
      nestedItem: [],
    },
    {
      folderName: "Design",
      icon: <FolderIcon />,
      nestedItem: [],
    },
    {
      folderName: "Office",
      icon: <FolderIcon />,
      nestedItem: [],
    },
    {
      folderName: "Legal",
      icon: <FolderIcon />,
      nestedItem: [],
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-screen-sm">
      {/* Sidebar */}
      <span className="h-auto m-2 rounded-lg bg-white p-2 shadow-md  items-center">
        {/* Hamburger menu */}
        <span className=" lg:hidden">
          <button onClick={toggleMenu} className="p-2 mt-4 mb-2">
            <Bars4Icon className="h-6 w-6" />
          </button>
        </span>
        {/* Sidebar content */}
        <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col h-screen pb-8 justify-between">
            <div>
              <ul>
                <li>
                  <Profile />
                </li>
                {/* rendering menus */}
                {menuItems.map((item) => {
                  return (
                    <div
                      key={item.team}
                      className="flex  items-center shadow-md rounded-md hover:bg-gray-200"
                    >
                      <div className=" mx-4 my-1  h-6 w-6 "> {item.icon}</div>
                      {item.team}
                    </div>
                  );
                })}

                {/* redering folders  -- */}

                {folders.map((item) => {
                  return (
                    <div
                      key={item.folderName}
                      className="size-full flex  shadow-md rounded-md hover:bg-gray-100"
                    >
                      <div className="mx-4 my-2  h-6 w-6 ">{item.icon}</div>
                      <Dropdown
                        title={item.folderName}
                        options={item.nestedItem}
                      />
                    </div>
                  );
                })}
              </ul>
            </div>

            {/* bottom tabs */}
            <div className=" mt-auto  rounded-md  ">
              <button className=" my-1 w-full flex items-center  hover:bg-gray-100 shadow-md ">
                <UserPlusIcon className="mx-4 my-1 h-6 w-6" />
                <div>Invite teammates</div>
              </button>
              <button className="my-1  w-full flex items-center hover:bg-gray-100 shadow-md ">
                <QuestionMarkCircleIcon className="mx-4 my-1 h-6 w-6" />
                <div>Help and First steps</div>
              </button>
              <button className=" my-1 w-full flex items-center hover:bg-gray-100 shadow-md ">
                <ArrowRightCircleIcon className="mx-4 my-1 h-6 w-6" />
                <div>Days of trial</div>
                <span
                  type="button"
                  className=" my-1 mx-2 p-1 bg-black rounded-md text-white hover:bg-gray-400 hover:text-black"
                >
                  Add billing
                </span>
              </button>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}
