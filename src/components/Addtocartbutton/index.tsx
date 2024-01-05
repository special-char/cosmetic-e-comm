import React from "react";

interface Props {}

const Addtocartbutton = (props: Props) => {
  return (
    <main>
      <button className="bg-transparent text-slate-700 px-4 py-2 rounded-full border-2 border-slate-700 hover:bg-slate-700 hover:text-white md:px-8 lg:px-12">
        ADD TO CART
      </button>
    </main> 
  );};

export default Addtocartbutton;
