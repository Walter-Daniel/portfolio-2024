import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
}

// Variantes de la animación
const letterAnimation = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Retardo para la aparición de cada letra
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

// Componente reutilizable
export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Activa la animación solo una vez al entrar en la vista

  return (
    <h2 ref={ref} className='font-bold font-theNeueBlack uppercase text-4xl md:text-6xl text-center md:mb-10'>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Ejecuta la animación al estar en vista
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
};


