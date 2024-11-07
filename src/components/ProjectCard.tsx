import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from 'framer-motion';

interface Project {
  id: number;
  pretitle: string;
  title: string;
  thumbnail: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoFrontUrl: string | null;
  repoBackUrl: string | null;
}

function useParallax(value: MotionValue<number>, distance: number) {
  // Agregamos un resorte para suavizar el parallax
  const smoothValue = useSpring(value, { stiffness: 50, damping: 20 });
  return useTransform(smoothValue, [0, 1], [-distance, distance]);
}

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
      offset: ["end start", "start end"]
  });

  const y = useParallax(scrollYProgress, 50);
  const a = useParallax(scrollYProgress, 20);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 py-14 md:py-0 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <motion.div className='w-full md:w-1/2' style={{ y: a }}>
        <img
          src={project.thumbnail}
          alt={`Screenshot of ${project.title}`}
          className='rounded-lg shadow-lg md:w-[470px] md:h-[600px] object-top'
        />
      </motion.div>

      {/* Línea divisoria */}

      <motion.div
        className={`w-full md:w-1/2 flex items-center h-full gap-x-8 ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }
        `}
        style={{ y }}
      >
        {/* Línea divisoria */}
        <div className="flex flex-col items-center mr-4 ">
              <div className="w-2 h-2 bg-stone-100 rounded-full mb-2"></div> {/* Circulo superior */}
              <div className="w-[1px] bg-stone-100 h-[300px]"></div> {/* Línea vertical */}
              <div className="w-2 h-2 bg-stone-100 rounded-full mt-2"></div> {/* Circulo inferior */}
            </div>

        <div className='space-y-4'>
          <h3 className='text-2xl font-bold uppercase text-gray-200'>
            {project.title}
          </h3>
          <p className='text-gray-200'>{project.description}</p>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm'
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='flex gap-4 pt-4'>
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center'
            >
              Demo
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 ml-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
            {project.repoBackUrl && (
              <a
                href={project.repoBackUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center'
              >
                Repositorio
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </a>
            )}
            {project.repoFrontUrl && (
              <a
                href={project.repoFrontUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center'
              >
                Repositorio
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
