import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
}

// Variantes de la animación
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // Retardo para la aparición de cada letra
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // Activa la animación cuando el 50% del elemento está en vista

  // Dividir el texto en palabras
  const words = text.split(' ');

  return (
    <h2 ref={ref} className='font-bold font-theNeueBlack uppercase text-4xl md:text-6xl text-center md:mb-10'>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {wordIndex > 0 && ' '} {/* Añadir espacio entre palabras, excepto antes de la primera */}
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              custom={(wordIndex * word.length) + letterIndex}
              variants={letterAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </React.Fragment>
      ))}
    </h2>
  );
};