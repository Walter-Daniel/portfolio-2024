import { Project } from "../interfaces/project.interface";
import { motion } from 'framer-motion';

interface Props {
    project: Project;
}

const imageRevealVariants = {
    hidden: { y: '0%', opacity: 1 },
    visible: {
        y: '-80%',
        opacity: 1,
        transition: { duration: 8, ease: 'easeInOut' },
    },
};

export const ModalContent = ({project}:Props) => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl font-theNeueBlack uppercase">
        {project.title}
      </h2>
      <h3 className="text-lg">[ {project.technology} ]</h3>
      <p className="mt-4 mb-4">{project.description}</p>
      <div className="h-[200px] overflow-hidden relative">

      <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={imageRevealVariants}
        >
          <img
            src={project.modalImage}
            alt="Imagen Animada"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {project.githubFront && (
            <a
              className="mt-4 bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-4 py-2 rounded text-center"
              href={project.githubFront}
              target="_blank"
            >
              Frontend Code
            </a>
          )}
          {project.githubBack && (
            <a
              className="mt-4 bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-500 px-4 py-2 rounded text-center"
              href={project.githubBack}
              target="_blank"
            >
              Backend Code
            </a>
          )}
        </div>

        <a
          className="mt-4 bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-500 px-4 py-2 rounded text-center col-star-4 col-end-5"
          href={project.path}
          target="_blank"
        >
          Demo
        </a>
      </div>
    </div>
  );
};
