import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#ffc0cb"/> 
        </h1>
    </div>
  );
}