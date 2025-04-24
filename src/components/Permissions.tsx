import React from 'react'
import { motion } from 'framer-motion'
import GridBackground from './GridBackground'
import permission from './practio permission.avif'
import permissions1 from './permissions.webp'

const Permissions = () => {
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
          Permissions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl font-bold mb-6"
        >
          Automate what all your employees can do and see using Practio Permissions services
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
            <img src={permission} alt="" />
            {/* Trigger Section
            <h2 className="text-xl font-bold mb-4">Trigger</h2>
            <div className="flex items-center text-white justify-between mb-6 bg-[#3c1f3f] p-4 rounded-lg">
              <span>Employee Start Date is</span>
              <span className="font-semibold">Today</span>
            </div>

            {/* Actions Section */}
            {/* <h2 className="text-xl font-bold mb-4">Actions</h2>
            <ul className="list-disc list-inside space-y-2 pl-1">
              <li>Send meeting invite</li>
              <li>Set up devices</li>
              <li>Connect taxes to ACA</li>
            </ul>  */}
          </motion.div>
        </div>
         {/* NEW SECTION: Three-card layout (Define scope, Control access, Select actions) */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Build permission profiles that give people the right power
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#F5B638] mb-3">
                Define scope
              </h3>
              <p className="text-gray-200">
                Decide exactly who has access to data or resources across your organization. 
                Limit or expand permissions by department, location, or role.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#F5B638] mb-3">
                Control access
              </h3>
              <p className="text-gray-200">
                Easily manage which employees can view, create, or edit each system. 
                Keep sensitive information locked down while empowering the right people.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#F5B638] mb-3">
                Select actions
              </h3>
              <p className="text-gray-200">
                Determine the exact actions employees can take within each tool, ensuring 
                you have precise control over your organization’s data and processes.
              </p>
            </div>
          </div>
        </motion.div>
     {/* New Section: Escalate Only the Most Important Approvals */}
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">
            Escalate only the most important approvals
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-center mb-8">
            Hire. Provision apps. Approve expenses. You set the rules for who can make and 
            approve specific requests. Then, any requests that need multiple sign-offs can sail 
            through while big ticket items are flagged for review.
          </p>

          {/* Example Approval Card */}
          <div className="bg-white p-8 text-black rounded-lg shadow-md max-w-3xl mx-auto">
            {/* If you have an actual screenshot/image, replace the placeholder below: */}
                <img src={permissions1} alt="Approvals Screenshot" className="mb-4" />
           
            <h3 className="text-2xl font-bold mb-2">Promotion request</h3>
            <p className="mb-2">All approvers must accept.</p>
            <p className="mb-2">The 4 approvers need to accept.</p>
            <p className="mb-4">Approver must accept.</p>

            {/* Steps or statuses */}
            {/* <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md">
                Sent
              </div>
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md">
                Responded
              </div>
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md">
                In location
              </div>
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md">
                Authentication
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Permissions