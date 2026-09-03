export const ContainerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const TagAnimation = {
  initial: {
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export const TitleAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

export const SubTitleAnimation = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    transition: {
      ease: "circOut",
      duration: 1.5,
    },
  },
};

export const SubTitleLineAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: "24px",
    transition: {
      ease: "circOut",
      duration: 1.5,
      delay: 1,
    },
  },
};

export const SubTitleItemAnimation = {
  initial: {
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 1,
    },
  },
};
