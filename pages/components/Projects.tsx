import React from 'react';

type Props = {}

export default function Projects({}: Props) {

    const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#2B2B28] text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <img 
                      src="https://whatsondisneyplus.com/wp-content/uploads/2019/11/disneyplusmobile_home_ea3b0a6a-e1573467317313.png" 
                      alt=""
                    />

                    <div>
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#5AD1AF]/50">
                               Case study {i+1} of {projects.length} :
                            </span> Disney+ clone
                        </h4>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#060047]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}