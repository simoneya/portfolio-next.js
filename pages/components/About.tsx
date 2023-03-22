import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#2B2B28] text-2xl">About</h3>

        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
              duration: 1.2,
          }}
          whileInView={{
            x: 0,
          }}
          viewport={{
              once: true,
          }}
            src="https://lh3.googleusercontent.com/a/AGNmyxbd_T3xwm6eR7GhsO5bufmMLgTUWZEEZWfVybzG=s576" alt="" />
    </div>
  )
}