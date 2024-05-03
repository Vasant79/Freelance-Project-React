import React, { useState } from "react";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full pt-1.5 dropdown ">
      <div>
        <button
          className="w-full flex justify-between dropdown-toggle"
          onClick={toggleDropdown}
        >
          <div>{title}</div>
          <div className="mr-4"> {isOpen ? "-" : "+"}</div>
        </button>
      </div>
      <div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li
                key={index}
                className="dropdown-item mt-2 ml-8 hover:font-light"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
