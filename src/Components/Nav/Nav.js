import React from "react";

const Nav = () => {
  return (
    <div className="max-w-screen-ntt mx-auto my-4 bg-white max-[1200px]:px-8">
      <ul className="flex items-center justify-between cursor-pointer relative  gap-2">
        <li className="pb-2  border-b-4 border-transparent hover:border-main group z-20 text-gray-500 hover:text-black">
          Menu Item
          <div className="absolute w-full bg-gray-100 flex items-center  justify-around py-8 transition-all -top-72 opacity-0  group-hover:opacity-100  group-hover:top-9 group-hover:flex -z-10 pointer-events-none group-hover:pointer-events-auto ">
            <ul className="flex flex-col gap-1">
              <li className="font-bold">Header</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="font-bold">Header</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
              <li>Subheader</li>
            </ul>
            <img
              src={require("../../Assets/Images/Rectangle29.png")}
              className="max-[1050px]:w-1/2"
            />
          </div>
        </li>
        <li className="pb-2  text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[500px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[600px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[700px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[800px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[900px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[1000px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[1100px]:hidden">
          Menu Item
        </li>
        <li className="pb-2 text-gray-500 hover:text-black border-b-4 border-transparent hover:border-main max-[1200px]:hidden">
          Menu Item
        </li>
      </ul>
    </div>
  );
};

export default Nav;
