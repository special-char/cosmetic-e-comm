import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/index";
import Aboutbaner from "@/components/Aboutbaner";
import Aboutbox from "@/components/Aboutbox";
import Aboutbanerimg from "@/components/Aboutbanerimg";
import Aboutslider from "@/components/Aboutslider";

interface Props {}

const About = (props: Props) => {
  return (
    <div>
      <Header />
      
      <section className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center mb-8">
        <Aboutbaner />

        <Aboutbox />

        <Aboutslider />

        <Aboutbanerimg />
      </section>
    </div>
  );
};

export default About;
