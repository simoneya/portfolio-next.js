import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-[#2B2B28] text-2xl">
             Contact
         </h3>

         <div className="flex flex-col space-y-10">
             <h4 className="text-4xl font-semibold text-center">
                 I have got what you need.{" "}
                 <span className="decoration-[#5AD1AF]/50 underline">Lets Talk.</span>
             </h4>

             <div className="space-y-10">
                 <div className="flex items-center space-x-5 justify-center">
                     <PhoneIcon className="text-[#5AD1AF] h-7b w-7 animate-pulse"/>
                     <p className="text-2xl">07542 383394</p>
                 </div>

                 <div className="flex items-center space-x-5 justify-center">
                     <EnvelopeIcon className="text-[#5AD1AF] h-7b w-7 animate-pulse"/>
                     <p className="text-2xl">yavar.simona@yahoo.com</p>
                 </div>

                 <div className="flex items-center space-x-5 justify-center">
                     <MapPinIcon className="text-[#5AD1AF] h-7b w-7 animate-pulse"/>
                     <p className="text-2xl">Liverpool, England, UK</p>
                 </div>
             </div>

             <form className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2 ">
                    <input className="contactInput" type="text" />
                    <input className="contactInput" type="text" />
                </div>

                    <input className="contactInput" type="text" />

                    <textarea className="contactInput" />
                    <button>Submit</button>
             </form>
         </div>
    </div>
  )
}