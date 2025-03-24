import { projectData } from '../projectData';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }) {
    const project = projectData.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <section className="py-12 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">{project.name}</h1>

                {/* Scrollable Image Gallery */}
                <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
                    {project.image.map((src, index) => (
                        <div key={index} className="min-w-[300px]">
                            <Image
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                width={600}
                                height={400}
                                className="rounded-xl shadow-md"
                            />
                        </div>
                    ))}
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
