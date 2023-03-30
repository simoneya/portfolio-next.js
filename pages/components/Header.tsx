import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

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
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
             url="https://github.com" 
             fgColor="#2B2B28" 
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://instagram.com" 
             fgColor="#2B2B28"  
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://facebook.com" 
             fgColor="#2B2B28"  
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://youtube.com" 
             fgColor="#2B2B28"   
             bgColor="transparent" 
            />  

             <SocialIcon 
             url="https://linkedin.com" 
             fgColor="#2B2B28"   
             bgColor="transparent" 
            />    
        </motion.div>

      <Link href="#contact">
        <motion.div 
          initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
          }}
          animate={{
              x: 0,
              opacity: 1,
              scale: 1,
          }}
          transition={{
              duration: 1.5,
          }}
        className="flex flex-row items-center text-[#2B2B28] cursor-pointer">
            <SocialIcon
             className="cursor-pointer"
             network="email"
             fgColor="#2B2B28"  
             bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-[#2B2B28]">Get In Touch</p>
        </motion.div>
      </Link>

    </header>
  )
}