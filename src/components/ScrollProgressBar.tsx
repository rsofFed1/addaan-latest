'use client';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 origin-left z-50"
                style={{ scaleX }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />
            <motion.button
                className="fixed bottom-8 right-4 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]),
                    scale: useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]),
                    y: useTransform(scrollYProgress, [0, 0.2, 1], [20, 0, 0])
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: 360
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </motion.svg>
            </motion.button>
        </>
    );
}
export default ScrollProgressBar;