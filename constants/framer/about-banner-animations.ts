export const BannerAnimation = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      ease: "circOut",
      duration: 1.5,
    },
  },
};

export const TextAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 0.5,
    },
  },
};
