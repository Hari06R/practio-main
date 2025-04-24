import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hris from './components/Hris';
import Login from './components/Login';
import SeePractio from './components/ScheduleDemoForm';
import Attendance from './components/Attendance';
import Pricing from './components/Pricing';
import Recruiting from './components/Recruiting';
import { User, IndianRupee, Monitor, CreditCard } from 'lucide-react';
import Freequote from './components/Freequote';
import PerformanceManagement from './components/PerformanceManagement';
import Benefits from './components/Benefits';
import Expense from './components/Expense';
import TaskManagement from './components/TaskManagement';
import Analytics from './components/Analytics';
import Healthcare from './components/Healthcare';
import FinancialServices from './components/FinancialServices';
import SmallBusiness from './components/SmallBusiness';
import Startup from './components/Startup';
import Enterprise from './components/Enterprise';
import Construction from './components/Construction';
import MediumBusiness from './components/MediumBusiness';
import Permissions from './components/Permissions';
import Payroll from './components/Payroll';
import TalentSignal from './components/TalentSignal';
import Policies from './components/Policies';

// Add type definitions
type TabKey = 'hcm-tab' | 'payroll-tab' | 'it-tab' | 'spend-tab';

type TabContent = {
  title: string;
  content: string;
};

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('hcm-tab');
  
  const tabContent: Record<TabKey, TabContent> = {
    'hcm-tab': {
      title: 'Human Capital Management',
      content: 'Manage all employee data, benefits, time off, and compliance in one place with our HCM solutions.'
    },
    'payroll-tab': {
      title: 'Payroll Management',
      content: 'Automate payroll processing, tax filings, and compliance across all states and countries.'
    },
    'it-tab': {
      title: 'IT Management',
      content: 'Automate employee onboarding/offboarding, device management, and software provisioning.'
    },
    'spend-tab': {
      title: 'Spend Management',
      content: 'Manage corporate cards, expenses, and accounts payable with intelligent spend controls.'
    }
  };

  return (
    <Router>
    <div className="min-h-screen bg-[#3c1f3f] flex flex-col">
      <Navbar />
      <Routes>
          <Route path="/hris" element={<Hris />} />
          <Route path="/login" element={<Login />} />
          <Route path='/seePractio' element={<SeePractio/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path="/time-and-attendance" element={<Attendance/>}/>
          <Route path='/recruiting' element={<Recruiting/>}/>
          <Route path='/freequote' element={<Freequote/>}/>
          <Route path='/performance' element={<PerformanceManagement/>}/>
          <Route path='/benefits' element={<Benefits/>}/>
          <Route path='/analytics' element={<Analytics/>}/>
          <Route path="/expense" element={<Expense/>} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/small-business" element={<SmallBusiness/>} />
          <Route path='/startup' element={<Startup/>}/>
          <Route path="/construction" element={<Construction/>} />
          <Route path="/enterprise" element={<Enterprise/>} />
          <Route path="/medium-business" element={<MediumBusiness/>} />
          <Route path="/health-care" element={<Healthcare/>} />
          <Route path="/finance" element={<FinancialServices />} />
          <Route path="/task-management" element={<TaskManagement />} />
          <Route path="/talent-signal" element={<TalentSignal />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/" element={
            
      <main className="flex-grow">
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-6xl font-bold mb-4 mt-10 text-center ">
              Employees Get More <br/>Done with Practio
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center ">
              Increase savings, automate busy work, and make better decisions by managing payroll, HR, IT, and spend in one place.
            </p>
          <div className="flex justify-center items-center">
                            <motion.div
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="space-y-8"
                            >
                        <div className="flex justify-center items-center space-x-4">
                          <input
                            type="email"
                            placeholder="Enter your work email"
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
                         <button className="px-6 py-4 bg-[#F5B638] z-10 text-black rounded-lg hover:bg-[#E5A628] font-medium">
                See Practio
              </button>
                      </div>
                      <p className="mt-3 text-sm text-gray-400">
                      By clicking "See Practio," you agree to the use of your data in accordance with Practio's Privacy Notice.
                        </p>
                    </motion.div>
                  </div>
          </motion.div>
        </div>

        {/* Pricing Section */}
        <div className="bg-[#231A24] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <h2 className="text-2xl sm:text-5xl font-bold text-white mb-6">
                The leading platform for companies<br />that want to grow faster
                </h2>
              <p className="text-xl text-gray-300 mb-8">
                Tell us which services you'd like to use and we'll send a custom quote.
              </p>
              <button className="bg-[#F5B638] text-black px-8 py-4 rounded-md hover:bg-[#E5A628] font-medium text-lg">
                Get a free quote
              </button>
            </motion.div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { name: 'SOFTWARE ADVICE', rating: '4.9 ⭐' },
                { name: 'G2', rating: '4.9 ⭐' },
                { name: 'PC MAGAZINE', rating: "Editor's Choice" },
                { name: 'CAPTERRA', rating: '4.9 ⭐' },
                { name: 'GETAPP', rating: '4.9 ⭐' },
              ].map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-[#F5B638] text-sm font-semibold mb-2">{review.name}</div>
                  <div className="text-white text-sm">{review.rating}</div>
                </motion.div>
              ))}
            </div>

            {/* Business Suites Section */}
            <div className="flex items-center justify-center mt-8 md:mb-16 bg-white rounded-lg shadow-2xl">
              <div className="flex flex-col items-center justify-center w-full max-w-2xl p-6">
                <p className="text-purple-800 mt-8 mb-4 uppercase">Business Suites</p>
                <h2 className="text-center text-purple-800 mb-8 text-3xl font-bold">
                  Accelerate every part of your business
                </h2>
                <p className="text-purple-800 text-opacity-70 text-center mb-12">
                  Everything you need to manage your business operations in one unified system.  Practio was built through R&D (not M&A), so its apps work together seamlessly.
                </p>
                
                {/* Tabs */}
                <div className="hidden md:flex items-center justify-between w-full ">
                  {[
                  { id: 'hcm-tab', name: 'HCM', Icon: User },
                  { id: 'payroll-tab', name: 'Payroll', Icon: IndianRupee },
                  { id: 'it-tab', name: 'IT', Icon: Monitor },
                  { id: 'spend-tab', name: 'Spend', Icon: CreditCard },
                  ].map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer transition-colors shadow-lg ${
                    activeTab === tab.id ? 'bg-purple-100' : 'hover:bg-purple-50'
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-center w-12 h-12">
                    <tab.Icon className={`w-full h-full ${
                      activeTab === tab.id ? 'text-purple-800' : 'text-purple-600'
                    }`} />
                    </div>
                    <p className={`font-medium ${
                    activeTab === tab.id ? 'text-purple-800' : 'text-purple-600'
                    }`}>
                    {tab.name}
                    </p>
                  </div>
                  ))}
                </div>

                {/* Content Card */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 mb-32 w-full bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-purple-800 text-opacity-80">
                    {tabContent[activeTab].content}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
          } />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;