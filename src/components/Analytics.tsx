import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GridBackground from './GridBackground'

const Analytics = () => {
   // The available tabs
   const tabs = ['access', 'connect', 'visualize']

   // State for the current tab index
   const [activeTabIndex, setActiveTabIndex] = useState(0)
  // Content for each tab
  const tabContent = {
    access: {
      title: 'Access well-organized data',
      description: `Quickly access your data in one centralized location. 
        No more searching through multiple platforms or systems — 
        everything is neatly organized and instantly available for the entire team.`
    },
    connect: {
      title: 'Connect any data',
      description: `Easily integrate data from different sources, 
        ensuring a single source of truth for your business. 
        Streamline your processes and eliminate data silos.`
    },
    visualize: {
      title: 'Visualize your data',
      description: `Turn complex data into easy-to-understand insights 
        with beautiful dashboards and reports. Empower your team 
        to make informed, data-driven decisions.`
    }
  }
  // Automatically switch to the next tab every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length)
    }, 5000) // 10,000 ms = 10 seconds

    return () => clearInterval(interval)
  }, [tabs.length])

  // Get the active tab key
  const activeTab = tabs[activeTabIndex]

  return (
    <div className="relative min-h-screen bg-[#3c1f3f] text-white overflow-hidden">
    <GridBackground/>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#F5B638] font-medium mb-4"
        >
          Task Management
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-bold mb-6"
        >
          Automate all your tasks using Practio Task Management services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Practio saves time and enables strategic decisions by automating manual tasks,
          eliminating compliance errors, and giving employees access to information they need.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
         <div className="relative flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#F5B638]"
            />
            <button className="px-4 h-[58px] bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
              See Practio
            </button>
          </div>
          <p> By clicking "See Practio," you agree to the use of your data in accordance with Practio's Privacy Notice.</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 text-black rounded-lg shadow-md"
          >
            {/* Trigger Section */}
            <h2 className="text-xl font-bold mb-4">Trigger</h2>
            <div className="flex items-center text-white justify-between mb-6 bg-[#3c1f3f] p-4 rounded-lg">
              <span>Employee Start Date is</span>
              <span className="font-semibold">Today</span>
            </div>

            {/* Actions Section */}
            <h2 className="text-xl font-bold mb-4">Actions</h2>
            <ul className="list-disc list-inside space-y-2 pl-1">
              <li>Send meeting invite</li>
              <li>Set up devices</li>
              <li>Connect taxes to ACA</li>
            </ul>
          </motion.div>
        </div>
      {/* New Section with 3 Buttons and Dynamic Content */}
      <div className="mt-20 grid bg-white p-4 md:grid-cols-2 gap-8">
          {/* Left Side: Buttons */}
          <div>
            <h2 className="text-3xl text-black font-bold mb-6">Centralized Data</h2>
            <div className="space-y-4">
              <button
                onClick={() => setActiveTabIndex(0)}
                className={`block w-1/2 text-black text-left px-6 py-4 rounded-lg transition-colors 
                  ${activeTabIndex === 0 ? 'bg-[#F5B638] text-black' : 'bg-white/10 hover:bg-white/20'} 
                  font-medium`}
              >
                Access well-organized data
              </button>
              <button
                onClick={() => setActiveTabIndex(1)}
                className={`block w-1/2 text-black text-left px-6 py-4 rounded-lg transition-colors 
                  ${activeTabIndex === 1 ? 'bg-[#F5B638] text-black' : 'bg-white/10 hover:bg-white/20'} 
                  font-medium`}
              >
                Connect any data
              </button>
              <button
                onClick={() => setActiveTabIndex(2)}
                className={`block w-1/2 text-black text-left px-6 py-4 rounded-lg transition-colors 
                  ${activeTabIndex === 2 ? 'bg-[#F5B638] text-black' : 'bg-white/10 hover:bg-white/20'} 
                  font-medium`}
              >
                Visualize your data
              </button>
            </div>
          </div>

          {/* Right Side: Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#3c1f3f] p-6 text-white rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
            <p className="leading-relaxed">
              {tabContent[activeTab].description}
            </p>
          </motion.div>
        </div>
      {/* NEW SECTION (content from the image) */}
      <div className="mt-20">
          <h2 className="text-center text-4xl font-bold text-white mb-4">
            Empower leaders without sacrificing security
          </h2>
          <p className="text-center text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            With Practio, you can share or restrict access to sensitive data and analytics.
            We’ll give you the freedom to empower employees and IT staff while still maintaining 
            the security and compliance your business demands.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-white p-8 text-black rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Set role-based permissions</h3>
              <p className="leading-relaxed">
                Choose who can see or do what. It’s easy to create groups, define roles, and limit
                privileges to keep your data safe and your team aligned.
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-white p-8 text-black rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Specify access to reports</h3>
              <p className="leading-relaxed">
                Provide specific or restricted access to dashboards or analytics to individuals or 
                groups, ensuring the right people have the data they need.
              </p>
            </div>
          </div>
        </div>
        {/* END NEW SECTION */}
      </div>
    </div>
  )
}

export default Analytics