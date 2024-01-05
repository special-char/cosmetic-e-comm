import React from "react";
import Image from "next/image";
import landingimg from "../../../public/images/landimg.webp";
import landingimg1 from "../../../public/images/iandimg01.jpg";

interface Props {}

const Homebaner = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8 bg-gradient-to-r from-white from-10% via-white via-40% to-sky-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 ">
          {/* Home section */}
          <div className="flex flex-col p-5 justify-center items-center md:relative ">
            {/* Home image */}
            <div className="flex items-center md:absolute top-2 ml-10">
              <Image src={landingimg1} alt="img" />
            </div>
            <div className="z-10">
              <div className="w-full">
                <h1 className="text-blue-800 text-4xl lg:text-6xl sm:text-xs font-bold mt-4 md:mt-0 pt-0">
                  CLEAN FRESH
                </h1>
              </div>

              <p className="text-blue-800 text-center align-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                possimus error tenetur sunt, repudiandae asperiores, ullam ex
                non maxime libero.
              </p>
            </div>
            {/* Other content in the first div */}
          </div>

          {/* Sign up section */}
          <div className="p-5">
            <div className="flex justify-center ">
              <Image
                src={landingimg}
                alt="img"
                className="animate-duration-[2000ms] animate-delay-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebaner;
