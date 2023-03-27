import React from 'react';

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-[#2B2B28] text-2xl">
             Contact
         </h3>

         <div>
             <h4>
                 I have got what you need.{" "}
                 <span className="decoration-[#5AD1AF]/50 underline">Lets Talk.</span>
             </h4>
         </div>
    </div>
  )
}