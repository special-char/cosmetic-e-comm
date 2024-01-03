import React from 'react'
import Image from 'next/image'
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Contact1 from "/public/images/contact.jpeg";
import Header from "@/components/header/index";

interface Props {
    
}

const Contact = (props: Props) => {
    return (
      <div>
        <Header />

        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <Image className=" rounded-2xl w-fill " src={Contact1} alt="img" />

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 sm:text-5xl text-lg mb-1 font-medium title-font">
                Get In Touch
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                illo sunt itaque!
              </p>
              <hr className="w-16 ml-40 border-gray-500" />
              <br />
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  {" "}
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="first name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  {" "}
                  Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="last name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="leave some feedback for us..."
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500  text-lg rounded-full">
                S U B M I T
              </button>
            </div>
          </div>

          <div className="p-4 md:p-10 lg:p-16 xl:p-20 2xl:p-28 pt-1 h-auto md:h-64">
            <div className="flex flex-col md:flex-row justify-center h-auto md:h-36 p-4 md:p-5 bg-yellow-50 rounded-2xl gap-4">
              {/* Phone Section */}
              <div className="w-full md:w-1/3 h-auto md:h-36 mb-4 md:mb-0 text-center">
                <div className="flex justify-center">
                  <AiFillPhone size={30} />
                </div>
                <br />
                <a href="tel://+919125739642">+91 9125739642</a>
                <br />
                <a href="tel://+919272692504">+91 9272692504</a>
              </div>

              <div
                id="verticle-line-1"
                className="hidden md:block w-0.5 h-24 bg-gray-400"
              ></div>

              {/* Email Section */}
              <div className="w-full md:w-1/3 h-auto md:h-36 text-center">
                <div className="flex justify-center">
                  <IoIosMail size={30} />
                </div>
                <br />
                <a href="mailto://example@demo.com">example@demo.com</a>
                <br />
                <a href="mailto://demo@demo.com">demo@demo.com</a>
              </div>

              <div
                id="verticle-line-2"
                className="hidden md:block w-0.5 h-24 bg-gray-400"
              ></div>

              {/* Address Section */}
              <div className="w-full md:w-1/3 h-auto md:h-36 text-center">
                <div className="flex justify-center">
                  <FaMapMarkerAlt size={30} />
                </div>
                <br />
                <p className="text-center">
                  B-605, The Special Character, 382470
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />

        <div className="mb-8 ">
          <iframe
            title="My Location"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=23.114369,72.5410228&z=15&output=embed"
          />
        </div>
      </div>
    );
}

export default Contact
