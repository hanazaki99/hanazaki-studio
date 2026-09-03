export const LogoAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const MenuAnimation = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
    },
  },
};

export const OverlayAnimaiton = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

export const MobileLinksAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring",
    },
  },
};
