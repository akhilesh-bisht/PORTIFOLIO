import React from "react";

import LinkedIn from "../assets/linkedin.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container  flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm ">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.linkedin.com/in/akhilesh-bisht-a76981291/">
                  <img src={LinkedIn} className="w-[25px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
