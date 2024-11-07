import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer 
    className="text-white py-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <motion.p 
          className="text-sm text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          © 2024 Walter Carrizo. Todos los derechos reservados.
        </motion.p>
      </div>
    </div>
  </motion.footer>
  )
}
