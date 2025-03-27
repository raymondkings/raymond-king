'use client';

import { projectData } from '../projectData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectDetail({ params }) {
    const project = projectData.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <section className="py-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

                {/* Skills / Chips */}
                {project.skills && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-1 text-sm bg-muted text-muted-foreground rounded-full hover:scale-105 transition-transform"
                            >
                {skill}
              </span>
                        ))}
                    </div>
                )}

                {/* Swiper Image Gallery */}
                <div className="relative px-12 mb-8">
                    {/* Arrows */}
                    <div className="hidden md:flex items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <ChevronLeft size={40} className="swiper-button-prev" />
                    </div>
                    <div className="hidden md:flex items-center absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <ChevronRight size={40} className="swiper-button-next" />
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        breakpoints={{
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        {project.image.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-[300px] md:h-[400px] xl:h-[500px] bg-muted relative rounded-xl overflow-hidden flex items-center justify-center">
                                    <Image
                                        src={src}
                                        alt={`Screenshot ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Description */}
                <div className="prose max-w-3xl dark:prose-invert">
                    <p>{project.longDescription}</p>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex gap-4">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
