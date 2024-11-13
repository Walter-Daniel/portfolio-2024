import profileIMG from '../assets/profile1.webp';
import handIcon from '../assets/icons/hand.png';
import emailIcon from '../assets/icons/email.png';
import locationIcon from '../assets/icons/location.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/variants';

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <div className='min-h-[100vh] flex justify-around flex-col items-center pt-10 lg:pt-0' id='home'>
      <div className='grid grid-cols-1 lg:grid-cols-12 md:gap-8'>

        <motion.figure 
          className='col-span-4 order-2 lg:order-1 w-full h-full'
          variants={fadeIn("", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={profileIMG}
            alt='Profile image'
            className='h-[100%] w-full rounded-md'
            style={{
              border: 'solid 1px black',
            }}
          />
        </motion.figure>
        <motion.div
          className='col-span-8 flex flex-col lg:justify-center order-1 lg:order-2 mb-4 md:mb-0'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <div className='uppercase font-bold leading-tight'>
            <div className='mt-9 flex gap-2'>
              <img
                src={handIcon}
                alt='hand icon'
                className='h-8 text-purple-600'
              />
              <motion.h2 className='text-xl' variants={textVariants}>
                Walter Carrizo - Purple.dev
              </motion.h2>
            </div>
            <motion.h2
              className='text-3xl md:text-6xl mt-3 md:mt-0 font-theNeueBlack font-bold'
              variants={textVariants}
            >
              Desarrollador
            </motion.h2>
            <motion.h2
              className='text-5xl md:text-8xl font-theNeueBlack text-stroke'
              variants={textVariants}
            >
              Fullstack
            </motion.h2>
          </div>

          <motion.div className='' variants={textVariants}>
            <motion.p className='flex gap-1 items-center' variants={textVariants}>
              <img src={emailIcon} alt='email icon' className='h-8' />
              walterdcarrizo.19@gmail.com
            </motion.p>
            <motion.p className='flex gap-1 items-center' variants={textVariants}>
              <img src={locationIcon} alt='location icon' className='h-8' />
              Tucumán, Argentina
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
