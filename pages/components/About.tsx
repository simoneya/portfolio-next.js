import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
         >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#2B2B28] text-2xl">About</h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
              duration: 1.2
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
              once: true,
          }}
            src="https://lh3.googleusercontent.com/a/AGNmyxbd_T3xwm6eR7GhsO5bufmMLgTUWZEEZWfVybzG=s576" 
            alt=""
            className="-mb-20 md:mb-0 flex-shrink-0 h-52 w-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">A <span className="underline decoration-[#2B2B28]/50">little</span> background here</h4>
                <p className="text-base">I'm Simona. write about your developer journey here...
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Quisque sed mi non arcu mollis auctor. 
                   In sit amet augue id massa aliquet egestas. 
                   Suspendisse nec augue consectetur, lacinia quam ac, consectetur tortor. 
                   Vestibulum molestie nisi at nunc elementum, at vestibulum sapien tempus. 
                   Suspendisse ut faucibus magna. 
                   Duis feugiat lectus est, non blandit augue lobortis quis. 
                   Sed eget nibh malesuada, elementum urna tempus, faucibus justo. 
                   Aenean in blandit neque. Quisque arcu nibh, dapibus ut metus at, 
                   elementum sodales enim. 
                </p>
            </div>
    </motion.div>
  )
}