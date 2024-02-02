import React from "react";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

function ContactSection() {
  const email = "akhileshbisht2020@gmail.com";
  const phoneNumber = "+916399085419";

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Contact Information
      </h2>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <HiOutlineMail className="ml-3 " />
          <a href={`mailto:${email}`} className="text-blue-500 ml-3">
            {email}
          </a>
        </div>

        <div className="flex items-center">
          <IoIosCall />
          <p className="text-gray-500">{phoneNumber}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
