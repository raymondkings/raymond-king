'use client';
import Link from 'next/link';
import {Button} from './ui/button';

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard';


const projectData=[
    {
        image: '/work/4.png',
        category: 'Full Stack',
        name:'Web based QR-Code Attendance System',
        description: 'The system remains actively used in an organisation with around 80 members.built with Next.js for frontend scanning, seamlessly integrated with Google Forms for data collection, Google Sheets and Supabase for data management, and connected to users` calendars for event invitations ',
        link: '',
        github: '' 
    },
    {
        image: '/work/6.png',
        category: 'Full Stack',
        name:'Web based Todo List App',
        description: 'Simple yet useful todolist app, built with React.js, css, and uses Postgressql',
        link: '',
        github: 'https://github.com/raymondkings/new-todolist-app/'
    },
    {
        image: '/work/1.png',
        category: 'Front End',
        name:'Car Rental Website',
        description: 'Landing Page for car rental business based in Semarang, Indonesia, built with html,css, and javascript',
        link: 'https://rnbtrans.netlify.app',
        github: 'https://github.com/raymondkings/RnB_Trans'
    },
    {
      image: '/work/5.png',
      category: 'Full Stack',
      name:'Mori : Money Manager',
      description: '(Currently in development) Money Manager App for IOS and Android, built with Flutter',
      link: '',
      github: ''
  },
  {
    image: '/work/2.png',
    category: 'Others',
    name:'CRC32 (Language : C)',
    description: 'CRC32 is an error-detecting code algorithm that generates a 32-bit checksum for verifying data integrity, optimized with SIMD, developed also with testing, benchmark test, and help method',
    link: '',
    github: ''
  },
  {
    image: '/work/3.png',
    category: 'Others',
    name:'Face Recognition System',
    description: "developed using Python and leveraging the powerful capabilities of OpenCV's open-source library.",
    link: '',
    github: 'https://github.com/raymondkings/face_recognition'
  },
  ];
  
  

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 
            text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center
            items-center xl:items-start'>
                <h2 className='section-title mb-4 '>Latest Projects</h2>
                <p className='subtitle mb-8'>Here are some of my exciting projects!</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>

            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' 
                slidesPerView={1}
                breakpoints={{
                    640 : {
                        slidesPerView:2
                        },
                    }} 
                    spaceBetween={30} 
                    modules={[Pagination]} 
                    pagination={{clickable: true}}>
                    {/* show only the first 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project,index) => {
                        return <SwiperSlide key={index}>
                            <ProjectCard project={project}/>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work