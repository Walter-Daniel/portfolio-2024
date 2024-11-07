'use client';

import { useState, useEffect } from 'react';

import { projectsData } from '../helpers/portfolio-data';
import { AnimatedTitle, ProjectCard } from '../components';



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
        <div className='flex justify-center gap-4'>
        <AnimatedTitle text='Mis'/> <AnimatedTitle text='Proyectos'/>
        </div>
        <div className=''>
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
