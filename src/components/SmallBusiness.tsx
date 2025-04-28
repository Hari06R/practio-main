import React, { useState } from "react";
import { motion } from "framer-motion";
import logo4 from '../components/logo4.png';
import logo19 from '../components/logo19.png'
import logo22 from '../components/logo22.png'
import GridBackground from "./GridBackground";
 
 
interface Module {
  icon: string;
  title: string;
  description: string;
  features: string[];
}
 
export default function SmallBusiness() {
 
  const feature = [
    { title: "Permissions",
     
      icon: "🔑",
    description:"Automatically govern what each person in your company can see, do, and access.", },
    { title: "Policies", icon: "🧑‍⚖️",
      description:"Built custom policies that enforce your bussiness,s unique rules and procedures.",
     },
    { title: "Workflows", icon: "⚡" ,
      description:"Automate almost anything with custom triggers and advanced workflow actions.",
    },
    { title: "Analytics", icon: "📊",
      description :"Make better decission faster with real-time,unified data in an easy-to-use report-builder.",
     },
  ];
 
  const features = [
   
    {
      icon: "🧑‍💼",
      title: "Onboard in minutes, not days",
      description:
        "As soon as you click 'Onboard', Practio takes care of the rest—sending offer letters, prompting benefits enrollment, and more.",
    },
    {
      icon: "⚙️",
      title: "Make IT management automatic",
      description:
        "Practio makes it easy to manage apps and devices, like automatically shipping laptops or controlling access to apps based on roles.",
    },
    {
      icon: "⏳",
      title: "Put time tracking on autopilot",
      description:
        "Automatically track employees’ hours from check-in to payroll—no more manual entries, syncing issues, or late approvals.",
    },
    {
      icon: "💰",
      title: "Get a full view of your expenses",
      description:
        "Manage and report on corporate cards, vendor invoices, and more in one place. Plus, sync payroll and expenses to your general ledger.",
    },
  ]
 
  ;
 
 
  return (
    <div className="relative min-h-screen bg-[#3c1f3f] text-white overflow-hidden">
         <GridBackground/>
       <div className="flex flex-col items-center justify-center px-12 py-12">
      {/* Main Content Section */}
     
      <div className="flex w-full max-w-6xl z-10 items-center">
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-lg uppercase tracking-wide text-gray-300">
          Small business </h2>
          <h1 className="text-3xl font-bold leading-tight mt-2">
          HR software for small businesses</h1>
          <p>Practio automates critical but tedious admin work for payroll,<br /> benefits, labour compliance, and more-so you can stay focused <br />on building your business.</p>
 
          {/* Email Input */}
          <div className="mt-6 z-10">
           
            <button className="mt-2 z-10 px-6 py-3 ml-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600">
              Get Started Today !
            </button>
          </div>
 
         
        </div>
 
        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <img src={logo19} alt="Practio HR Software" className="w-full max-w-lg rounded-lg" />
        </div>
      </div>
 
        {/* Star Ratings Section */}
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-6 text-center">
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
      <div className="bg-[#3C1F3F] text-white py-16 px-8 mt-7 ml-7 mr-7 flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-300">
          Payroll and Benefits
        </h3>
        <h2 className="text-3xl font-bold mt-2">
          Payroll and benefits.<br />
          Handled by us. Simplified for you.
        </h2>
        <p className="text-gray-400 mt-4">
          We ensure the payroll and benefits work you can't get wrong is always right.
          With Practio, you can easily manage your payroll and benefits for everyone,
          everywhere, in one place.
        </p>
 
        <div className="mt-8">
          <p className="font-semibold">Run payroll in 90 seconds. 100% error-free.</p>
          <p className="text-gray-400">Automatically calculate and pay taxes</p>
          <p className="text-yellow-400 font-semibold mt-4">
            Sync benefits with payroll to automate deductions
          </p>
          <p className="text-gray-400">
          Practio's Benefits Administration is integrated with Payroll, eliminating
            manual data entry by automatically applying updates, like a new marital
            status that changes an employee’s payroll deductions.
          </p>
        </div>
      </div>
 
     
    </div>
    <div className="bg-gray-100 py-16 px-8 flex flex-col items-center text-black text-center">
      <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
        Automation
      </h3>
      <h2 className="text-3xl font-bold mt-2">
        Automate your entire <br /> HR, IT, and finance to-do list
      </h2>
      <p className="text-gray-500 mt-4 max-w-3xl">
      Practio automatically handles more administrative tasks than any other HR
        solution, saving you time and money.
      </p>
 
      {/* Features Section */}
      <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-5xl">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-3xl">{feature.icon}</div>
            <h4 className="text-sm font-semibold mt-3">{feature.title}</h4>
            <p className="text-gray-500 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
 
    <div className="bg-white py-16 px-8 flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="md:w-1/2 text-black  text-center md:text-left">
        <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Compliance
        </h3>
        <h2 className="text-3xl font-bold mt-2 leading-tight">
          Maintain airtight compliance <br /> with always up-to-date policies
        </h2>
        <p className="text-gray-500 mt-4">
          Enforce compliance with hundreds of pre-built workflows that monitor
          and flag violations related to minimum wage, mandatory trainings,
          overtime, and more, so you can avoid legal risk and financial
          penalties.
        </p>
      </div>
 
      {/* Right Content - Compliance Cards */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-full max-w-md">
          {/* Background shape (optional for styling) */}
          <div className="absolute inset-0 bg-gray-200 rounded-lg opacity-50 -z-10"></div>
 
          {/* Violation Card */}
         
 
          {/* Compliance Card */}
          <div className="bg-white p-4  ">
            <img src={logo22} alt="Compliance Icon" />
           
         
           
            {/* <hr className="my-2" /> */}
           
          </div>
        </div>
      </div>
    </div>
    <div className="text-center  w-full bg-[white] mt-7  py-16 px-8">
    <h3 className="text-sm  uppercase text-black tracking-wide">
        Built Different
      </h3>
      {/* Title & Description */}
      <h2 className="text-4xl font-bold text-black">
        Analyze, automate, and <br />orchestrate anything
      </h2>
      <p className="text-black mt-4 max-w-2xl mx-auto">
        Most “all-in-one” software consists of acquired systems. Practio takes
        a platform approach, building products on a single source of truth for all
        business data related to employees.
      </p>
 
      {/* Learn More Link */}
      {/* <a href="#" className="text-gray-900 font-semibold mt-6 inline-block border-b-2 border-gray-900 hover:text-gray-700">
        Learn more about the Practio Platform
      </a> */}
 
      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl  mx-auto">
        {feature.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg text-left text-black flex flex-col justify-between h-76 hover:shadow-lg hover:bg-[#3c1f3f] hover:text-white transition duration-300">
          <div className="text-3xl bg-[#3C1F3F] pl-[5px] rounded-lg w-12 ">{feature.icon}</div>
            <div className="font-semibold  text-lg mt-3 mb-3 hover:text-white">{feature.title}:</div>
            <p mt-3 text-black  >{feature.description}</p>
 
                        {/* <div className="text-right">
              <span className="text-gray-500 text-xl">→</span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
   
 
      <center>  <div className="bg-[#3C1F3F] w-1/2  text-white py-16 px-8 flex justify-center">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold">See Practio in action</h2>
        <p className="text-gray-300 mt-4">
          Learn how Practio can help you streamline and save on HR, payroll,
          benefits, compliance, and more.
        </p>
 
        {/* Buttons */}
        <div className="mt-6 z-10 flex justify-center gap-4">
          <button className="bg-yellow-500 z-10 text-black font-semibold px-6 py-3 rounded-lg"
           onClick={() => window.location.href = '/seePractio'}>
            Request Demo
          </button>
         
        </div>
      </div>
    </div></center>
 
      </div>
  );
}