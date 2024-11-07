'use client';

import { useState, useEffect } from 'react';

import { projectsData } from '../helpers/portfolio-data';
import { ProjectCard } from '../components';



export const ProjectsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <section className='pt-20' id='projects'>
      <div className='container mx-auto px-4'>
        <h2 className='font-bold uppercase flex flex-col font-theNeueBlack text-4xl md:text-6xl text-center md:mb-10'>
          Mis Proyectos
        </h2>
        <div className=''>
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
