import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi, the Name's Simona", 
            "Girl-who-codes", 
            "<FrontEndDeveloper />"
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
          className="relative rounded-full h-32 w-32 mx-auto object cover"
          //change picture and use <Image /> component later...
          src="https://lh3.googleusercontent.com/a/AGNmyxbRMo9SmSrs220kZjAwVwZxSoouTk_wvL7EgBNA=s288" 
          alt="" 
        />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#ffc0cb"/> 
        </h1>
    </div>
  );
}