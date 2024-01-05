import React from "react";
import Link from "next/link";
import Image from "next/image";
import client from "/public/images/client.webp";
import revenue from "/public/images/revenue.webp";
import projects from "/public/images/projects.webp";

interface Props {}

const Aboutbox = (props: Props) => {
  return (
    <main>
      <div className="flex flex-wrap mt-10 gap-10">
        <div className="flex-1 flex justify-center items-center flex-col lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-500 m-2 rounded-3xl p-5">
          {/* Content for Box 1 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={client} alt="Image 1" width={80} height={80} />
          </div>
          <h3 className="text-6xl w-80 overflow-hidden">5000+</h3>
          <p className="text-2xl m-2">Clients</p>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-500 m-2 rounded-3xl p-5">
          {/* Content for Box 2 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={projects} alt="Image 2" width={80} height={80} />
          </div>
          <h3 className="text-6xl w-80 overflow-hidden">250+</h3>
          <p className="text-2xl m-2">Projects</p>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col lg:w-330 lg:h-220 md:w-240 md:h-220 border-2 border-red-500 m-2 rounded-3xl p-5">
          {/* Content for Box 3 */}
          <div className="m-4 flex justify-center items-center">
            <Image src={revenue} alt="Image 3" width={80} height={80} />
          </div>
          <h3 className="text-6xl w-80 overflow-hidden">1.5M+</h3>
          <p className="text-2xl m-2">Revenue</p>
        </div>
      </div>
    </main>
  );
};

export default Aboutbox;
