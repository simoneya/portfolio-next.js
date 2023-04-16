import React from 'react';
import { motion } from "framer-motion";
import Craft from './Craft';
import { Skill } from '@/typings';

type Props = {
    skills: Skill[],
};

export default function Crafts({ skills }: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center pt-20 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#2B2B28] text-2xl">
            Skills
        </h3>

        <h3 className=" absolute top-36 uppercase tracking-[3px] text-[#2B2B28] text-sm">
            Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">
            {skills?.slice(0, skills.length / 2).map((skill) => (
              <Craft key={skill._id} skill={skill}/>
            ))}

            {skills?.slice(skills.length / 2, skills.length).map((skill) => (
              <Craft key={skill._id} skill={skill}/>
            ))}
        </div>
    </motion.div>
  );
}