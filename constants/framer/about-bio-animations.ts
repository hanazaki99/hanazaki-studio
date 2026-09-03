export const CardAnimation = {
  initial: {
    scale: 0.7,
    y: 100,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
    },
  },
};

export const TitleAnimation = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.5,
      ease: "circOut",
    },
  },
};

export const TextAnimation = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "circOut",
    },
  },
};

export const ImageAnimation = {
  initial: {
    scale: "var(--scale-initial)",
    x: "var(--x-initial)",
    opacity: "var(--opacity-initial)",
  },
  animate: {
    scale: "var(--scale-animate)",
    x: "var(--x-animate)",
    opacity: "var(--opacity-animate)",
    transition: {
      duration: 1,
      delay: 0.7,
      ease: "circOut",
    },
  },
};
