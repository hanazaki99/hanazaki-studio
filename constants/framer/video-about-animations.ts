export const ContainerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

export const LineAnimation = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      ease: "circOut",
      duration: 1.5,
    },
  },
};

export const TextAnimation = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "circOut",
      duration: 1.5,
      delay: 1,
    },
  },
};

export const PlayAnimation = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: "circOut",
      duration: 1.5,
      delay: 1,
    },
  },
};
