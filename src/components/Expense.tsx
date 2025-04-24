import React from 'react'
import { motion } from 'framer-motion'
import GridBackground from './GridBackground'
import { FaIndianRupeeSign } from "react-icons/fa6"
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { SendHorizontal } from 'lucide-react';

const Expense = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
        
         <div className="relative max-w-7xl mx-auto px-4 bg-[#3c1f3f] sm:px-6 lg:px-8 py-24">
         <GridBackground/>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#F5B638] font-medium mb-4"
          >
            Expense
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold mb-6"
          >
            Expense management software 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The Expense management software gives you a hassle-free way to track, manage, and analyze your expenses, helping you stay on top of your finances with ease.
          </motion.p>
        </div>

        {/* Centered container for input and button */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Flex row with input and button */}
            <div className="flex justify-center items-center space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="appearance-none
                    w-full
                    max-w-md
                    px-16
                    py-4
                    z-10
                    bg-white/10
                    rounded-lg
                    text-white
                    placeholder-gray-400
                    border
                    border-gray-600
                    focus:outline-none
                    focus:border-[#F5B638]
                    text-base
                    leading-normal
                  "/>
                {/* <button className="flex justify-center px-8 z-10 py-1 bg-[#006BFF] text-black rounded-lg hover:bg-[#E5A628] font-medium">
                              See Practio
                            </button> */}
                            <SendHorizontal className="h-10 w-10 text-[#F5B638] "/>
            </div>

            <p className="mt-3 text-sm text-gray-400 text-center">
              By clicking "See Practio," you agree to our terms and privacy policy.
            </p>
          </motion.div>
        </div>
        <div className="mt-16 bg-white text-black p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex justify-center">
              <BsGlobeCentralSouthAsia className="h-10 w-10 text-[#F5B638]" />
              </div>
              <h3 className="text-2xl font-semibold">Reimburse people in 100+ countries</h3>
              <p>
                Practio offers the fastest way to reimburse employees and contractors for corporate expenses globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex justify-center">
               <FaIndianRupeeSign className="h-10 w-10 text-[#F5B638]" />
              </div>
              <h3 className="text-2xl font-semibold">Issue payments in any currency</h3>
              <p>
                Pay employees in their local currency and track all expenses with ease.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex justify-center">
               <IoReceipt className="h-10 w-10 text-[#F5B638]" />
              </div>
              <h3 className="text-2xl font-semibold">Collect receipts in any language</h3>
              <p>
                Practio translates receipts and converts currencies for easy tracking.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Rotating Globe */}
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="absolute bottom-0 right-0"
        >
          <img
            src="/images/globe.png"  // Add your globe image path here
            alt="Rotating Globe"
            className="h-96 w-96"
          />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Expense;