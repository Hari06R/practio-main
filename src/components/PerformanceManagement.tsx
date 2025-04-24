import React from 'react'
import {motion} from 'framer-motion'
import GridBackground from './GridBackground'

const PerformanceManagement = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <GridBackground/>
          <div className="relative max-w-7xl mx-auto px-4 bg-[#3c1f3f] sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16 ">
            <GridBackground/>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#F5B638] font-medium mb-4"
              >
                Performance 
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl font-bold mb-6 "
              >
               Performance Management Software(PMS)
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Performance management is powered by your employee data. That makes it effortless to set up and sustain your performance review process across the employee lifecycle.
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
                <div className="flex justify-center items-center space-x-4 ">
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
                        leading-normal
                        z-10
                      "/>
                    <button className="w-1/2 h-[58px]  p-4 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium z-10">
                                  See Practio
                                </button>
                </div>
    
                <p className="mt-3 text-sm text-gray-400 text-center">
                  By clicking "See Practio," you agree to our terms and privacy policy.
                </p>
              </motion.div>
            </div>
    
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-24 text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                <span className="text-[#F5B638]">#1</span>
                <span>HR Product of 2024 on G2</span>
              </div>
            </motion.div> */}
          </div>
    
          {/* <div className="bg-gray-100 py-16">
            <div className="text-center text-black text-2xl font-bold mb-2">
              <h5></h5> */}
              {/* <h6 className="text-center font-bold mt-10">
                Other systems are error-prone and take hours of manual work to reconcile. 
                With Practio, approved hours automatically flow into Payroll—reducing manual 
                data entry and errors.
              </h6> */}
            {/* </div>
          </div> */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8 text-center text-black"
              >
                Connect every step of performance management
              </motion.h2>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
                {/* 1. Align recruiting with every team */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="p-4"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Align on employee goals
                  </h3>
                  <p className="text-gray-600">
                   Assign, share, and track goals across your company.
                  </p>
                </motion.div>
    
                {/* 2. Build a repeatable process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Set up evaluationss in minutes
                  </h3>
                  <p className="text-gray-600">
                    Customizable performance review cycles so you can run them exactly the way you want, in a fraction of the time it takes other systems.
                  </p>
                </motion.div>
    
                {/* 3. Unlock the recruiter in everyone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-4"
                >
                  <h3 className="text-xl font-semibold mb-2">
                Calibrate ratings and raises
                  </h3>
                  <p className="text-gray-600">
                   Collaborate on ratings, promotions, and raisesand sync changes to payroll.
                  </p>
                </motion.div>
    
                {/* 4. Go beyond basic reporting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-4"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Performance trends
                  </h3>
                  <p className="text-gray-600">
                    Report on performance alongside all your employee data to unlock deeper, more impactful insights.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div>
          <div className="bg-white py-16 w-3/4 items-center m-20  mx-auto rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-1 items-center mx-auto">
              {/* LEFT COLUMN */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-black mx-auto"
              >
                <h2 className="text-4xl font-bold mb-6">
                  Unite your teams around the right goals
                </h2>
                <p className="text-white-700">
                  Align your organization with objectives that are ownable, trackable and measurable.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        </div>
      )
    }

export default PerformanceManagement