import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  id: number
  title: string;
  img: string;
  description: string;
  technology: string;
  path: string;
  github: string;
  githubBack: string | null; // index: number;
}

export const Card: React.FC<Project> = ({ id, img, title, description, technology }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <div className="h-[70vh]">
      <div className="container flex justify-center items-center h-[100%] w-[100%]">
        <div className={`max-w-5xl flex items-center gap-5 h-[100%] ${id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <section className="flex-1 h-[70%] flex flex-col justify-center" ref={ref}>
              <img src={img} alt={title} className="w-[100%] h-[100%] object-cover"/>
          </section>
          <motion.section className="flex-1 flex flex-col gap-5" style={{y}}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
            <small>{technology}</small>
            <button>See Demo</button>
          </motion.section>

        </div>
      </div>
    </div>
  );
};
