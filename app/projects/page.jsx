'use client';
import React, {useState} from 'react';
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs';
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

//remove category duplicates
const uniqueCategories = [
  'all projects', 
  ...new Set(projectData.map((item) => item.category))]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');
  
  const filteredProjects = projectData.filter((project) => {
      //if category is 'all projects' return all projects, else filter by category
      return category === 'all projects' 
      ? project 
      : project.category === category
  })




  return <section className='min-h-screen pt-12'>
    <div className='container mx-auto'>
      <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        My Projects
      </h2>
      {/* tabs */}
      <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
        <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
          {categories.map((category, index) => {
            return <TabsTrigger onClick= {() => setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
          })}
        </TabsList>
        {/* tabs content */}
        <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {filteredProjects.map((project, index) => {
            return <TabsContent value={category} key={index}>
              <ProjectCard project={project}/>
            </TabsContent>
          })}
        </div>
      </Tabs>
    </div>
  </section>
}

export default Projects