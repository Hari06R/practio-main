import React,{useState} from 'react'
import { motion, AnimatePresence  } from 'framer-motion'
import GridBackground from './GridBackground'

const sections = [
    {
      name: 'Onboarding',
      title: 'Streamlined Onboarding',
      description: 'Automatically create accounts, ship devices, and enroll new hires in training all in one go.'
    },
    {
      name: 'Payroll',
      title: 'Automate Your Payroll',
      description: 'Automatically calculate wages, deduct taxes, and sync with benefits for a smooth payroll process.'
    },
    {
      name: 'Benefits',
      title: 'Manage Employee Benefits',
      description: 'Enroll new hires in health plans, 401(k)s, and other benefits automatically when they start.'
    },
    {
      name: 'HR',
      title: 'Complete HR Suite',
      description: 'Alert a hiring manager when an offeree has signed an offer letter and completed a background check.'
    },
    {
        name: 'IT',
        title: 'IT Automation',
        description: "Lock an employee's device and send an alert to their manager when device hasn't pinged in 10 days."
    },
    {
        name: 'Finance',
        title: 'Finance',
        description: 'Automate generating and sharing weekly FP&A Payroll Reports.'
    }
  ]
const TaskManagement = () => {
    const [activeSection, setActiveSection] = useState(sections[0])
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
            <button className="px-6 py-4 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
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
      </div>
     {/* NEW SECTION: More Custom Triggers & Actions */}
     <div className="max-w-7xl mx-auto px-4  bg-white text-black sm:px-6 lg:px-8 pb-24">
        {/* Headline & Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold p-7 mb-4">
            More custom triggers. <br /> More advanced actions.
          </h2>
          <p className="text-xl text-black">
            Any data in Practio or connected third-party apps can become your trigger—like security course completions, 
            dedicated endpoint threats, or support tickets. Pick a trigger and set an action.
          </p>
        </div>
        {/* Bottom Two-Column Text */}
        <div className="m-20 grid md:grid-cols-2 gap-8">
          <div >
            <h4 className="text-2xl w-full font-bold mb-4">Build a hyper-custom trigger</h4>
            <p className="text-black-300 w-3/4">
              For example, if a user hasn't completed the device security training, 
              you can send them a reminder, automatically open a support ticket, 
              or even deactivate their access until training is complete.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Automate across all your apps</h4>
            <p className="text-black-300 w-3/4">
              Practio helps you integrate with Payroll, Recruiting, and third-party apps like Slack and Zendesk,
              so you can take automated actions across your entire tech stack with a single trigger.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold m-4">
            Improve efficiency across every corner of your business
          </h2>
          <p className="text-xl text-gray-300">
            Automate complex, multi-step workflows for any use case you can imagine, 
            from shipping and configuring devices to suspending card access.
          </p>
        </div>

        {/* Two-column layout: Left side (tabs), Right side (content) */}
        <div className="grid md:grid-cols-3 m-8 gap-8 z-10">
          {/* Left side: tabs/sections */}
          <div className="space-y-4 z-10">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section)}
                className={`
                  block w-full text-left px-4 py-3 rounded-lg 
                  border border-transparent
                  transition-colors duration-200
                  ${
                    activeSection.name === section.name
                      ? 'bg-[#F5B638] text-black font-semibold'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }
                `}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Right side: animated content */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.name} // key needed for AnimatePresence
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 h-[400px] rounded-lg"
              >
                <h3 className="text-2xl text-black font-bold mb-4">
                  {activeSection.title}
                </h3>
                <p className="text-black mb-4">
                  {activeSection.description}
                </p>
                {/* Example: You can add an image or more content here */}
                <div className="bg-[#3c1f3f] p-4 rounded-lg">
                  <p>
                    This area can display a preview or more details 
                    related to <strong>{activeSection.name}</strong>.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TaskManagement