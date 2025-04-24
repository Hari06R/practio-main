import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {  Check, FileText, ShieldCheck, Clock, PieChart, Laptop, Users, Building, Mail, Phone, Calendar, CreditCard, Lock, Settings, Bell } from 'lucide-react';
import GridBackground from './GridBackground';


const AnimatedCheckbox = ({ delay = 0 }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          scale: [0, 1],
          opacity: [0, 1],
          transition: { duration: 0.3 }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        await controls.start({
          scale: [1, 0],
          opacity: [1, 0],
          transition: { duration: 0.3 }
        });
      }
    };
    setTimeout(() => animate(), delay);
  }, [controls, delay]);

  return (
    <motion.div
      animate={controls}
      initial={{ scale: 0, opacity: 0 }}
      className="bg-[#F5B638] rounded-full p-1"
    >
      <Check className="w-4 h-4 text-black" />
    </motion.div>
  );
};

const FloatingCard = ({ icon: Icon, label, className = "" }) => (
  <div className={`flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 ${className}`}>
    <Icon className="w-5 h-5 text-[#F5B638]" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const MovingCards = () => {
  const row1Cards = [
    { icon: Laptop, label: "Device Management" },
    { icon: Users, label: "Team Directory" },
    { icon: Building, label: "Office Locations" },
    { icon: Mail, label: "Email Setup" },
    { icon: Phone, label: "Phone System" },
    { icon: Laptop, label: "Device Management" },
    { icon: Users, label: "Team Directory" },
    { icon: Building, label: "Office Locations" },
    { icon: Mail, label: "Email Setup" },
    { icon: Phone, label: "Phone System" },
  ];

  const row2Cards = [
    { icon: Calendar, label: "Time Tracking" },
    { icon: CreditCard, label: "Payroll" },
    { icon: Lock, label: "Security" },
    { icon: Settings, label: "Preferences" },
    { icon: Bell, label: "Notifications" },
    { icon: Calendar, label: "Time Tracking" },
    { icon: CreditCard, label: "Payroll" },
    { icon: Lock, label: "Security" },
    { icon: Settings, label: "Preferences" },
    { icon: Bell, label: "Notifications" },
  ];

  const row3Cards = [
    { icon: FileText, label: "Documents" },
    { icon: ShieldCheck, label: "Compliance" },
    { icon: Clock, label: "Scheduling" },
    { icon: PieChart, label: "Reports" },
    { icon: Users, label: "HR Portal" },
    { icon: FileText, label: "Documents" },
    { icon: ShieldCheck, label: "Compliance" },
    { icon: Clock, label: "Scheduling" },
    { icon: PieChart, label: "Reports" },
    { icon: Users, label: "HR Portal" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-20">
      <motion.div
        animate={{
          x: [0, -1220]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-4 mb-4"
      >
        {[...row1Cards, ...row1Cards].map((card, i) => (
          <FloatingCard key={i} {...card} />
        ))}
      </motion.div>

      <motion.div
        animate={{
          x: [-1220, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-4 mb-4"
        style={{ top: "8rem" }}
      >
        {[...row2Cards, ...row2Cards].map((card, i) => (
          <FloatingCard key={i} {...card} />
        ))}
      </motion.div>

      <motion.div
        animate={{
          x: [0, -1220]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-4 absolute"
        style={{ top: "16rem" }}
      >
        {[...row3Cards, ...row3Cards].map((card, i) => (
          <FloatingCard key={i} {...card} />
        ))}
      </motion.div>
    </div>
  );
};

const Hris = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Send offer letters',
      description: 'Automate your hiring process'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Compliance 360',
      description: 'Stay compliant with regulations'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Off requests',
      description: 'Manage leave and attendance'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Analytics',
      description: 'Track HR metrics and insights'
    }
  ];

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
            Practio HRIS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold mb-6"
          >
            HR management software<br />that amplifies impact
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
            className="bg-white/5 rounded-2xl p-8"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <AnimatedCheckbox delay={index * 500} />
                  <div className="flex-1 bg-white/5 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-[#F5B638]">{feature.icon}</div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
     <div className='bg-white w-100% p-8' >
      <div className=" mt-8 p-8 md:mb-16 bg-[#2D1E2F] rounded-lg shadow-2xl">
              <div className="mt-2">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-4"
                  >
                    The most complete view of<br />your organization
                  </motion.h2>
                  <p className="text-center p-4">Disconnected systems create repetitive manual work 
                    and are unable to offer business-critical insights. At Practio, every product is 
                    built in-house and designed to seamlessly share data - including third-party apps—giving
                     you a single source of truth.</p>
                  <MovingCards />
              </div>
      </div>
     </div>
     
    </div>
    
  
  );
};

export default Hris;