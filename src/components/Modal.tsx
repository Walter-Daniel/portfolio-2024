import React from 'react';
import { motion } from 'framer-motion';
import { ModalContent } from './ModalContent';
import { Project } from '../interfaces/project.interface';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  // Variantes para la animación del modal
  const modalVariants = {
    hidden: { opacity: 0, y: '0' },
    visible: { opacity: 1, y: '0' },
    exit: { opacity: 0, y: '0' },
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Fondo oscuro */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-10000 ease-in-out"
          />
          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#272727] text-white p-6 shadow-lg xs:w-96 relative md:w-[500px] rounded-lg">
              {/* Botón de cierre */}
              <button
                className="absolute top-2 right-4 text-gray-200 text-3xl"
                onClick={onClose}
              >
                &times;
              </button>
              {/* Contenido del Modal */}
              <ModalContent project={project} />
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

