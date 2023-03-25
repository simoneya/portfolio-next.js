import React from 'react';
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer top-24">
        <motion.img 
          initial={{
               x: directionLeft ? -200 : 200, 
               opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
          className="rounded-full border border-[#2B2B28] object-cover w-20 h-20 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
    </div>
  );
}