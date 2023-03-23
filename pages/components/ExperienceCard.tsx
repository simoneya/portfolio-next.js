import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img 
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.pinimg.com/280x280_RS/b4/ca/74/b4ca74ef398238998747843bc819ddbc.jpg" 
        alt="" 
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Junior Developer</h4>
        <p className="font-bold text-2xl mt-1">Cubicod</p>
        <div className="flex space-x-2 my-2">
           {/* Tech used */}
          <img 
            className="h-10 w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5-thumbnail.png"
            alt="" 
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt="" 
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt="" 
          />
          <img 
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wordpress_logo_8.png"
            alt="" 
          />
        </div>
        <p>Started work...- Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}