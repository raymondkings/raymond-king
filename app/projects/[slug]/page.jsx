'use client';

import { projectData } from '../projectData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectDetail({ params }) {
    const project = projectData.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <section className="py-12 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">{project.name}</h1>

                {/* Scrollable Image Gallery with Swiper */}
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mb-8"
                    spaceBetween={20}
                    slidesPerView={1.1}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.5,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
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
