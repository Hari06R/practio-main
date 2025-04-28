import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Ambulance , Check, FileText,ScanEye,ShieldPlus  , ShieldCheck, Clock, PieChart, Laptop, Users, Building, Mail, Phone, Calendar, CreditCard, Lock, Settings, Bell } from 'lucide-react';
import GridBackground from './GridBackground';
import { FaTooth } from "react-icons/fa";


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
const Benefits = () => {
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
                Benefits
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl font-bold mb-6 text-center mx-auto"
                style={{ width: '50%' }}
              >
                Benefits selection has never been easier
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
                              "/>
                            <button className="w-1/2 h-[58px] p-4 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
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
            <div className="flex flex-wrap justify-center gap-x-20 mt-20 gap-y-6 text-center">
        <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">SOFTWARE ADVICE</p>
          <p className="text-gray-400">4.9 <span className="text-yellow-300 text-lg">★</span></p>

        </div>
        {/* <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">G2</p>
          <p className="text-gray-400">4.9 <span className="text-yellow-300 text-lg">★</span></p>
        </div> */}
        <div className="w-40">
          <p className="text-yellow-300 text-lg">🏆</p>
          <p className="font-bold text-gray-300">PC MAGAZINE</p>
          <p className="text-gray-400">Editor's Choice</p>
        </div>
        {/* <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">CAPTERRA</p>
          <p className="text-gray-400">4.9 <span className="text-yellow-300 text-lg">★</span></p>
        </div> */}
        <div className="w-40">
          <p className="text-yellow-300 text-lg">★★★★★</p>
          <p className="font-bold text-gray-300">GETAPP</p>
          <p className="text-gray-400">4.9 <span className="text-yellow-300 text-lg">★</span></p>
        </div>
      </div>
          </div>
         <div className='bg-white w-100% p-8' >
          <div className=" mt-8 p-8 md:mb-16 bg-[#2D1E2F] rounded-lg shadow-2xl">
                  <div className="mt-2">
                  <div className="bg-[#f9f9f9] py-16">
        {/* Top text / headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase mb-2">
            Employee Benefits Management
          </p>
          <h2 className="text-4xl font-bold text-black mb-4">
            Unify your employee benefits
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Practio brings your entire employee benefits administration experience—
            plan selection, broker partnership, payroll, and HRIS—into one platform,
            simplifying insurance integration and automating your benefits busy work.
          </p>
        </motion.div>

        {/* Center image & benefits on each side */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-4 relative flex flex-col md:flex-row items-center justify-center"
        >
          {/* Left side icons */}
          <div className="flex flex-col space-y-8 items-center md:items-end md:mr-8">
            
          <div className="flex gap-4 p-2 rounded-full">
            {/* <div className="flex items-center justify-center bg-[#3c1f3f] w-12 h-12 rounded-full"> */}
                <Ambulance className="text-red-500" />
            {/* </div> */}
              <span className="font-semibold text-black">Medical</span>
            </div>
            <div className="flex gap-8 p-2 rounded-full">
              {/* <div className="bg-[#f5f5f5] p-2 rounded-full"> */}
              <FaTooth className="text-red-500"/>
              {/* </div> */}
              <span className="font-semibold text-black">Dental</span>
            </div>
          
          </div>

          {/* Center image (employee photo or illustration) */}
          <div className="relative my-8 md:my-0">
            {/* If you want connector lines, you can add absolute divs or an SVG behind this image */}
            <img 
              src="/images/employee-center.png" 
              alt="Employee" 
              className="w-40 h-40 rounded-full object-cover mx-auto"
            />
          </div>

          {/* Right side icons */}
          <div className="flex flex-col space-y-8 items-center md:items-start md:ml-8">
            <div className="flex gap-8 p-2 rounded-full">
              {/* <div className="bg-[#f5f5f5] p-2 rounded-full"> */}
                <ShieldPlus  className="text-red-500" />
              {/* </div> */}
              <span className="font-semibold text-black">FSA &amp; HSA</span>
            </div>
            
            <div className="flex gap-8 p-2 rounded-full">
              {/* <div className="bg-[#f5f5f5] p-2 rounded-full"> */}
                <ScanEye  className="text-red-500"/>
              {/* </div> */}
              <span className="font-semibold text-black">Vision</span>
            </div>
          </div>
        </motion.div>
                     
            
                  </div>
                  </div>
                  </div>
                  
                  </div>
                  <MovingCards />
                  </div>
                  
        
      
      );
    };

export default Benefits