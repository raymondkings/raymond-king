import {MailIcon, HomeIcon, PhoneCall, Phone} from 'lucide-react'

//components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text and illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Contact me</h1>
            <p className='subtitle max-w-[400px]'>Do not hesitate to contact me ;)</p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg'>


            {/* mail */}
            <div className='flex items-center gap-x-6'>
              <MailIcon size={18} className='text-primary'/>
              raymond08.de@gmail.com
            </div>

            {/* address */}
            <div className='flex items-center gap-x-6'>
              <HomeIcon size={18} className='text-primary'/>
              Schwabing, Munich
            </div>

            {/* phone 
              <div className='flex items-center gap-x-6'>
              <PhoneCall size={18} className='text-primary'/>
              +49 162 3502135
            </div>
            */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact