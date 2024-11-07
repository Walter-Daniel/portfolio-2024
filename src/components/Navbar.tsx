import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { MobileLink } from './MobileLink';
import { Link } from './Link';
import { navLinks } from '../helpers/navlinks';
import { containerVars, menuVars } from '../helpers/navbar-framer-vars';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);



  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    // Recorre cada enlace para ver si su sección está en el viewport
    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.substring(1));
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(link.href);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <nav className='flex justify-between items-center py-4 px-9'>
        <div className='flex items-center gap-[1ch]'>
          <div className='bg-purple-600 rounded-full h-5 w-5' />
          <h1 className='text-md font-semibold tracking-widest uppercase'>
            purple.dev
          </h1>
        </div>
        <div className='lg:flex hidden gap-12 text-md text-zinc-400'>
            {
              navLinks.map((link, index) => (
                <Link 
                  url={link.href} 
                  title={link.title} 
                  key={index}
                  isActive={activeSection === link.href} 
              onClick={() => setActiveSection(link.href)}
                  />
              ))
            }
        </div>
        <div className='cursor-pointer lg:hidden text-md text-white uppercase' onClick={toggleNavbar}>
            Menu
        </div>
      </nav>
      {/* RESPONSIVE */}
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit" 
              className='fixed left-0 top-0 w-full h-screen origin-top  bg-black text-white p-10'>
              <div className='flex h-full flex-col'>
                <div className='flex justify-between'>
                <div className='flex items-center gap-[1ch]'>
          <div className='bg-purple-600 rounded-full h-5 w-5' />
          <h1 className='text-md font-semibold tracking-widest uppercase'>
            purple.dev
          </h1>
        </div>
                  <p className='cursor-pointer text-md text-stone-100 uppercase' 
                      onClick={toggleNavbar}>
                        Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial='initial'
                  animate='open'
                  exit='initial' 
                  className='flex flex-col h-full justify-center  items-center gap-4'>
                  {
                    navLinks.map((link, index) => (
                      <div className='overflow-hidden' key={index}>
                        <MobileLink url={link.href} title={link.title} setIsOpen={setIsOpen} isOpen={isOpen} />
                      </div>
                    ))
                  }
                </motion.div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </header>
  )
}
