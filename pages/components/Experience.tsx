import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 pt-20 lg:pt-40 justify-evenly mx-auto items-center"
        >
        <h3 className="absolute top-24 lg:top-10 uppercase tracking-[20px] text-[#2B2B28] text-2xl">
            Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-pink-400/20">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    </motion.div>
  );
}