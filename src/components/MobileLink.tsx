import { FC } from 'react';
import { motion } from 'framer-motion';

interface LinkProps {
  title: string;
  url: string;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  isOpen: boolean;
}

export const MobileLink: FC<LinkProps> = ({
  title,
  url,
  setIsOpen,
  isOpen,
}) => {
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.4,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={mobileLinkVars}
      // initial='initial'
      // animate='open'
      className='text-5xl uppercase text-stone-100'
    >
      <a href={url} onClick={toggleNavbar}>
        {title}
      </a>
    </motion.div>
  );
};
