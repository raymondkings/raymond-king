'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    User2, MailIcon, HomeIcon, GraduationCap, Calendar, Briefcase
} from 'lucide-react';

const infoData = [
    { icon: <User2 size={20} />, text: 'Raymond King Setia' },
    { icon: <MailIcon size={20} />, text: 'raymond08.de@gmail.com' },
    { icon: <Calendar size={20} />, text: 'Born on 5 Mar, 2002' },
    { icon: <GraduationCap size={20} />, text: 'M.Sc. Robotics (RCI) @TUM' },
    { icon: <HomeIcon size={20} />, text: 'Schwabing, Munich' },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            { university: 'Technical University of Munich', qualification: 'M.Sc. Robotics, Cognition, Intelligence', years: '04.2026 - present' },
            { university: 'Technical University of Munich', qualification: 'B.Sc. Informatics with Minor in Economics', details: 'Thesis: Development of a 3D Human-Machine Interface for Construction-Site Robotic Task Planning (React, Three.js, TypeScript, ROS 2 Jazzy), with Sitegeist Robotics and the Chair of Cyber Physical Systems', years: '10.2022 - 02.2026' },
            { university: 'Studienkolleg am KIT', qualification: 'T-Kurs + Informatics, Feststellungsprüfung (1.7)', details: 'Deutsche Physikalische Gesellschaft Abiturpreis Award', years: '02.2021 - 02.2022' },
            { university: 'Karangturi Senior High School', qualification: 'Indonesian National Exam', years: '2017 - 2020' },
        ]
    },
    {
        title: 'experience',
        data: [
            { company: 'Capgemini', role: 'Working Student Robotics Engineer', details: 'Control software for the Unitree G1 humanoid, from simulation to deployment on hardware, plus an end-to-end data pipeline: collection via simulation and teleoperation, conversion, fine-tuning, deployment', skills:'NVIDIA Omniverse (Isaac Sim, Isaac Lab), Python, Docker (Compose)', years: '01.2026 - present' },
            { company: 'Practical Course: Robotic Arm Design Optimization, TUM', role: 'Professorship of Cyber Physical Systems', details: 'Neural-network-driven pipeline optimising robot arm designs for confined-space tasks (~7x speedup over gradient-based IK baselines), with collision-aware inverse kinematics and motion planning validation', skills:'PyTorch, cuRobo, Newton (NVIDIA Warp), CUDA, Python', years: '04.2026 - 08.2026' },
            { company: 'Veridos GmbH', role: 'Working Student Test Automation Engineer', details: 'Developed and maintained automated test scripts to ensure software quality, boost reliability and quickly identify bugs', skills:'TestComplete, Swagger, JavaScript, Azure DevOps', years: '07.2025 - 01.2026' },
            { company: 'iPraktikum with SchwarzIT, TUM', role: 'Developer, object detection models and 3D visualization on VisionOS', details: 'Built Dishcovery, an Apple Vision Pro app that scans ingredients and delivers personalised recipe recommendations, with computer vision for real-time interaction in spatial environments', skills:'YOLOv11, CoreML, SwiftUI (ARKit, RealityKit, Raycasting), Python, Dataset Creation', years: '10.2024 - 02.2025' },
            { company: 'Agile Robots SE', role: 'Working Student Front End Software Engineer', details: 'Developed and maintained web-based robotic solutions and co-developed a graphical component library adopted company-wide', skills:'Vue JS, HTML, SCSS, TypeScript, GraphQL', years: '05.2024 - 11.2024' },
            { company: 'Purino GmbH', role: 'Cook (Summer vacation job)', skills:'', years: '04.2022 - 09.2022' },
            { company: 'Michelin Tyres Company', role: 'Production Staff (Summer vacation job)', skills:'', years: '07.2021 - 09.2021' },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            { name: 'Python' },
            { name: 'C' },
            { name: 'Java' },
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'Swift' },
            { name: 'Dart' },
            { name: 'SQL' },
            { name: 'PyTorch' },
            { name: 'ROS 2' },
            { name: 'NVIDIA Isaac Sim / Isaac Lab' },
            { name: 'Newton (NVIDIA Warp)' },
            { name: 'cuRobo' },
            { name: 'CUDA' },
            { name: 'OpenCV' },
            { name: 'YOLO' },
            { name: 'CoreML' },
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'Vue JS' },
            { name: 'Three.js' },
            { name: 'Tailwind CSS' },
            { name: 'HTML / SCSS' },
            { name: 'Docker (Compose)' },
            { name: 'Git' },
            { name: 'GitLab' },
            { name: 'Azure DevOps' },
        ]
    },
    {
        title: 'tools',
        data: [
            { imgPath: '/about/vscode.svg' },
            { imgPath: '/about/figma.svg' },
            { imgPath: '/about/notion.svg' },
            { imgPath: '/about/wordpress.svg' },
        ]
    },
];

const About = () => {
    const getData = (arr, title) => arr.find(item => item.title === title);

    return (
        <section className="xl:min-h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>

                <Tabs defaultValue="qualifications" className="flex flex-col xl:flex-row gap-12">
                    {/* Tabs List */}
                    <TabsList className="flex xl:flex-col gap-4 xl:w-[240px] xl:sticky xl:top-36 xl:self-start">
                        <TabsTrigger className="w-full xl:w-auto" value="personal">Personal Info</TabsTrigger>
                        <TabsTrigger className="w-full xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                        <TabsTrigger className="w-full xl:w-auto" value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* Tabs Content */}
                    <div className="flex-1 text-lg mt-8 xl:mt-0">
                        {/* Personal Info */}
                        <TabsContent value="personal">
                            <div className="text-center xl:text-left">
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {infoData.map((item, index) => (
                                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                            <div className="text-primary">{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-primary">Language Skill</div>
                                    <div className="border-b border-border"></div>
                                    <div>Indonesian (native), Javanese (native), German (fluent), English (fluent), Chinese (basic)</div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Qualifications */}
                        <TabsContent value="qualifications">
                            <div>
                                <div className='grid md:grid-cols-2 gap-y-8'>

                                    {/* Experience */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <Briefcase />
                                            <h4 className="capitalize font-medium">{getData(qualificationData, 'experience').title}</h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, 'experience').data.map((item, index) => (
                                                <div className="flex gap-x-8 group" key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                                                        {item.details && <div className="text-sm text-muted-foreground mb-4">{item.details}</div>}
                                                        <div className="text-sm leading-none text-muted-foreground mb-4">{item.skills}</div>
                                                        <div className="text-base font-medium">{item.years}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <GraduationCap size={28} />
                                            <h4 className="capitalize font-medium">{getData(qualificationData, 'education').title}</h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, 'education').data.map((item, index) => (
                                                <div className="flex gap-x-8 group" key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-xl leading-none mb-2">{item.university}</div>
                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{item.qualification}</div>
                                                        {item.details && <div className="text-sm text-muted-foreground mb-4">{item.details}</div>}
                                                        <div className="text-base font-medium">{item.years}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills">
                            <div className="text-center xl:text-left">
                                <div className="mb-16">
                                    <h4 className="text-xl font-semibold mb-4">Skills</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {getData(skillData, 'skills').data.map((item, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-1 text-sm bg-muted text-muted-foreground rounded-full hover:scale-105 transition-transform"
                                            >
                        {item.name}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default About;
