import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/variants';

interface Props {
  name: string;
  icon: string
}

export const SkillButton = ({name, icon}: Props) => {
    return (
          <motion.button
            variants={fadeIn("", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-200 border border-black text-black hover:bg-slate-300 transition-all duration-500 px-4 py-2 rounded-lg text-center m-1 flex items-center"
          >
            <img src={icon} alt={name} className='w-10 h-10 mr-2' />
            {name}
          </motion.button>
    );
  };
