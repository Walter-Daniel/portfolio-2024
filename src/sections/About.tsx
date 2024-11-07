import { motion } from "framer-motion";
import { fadeIn } from "../helpers/variants";
export const About = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center md:min-h-[100vh] gap-10">
        <h2
          id="about"
          className="text-4xl md:text-6xl font-bold uppercase flex items-end lg:items-center justify-center font-theNeueBlack text-center h-full"
        >
          Acerca <br />
          de mí
        </h2>
        <div className="text-md h-full flex flex-col lg:justify-center ">
          <h3 className="font-semibold text-2xl uppercase pb-2 font-theNeueBlack">
            Un tucumano apasionado por el desarrollo web
          </h3>
          <p>
            Soy un desarrollador frontend apasionado por aprender y crear
            aplicaciones web escalables y de alto rendimiento. Tengo una sólida
            base en JavaScript y TypeScript, y he trabajado en proyectos
            utilizando tecnologías como React, Next.js y herramientas de gestión
            de estado como React Redux Toolkit o Zustand.
          </p>
          <p>
            Mi experiencia incluye la creación de interfaces de usuario
            accesibles y responsivas, la implementación de componentes
            reutilizables, el desarrollo de APIs RESTful, la implementación de
            bases de datos relacionales y no relacionales, y la optimización de
            aplicaciones para mejorar el rendimiento. Soy un firme creyente en
            las mejores prácticas de desarrollo y utilizo herramientas como Git,
            Docker y metodologías ágiles para garantizar la calidad y la
            eficiencia de mi trabajo.
          </p>
          <p>
            Soy proactivo, adaptable y tengo un gran deseo de aprender nuevas
            tecnologías y enfoques de desarrollo.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
