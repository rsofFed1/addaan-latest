import { motion } from 'framer-motion';

export const BackgroundAnimations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-10 h-10 border-2 border-[#51a2ff] rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-60 left-10 w-20 h-20 border-2 border-[#51a2ff] rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/4 right-20 w-16 h-16 border-2 border-[#8a39b8] rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute top-20 right-10 w-25 h-25 border-2 border-[#51a2ff] rounded-lg"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`floating-circle-${i}`}
          className={`absolute w-8 h-8 rounded-full ${
            i % 2 === 0 ? 'bg-white' : 'bg-[#51a2ff]'
          }`}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`small-circle-${i}`}
          className={`absolute w-4 h-4 rounded-full ${
            i % 2 === 0 ? 'bg-blue-900/10' : 'bg-purple-900/10'
          }`}
          animate={{
            y: [0, -300, 0],
            x: [0, Math.sin(i) * 80, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
};

// Predefined animation variants for reuse
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};