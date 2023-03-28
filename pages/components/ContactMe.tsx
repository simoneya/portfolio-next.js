import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}


export default function ContactMe({}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (FormData) => {
        window.location.href = 
        `mailto:simona.yavar@icloud.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`
    };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-14 lg:top-8 uppercase tracking-[20px] text-[#2B2B28] text-2xl">
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

             <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 w-fit mx-auto"
             >
                <div className="flex space-x-2">
                    <input 
                      {...register("name")} 
                      placeholder="Name" 
                      className="contactInput" 
                      type="text" 
                    />

                    <input 
                      {...register("email")} 
                      placeholder="Email" 
                      className="contactInput" 
                      type="email" 
                    />
                </div>

                    <input 
                      {...register("subject")} 
                      placeholder="Subject" 
                      className="contactInput" 
                      type="text" 
                    />

                    <textarea 
                      {...register("message")} 
                      placeholder="Message" 
                      className="contactInput" 
                    />

                    <button 
                      type="submit" 
                      className="bg-[#5AD1AF] py-5 px-10 rounded-md text-[#2B2B28] font-bold text-lg"
                      >
                        Submit
                    </button>
             </form>
         </div>
    </div>
  )
}