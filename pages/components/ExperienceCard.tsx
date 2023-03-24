import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#CC6F8C] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img 
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.pinimg.com/280x280_RS/b4/ca/74/b4ca74ef398238998747843bc819ddbc.jpg" 
        alt="cubicod-logo" 
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Junior Developer</h4>
        <p className="font-bold text-2xl mt-1">Cubicod</p>
        <div className="flex space-x-2 my-2">
           {/* Tech used */}
          <img 
            className="h-10 w-10 rounded-full"
            src="https://play-lh.googleusercontent.com/MPDzYIvnXkFgILeyVYa1ZrBhWrQI6voJQ83R3TGhUvU4jjcV3ClQVlhuWDucmSkSwqc"
            alt="html-logo" 
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt="css-logo" 
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt="javascript-logo" 
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wordpress_logo_8.png"
            alt="wordpress-logo" 
          />
        </div>
        <p className="uppercase py-5 text-[#2B2B28]">Started work...- Ended...</p>
        <ul className="list-disc space-y-3 ml-5 text-md">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}