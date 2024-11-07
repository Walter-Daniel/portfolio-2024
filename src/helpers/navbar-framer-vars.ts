export const menuVars = {
    initial: {
      scaleY: 0
    },
    animate:{
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  export const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1
      }
    } 
  }