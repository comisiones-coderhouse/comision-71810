"use client";

import { motion } from "motion/react";

function AnimatedTitle() {
    return (
        <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            className="text-4xl font-bold leading-none sm:text-5xl select-none">Quisquam necessita vel
            <span className="text-secondary">laborum doloribus</span>delectus
        </motion.h1>
    )
}

export default AnimatedTitle