'use client';

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatedTitle } from '../components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormErrors {
  user_name?: string;
  user_email?: string;
  message?: string;
}

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const contactInfoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!form.current) return false;

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      newErrors.user_name = 'El nombre es requerido';
      isValid = false;
    }

    if (!email) {
      newErrors.user_email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.user_email = 'El email no es válido';
      isValid = false;
    }

    if (!message) {
      newErrors.message = 'El mensaje es requerido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setSubmitStatus('success');
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSubmitStatus('error');
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => setSubmitStatus('idle'), 4000);
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente o cambiar estado
    }
  }, [submitStatus]);

  return (
    <section className='min-h-screen pt-20 mt-32' id='contact'>
      <div className='container mx-auto px-4'>
        <AnimatedTitle text='Contacto' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Fromulario */}
          <motion.div
           className='p-8 text-black'
           variants={formVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.3 }}
          >
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label
                  htmlFor='user_name'
                  className='block text-sm font-medium text-white'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  name='user_name'
                  id='user_name'
                  className='mt-1 block w-full p-2 rounded-md border-gray-500 shadow-sm focus:border-purple-500 focus:ring-purple-500'
                />
                {errors.user_name && (
                  <p className='mt-1 text-sm text-red-600 font-semibold'>
                    {errors.user_name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='user_email'
                  className='block text-sm font-medium text-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='user_email'
                  id='user_email'
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500 ${
                    errors.user_email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.user_email && (
                  <p className='mt-1 text-sm text-red-600 font-semibold'>
                    {errors.user_email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-white'
                >
                  Mensaje
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='mt-1 block w-full p-2 rounded-md border-gray-500 shadow-sm focus:border-purple-500 focus:ring-purple-500'
                ></textarea>
                {errors.message && (
                  <p className='mt-1 text-sm text-red-600 font-semibold'>
                    {errors.message}
                  </p>
                )}
              </div>
              <div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50'
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <p className='mt-4 text-sm bg-green-600 font-semibold w-full rounded-md p-4 text-center text-white'>
                ¡Mensaje enviado con éxito!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className='mt-4 text-sm bg-red-600 font-semibold w-full rounded-md p-4 text-center text-white'>
                Hubo un error al enviar el mensaje. Por favor, inténtalo de
                nuevo.
              </p>
            )}
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
               className='text-white flex flex-col justify-center items-center'
               variants={contactInfoVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h3
              className='text-2xl font-bold mb-6'
              variants={itemVariants}
            >
              Otras formas de contacto
            </motion.h3>
            <motion.div className='space-y-6' variants={itemVariants}>
              <motion.div
                className='flex items-center space-x-4'
                variants={itemVariants}
              >
                <FaEnvelope className='text-purple-500 text-2xl' />
                <div>
                  <p className='font-medium'>Email</p>
                  <a
                    href='mailto:walterdcarrizo.19@gmail.com'
                    className='text-purple-400 hover:text-purple-300'
                  >
                    walterdcarrizo.19@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className='flex items-center space-x-4'
                variants={itemVariants}
              >
                <FaLinkedin className='text-purple-500 text-2xl' />
                <div>
                  <p className='font-medium'>LinkedIn</p>
                  <a
                    href='https://www.linkedin.com/in/walter-daniel-carrizo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-purple-400 hover:text-purple-300'
                  >
                    Ver perfil de LinkedIn
                  </a>
                </div>
              </motion.div>
              <motion.div
                className='flex items-center space-x-4'
                variants={itemVariants}
              >
                <FaGithub className='text-purple-500 text-2xl' />
                <div>
                  <p className='font-medium'>GitHub</p>
                  <a
                    href='https://github.com/Walter-Daniel'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-purple-400 hover:text-purple-300'
                  >
                    Ver perfil de GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
