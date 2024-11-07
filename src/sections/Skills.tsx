import { SkillButton } from '../components';
import { motion } from 'framer-motion';
import { skillsData } from '../helpers/skills-cards';

export const Skills = () => {
  return (
    <div
      className='section flex flex-col md:min-h-screen justify-center'
      id='skills'
    >
      <h2 className='font-bold uppercase flex flex-col font-theNeueBlack mb-10'>
        <span className='text-4xl md:text-6xl'>Habilidades y</span>
        <span className='text-4xl md:text-6xl'>Herramientas</span>
      </h2>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              staggerChildren: 1,
            },
          },
        }}
      >
        <div className='flex flex-wrap'>
          {skillsData.map(({ icon, name }) => (
            <SkillButton key={name} icon={icon} name={name} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
