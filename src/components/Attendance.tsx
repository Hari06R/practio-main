import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import GridBackground from './GridBackground';


const Attendance = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <GridBackground/>
        <div className="relative max-w-7xl z-0 mx-auto px-4 bg-[#2D1E2F] sm:px-6 lg:px-8 py-24">
        <GridBackground/>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#F5B638] font-medium mb-4"
          >
            Time and Attendance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold mb-6"
          >
           Manage Time & Attendance in a stress-free way.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Automate time tracking and payroll,stay complaint with 
            local labour laws, and make better staffing decisions across 
            your workforce.
          </motion.p>
        </div>

         <div className="flex justify-center items-center ">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-8"
                  >
              <div className="flex justify-center items-center space-x-4">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="appearance-none
                              max-w-md
                              px-16
                              py-4
                              bg-white/10
                              rounded-lg
                              text-white
                              placeholder-gray-400
                              border
                              border-gray-600
                              focus:outline-none
                              focus:border-[#F5B638]
                              text-base
                              z-10
                              leading-normal
                            "/>
                         <button className="w-1/2 h-[58px] px-2 py-1 z-10 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
                See Practio
              </button>
                      </div>
            <p className="mt-3 text-sm text-gray-400">
                By clicking "See Practio," you agree to our terms and privacy policy.
              </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
            <span className="text-[#F5B638]">#1</span>
            <span>HR Product of 2024 on G2</span>
          </div>
        </motion.div>
      </div>
      <div className="bg-gray-100 py-16">
       <div className='text-center text-black  mb-10'>
        <p>Connect your employees payroll with their login time </p>

        <h6 className='text-center font-bold mt-10 text-center'>Other systems are error-prone and take hours of
           manual work to reconcile. With Practio, approved 
           hours automatically flow into Payroll—reducing manual data entry and errors.</h6>
       </div>
      </div>
        </div>

  )
}

export default Attendance