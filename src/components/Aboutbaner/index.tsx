import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "/public/images/abouttitle.webp";
import Img from "/public/images/about1.webp";

interface Props {}

const Aboutbaner = (props: Props) => {
  return (
    <main>
      

        <div className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3">
            {/* About section */}
            <div className="flex flex-col p-5 justify-center items-center md:relative w-full">
              {/* About image */}
              <div className="flex items-center md:absolute top-12 ml-10">
                <Image src={LogoImg} alt="img" />
              </div>
              <div>
                <h1 className="text-blue-800 text-4xl lg:text-6xl font-light mt-4  md:mt-0 pt-0">
                  We, are Brancy
                </h1>
                <p className="text-blue-800 underline text-lg mt-6 ">
                  Best cosmetics provider
                </p>
                <p className="text-blue-800">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus possimus error tenetur sunt, repudiandae asperiores,
                  ullam ex non maxime libero.
                </p>
              </div>
              {/* Other content in the first div */}
            </div>

            {/* Sign up section */}
            <div className="p-5">
              <div className="flex justify-center ">
                <Image src={Img} alt="img" />
              </div>
            </div>
          </div>

          

         

     
          
        </div>
      </main>
  );
};

export default Aboutbaner;
