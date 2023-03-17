import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 pt-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl-items-center">
        <motion.div 
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
             url="https://twitter.com" 
             fgColor="lightblue" 
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://instagram.com" 
             fgColor="lightblue" 
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://facebook.com" 
             fgColor="lightblue"  
             bgColor="transparent" 
            />
        </motion.div>

        <div className="flex flex-row items-center text-blue-200 cursor-pointer">
            <SocialIcon
             className="cursor-pointer"
             network="email"
             fgColor="lightblue" 
             bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-blue-200">Get In Touch</p>
        </div>

    </header>
  )
}