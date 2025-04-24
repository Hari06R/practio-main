import React from 'react'
import { motion, useAnimation } from 'framer-motion';

const GridBackground = () => (
    <div className="absolute inset-0 overflow-hidden ">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 182, 56, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 182, 56, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );

export default GridBackground