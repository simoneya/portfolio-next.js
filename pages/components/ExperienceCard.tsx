import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  experience: Experience,
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-sm items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#CC6F8C] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img 
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()} 
        alt="cubicod-logo" 
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Junior Developer</h4>
        <p className="font-bold text-2xl mt-1">Cubicod</p>
        <div className="flex space-x-2 my-2">
           {/* Tech used */}
          {experience.technologies.map((technology) => (
              <img
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
              />
          ))}
        </div>
        <p className="uppercase py-5 text-[#2B2B28]">
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere
          ? "Present"
          : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-3 ml-5 text-md h-96 overflow-y-scroll scrollbar-thin scrollbar-track-green-400">
          {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}