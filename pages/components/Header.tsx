import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start">
        <div className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
             url="https://twitter.com" 
             fgColor="cornflowerblue" 
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://instagram.com" 
             fgColor="cornflowerblue" 
             bgColor="transparent" 
            />

            <SocialIcon 
             url="https://facebook.com" 
             fgColor="cornflowerblue" 
             bgColor="transparent" 
            />
        </div>

        <div className="flex flex-row items-center text-blue-400 cursor-pointer">
            <SocialIcon
             className="cursor-pointer"
             network="email"
             fgColor="cornflowerblue" 
             bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-blue-500">Get In Touch</p>
        </div>

    </header>
  )
}