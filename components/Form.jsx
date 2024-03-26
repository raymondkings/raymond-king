'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {TextArea} from "./ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare, Mail} from 'lucide-react';


const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">


        {/* input */}
        <div className="relative flex items-center">
            <Input type='name' id='name' placeholder='Name'/>
            <User className="absolute right-6" size={20}/>
        </div>

        {/* email */}
        <div className="relative flex items-center">
            <Input type='email' id='email' placeholder='Email'/>
            <MailIcon className="absolute right-6" size={20}/>
        </div>

        {/* textarea */}
        <div className="relative flex items-center">
            <TextArea placeholder='Type your Message here'/>
            <MessageSquare className="absolute top-4 right-6" size={20}/>
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>
            Lets talk
            <ArrowRightIcon size={20}/>
            </Button>
    </form>
  )
};

export default Form;