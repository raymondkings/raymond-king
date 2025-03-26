'use client'
import Link from "next/link";
import {Button} from "./ui/button";
import { Download, Send } from "lucide-react";

import {
    RiBriefcase4fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

//components 
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import Image from "next/image";


const Hero = () => { 

    const onButtonClick = () => {
        const pdfUrl = "/Lebenslauf.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Lebenslauf.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
  return (<section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat 
  bg-bottom bg-cover dark:bg-none'>
    <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
            {/* text */}
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Student, Software Engineer</div>
                <h1 className="h1 mb-4">Hi, I'm</h1>
                <h1 className="h1 mb-4">Raymond King</h1>
                <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                    I am a Computer Science undergraduate Student at TUM
                    </p>
                    {/* buttons */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                       <Link href='/contact'>
                            <Button className='gap-x-2'>
                                Contact me <Send size={18}/>
                            </Button>
                       </Link> 
                       <Button variant="secondary" className='gap-x-2' onClick = {onButtonClick}>
                            Download CV <Download size={18}/>
                        </Button>
                       
                    </div>
                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary 
                    transition-all'/>
            </div>
            {/* image */}
            <div className="hidden xl:flex relative">
                <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                <Image src="/hero/developer-1.png" width={500} height={500}/>
            </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
    </div>
  </section>
  );
};   
  

export default Hero;