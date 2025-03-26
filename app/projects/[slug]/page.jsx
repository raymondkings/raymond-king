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
        <section className="py-12 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">{project.name}</h1>

                {/* Swiper Container with padding for arrows */}
                <div className="relative px-12">
                    {/* Left Arrow - positioned outside the image area */}
                    <div className="hidden md:flex items-center absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <ChevronLeft size={50} className="swiper-button-prev" />
                    </div>

                    {/* Right Arrow */}
                    <div className="hidden md:flex items-center absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 cursor-pointer">
                        <ChevronRight size={50} className="swiper-button-next" />
                    </div>

                    {/* Swiper with adjusted margin */}
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
                        className="mb-8"
                    >
                        {project.image.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-w-[300px]">
                                    <Image
                                        src={src}
                                        alt={`Screenshot ${index + 1}`}
                                        width={600}
                                        height={400}
                                        className="rounded-xl shadow-md"
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
                <div className="mt-8 flex gap-4">
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