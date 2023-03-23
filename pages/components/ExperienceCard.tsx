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

      <div>
        <h4>Junior Developer</h4>
        <p>Cubicod</p>
        <div>
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
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