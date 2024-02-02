import React from "react";
import linkedin from "../assets/linkedin.svg";
function Navbar() {
  return (
    <header
      className={`${"border-b border-gray-900"}  fixed left-0 right-0 top-0 z-20`}
      id="home"
    >
      <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl"> Portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-4 ">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white  cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact me
                </a>
              </li>
              <li>
                <a
                  className="px-3 shadow-gray-500 shadow-md py-[2px] mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-[14px] font-medium "
                  href="https://github.com/akhilesh-bisht"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/akhilesh-bisht-a76981291/"
                  target="_blank"
                >
                  <img className="w-[25]" src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
