import { AnimatedTitle, SkillButton } from '../components';
import { motion } from 'framer-motion';
import { skillsData } from '../helpers/skills-cards';

export const Skills = () => {
  return (
    <div
      className='section flex flex-col md:min-h-screen justify-center'
      id='skills'
    >
    
      <AnimatedTitle text='Habilidades'/>
      <motion.div
      className='pt-10 md:pt-0'
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
