import React from 'react'
import GridBackground from './GridBackground'
import { motion } from 'framer-motion'

const Payroll = () => {
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
            Payroll
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold mb-6"
          >
           Manage Payroll in a stress-free way.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Automate payroll,stay complaint with 
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
              <div className="flex justify-center items-center space-x-2">
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
                         <button className=" h-[58px] w-3/4 py-1 z-10 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
                See Practio
              </button>
                      </div>
            <p className="mt-3 text-sm text-gray-400">
                By clicking "See Practio," you agree to our terms and privacy policy.
              </p>
          </motion.div>
        </div>
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-200">
            Run payroll accurately. On time. Every time.
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-4xl mx-auto mb-16">
            We built Practio’s payroll software on a unified record of employee data, meaning it can automate manual work and reduce the risk of human error.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-white text-black rounded-lg p-6 shadow-md w-full max-w-lg">
              <h3 className="text-2xl font-semibold mb-4">Direct Deposits</h3>
              <p className="text-lg mb-2">$10,128.76</p>

              <h3 className="text-2xl font-semibold mb-4">Total Employee Taxes</h3>
              <p className="text-lg mb-2">$4,491.74</p>

              <h3 className="text-2xl font-semibold mb-4">Total Employer Taxes</h3>
              <p className="text-lg mb-2">$1,242.64</p>

              <h3 className="text-2xl font-semibold mb-4">Total Debit</h3>
              <p className="text-lg mb-2 text-gray-400">Calculating</p>

              <h3 className="text-3xl font-bold mt-8">$16,245</h3>
              <p className="text-lg text-gray-500">Practio will debit your account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Payroll