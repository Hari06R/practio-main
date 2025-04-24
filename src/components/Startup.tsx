import React from "react";
import { FaCog, FaGlobe, FaMoneyBillWave } from "react-icons/fa";
import logo25 from "../components/logo25.png"
import { FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";
 
 
import { FaCheckCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import GridBackground from "./GridBackground";
 
const OnboardingFeature = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-sm text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};
 
 
const FeatureCard = ({ icon, title, description }) => {
 
  return (
    <div className="flex flex-col   items-center text-center max-w-xs">
      {icon}
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
     
    </div>
  );
};
 
const Startup = () => {
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
  return (
    <div className="relative min-h-screen bg-[#3c1f3f] text-white overflow-hidden">
        {/* <GridBackground/> */}
    <div className=" flex flex-col items-center justify-center px-8 py-12">
        <GridBackground/>
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full">
        {/* Left Content Section */}
        <div className="flex-1 text-center z-10 lg:text-left">
          <h2 className="text-sm uppercase tracking-wide text-gray-300">
            START-UPS
          </h2>
          <h1 className="text-4xl font-bold leading-tight mt-2">
            Grow your startup faster  with Practio
          </h1>
          <p className="mt-4 text-gray-300 max-w-md">
            Practio helps you offload critical admin work for payroll, benefits,
            compliance, IT, and finance—helping your startup grow fast and stay
            lean.
          </p>
 
          {/* Call to Action Button */}
          <button className="mt-6 px-6 py-3 z-100 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600">
            Get started today!
          </button>
 
          {/* Rating Badge
          <div className="mt-4 flex items-center space-x-2">
            <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
              BEST HR SOFTWARE
            </div>
            <p className="text-gray-300 text-sm">Rated Best HR Software by US News</p>
          </div> */}
        </div>
 
        {/* Right Image Section (Mockup) */}
        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
           
 
            <img
              src={logo25}
              alt="Mockup"
              className="w-2/3 rounded-lg"
            />
         
        </div>
       
      </div>
 
     
      <div className="w-full bg-[#432E54] mt-7 py-16 px-6 md:px-16 text-white flex flex-col items-center">
      {/* Title Section */}
      <h4 className="text-sm uppercase tracking-wide text-gray-400">The Practio Effect</h4>
      <h2 className="text-3xl font-bold mt-2 text-center">
        Built to let start-ups with <br /> lean teams scale with ease
      </h2>
      <p className="mt-4 text-gray-300 text-center max-w-2xl">
        Practio helps start-ups stay nimble and succeed out of the gate with
        intuitive workflows and powerful automations.
      </p>
 
      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center mt-10 gap-12 md:gap-24">
        <div className="text-center">
          <h3 className="text-4xl font-bold">110+</h3>
          <p className="text-gray-400 mt-2">
            former founders on staff with direct start-up experience
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">50%</h3>
          <p className="text-gray-400 mt-2">
            less headcount needed to scale compared to non-Practio customers
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">600+</h3>
          <p className="text-gray-400 mt-2">
            third-party integrations including GitHub, Slack, AWS, and more
          </p>
        </div>
      </div>
    </div></div>
 
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16 text-center">
      {/* Title Section */}
      <h4 className="text-sm uppercase tracking-wide text-gray-500">Automation</h4>
      <h2 className="text-3xl text-black font-bold mt-2">
        A force multiplier for every part of your business
      </h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Practio automatically handles more administrative tasks than any other HR
        solution for start-ups—a complete, turnkey back office in a box.
      </p>
 
      {/* Features Section */}
      <div className="flex flex-col text-black md:flex-row justify-center mt-10 gap-12 md:gap-16">
        <FeatureCard
          icon={<FaCog className="text-4xl text-yellow-500" />}
          title="Make IT management automatic"
          description="Practio makes it easy to manage apps and devices, like automatically
          shipping laptops, or controlling access based on roles."
        />
        <FeatureCard
          icon={<FaGlobe className="text-4xl text-yellow-500" />}
          title="Scale globally without the hassle"
          description="Practio handles the hard parts of hiring and paying international employees,
          ensuring compliance with local tax laws."
        />
        <FeatureCard
          icon={<FaMoneyBillWave className="text-4xl text-yellow-500" />}
          title="Gain a full view of your expenses"
          description="Manage and report on corporate cards, vendor invoices, and sync payroll
          and expenses to your general ledger."
        />
      </div>
    </div>
 
    <div className="w-full bg-[#3C1F3F] text-white py-16 px-6 md:px-16 text-center">
      {/* Title Section */}
      <h4 className="text-sm uppercase tracking-wide text-gray-400">Onboarding</h4>
      <h2 className="text-3xl font-bold mt-2">
        Get new hires to peak productivity—faster
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Practio ensures your new employees have everything they need to hit the
        ground running on day one.
      </p>
 
      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center mt-10 gap-8 md:gap-12">
        {/* Left Side: Checklist */}
        <div className="bg-[#432E54] p-6 rounded-xl max-w-md">
          <h3 className="text-lg font-semibold text-left">Onboarding checklist</h3>
          <div className="bg-white p-4 rounded-lg mt-3">
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" /> Sign offer letter
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" /> Select medical coverage
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" /> Set up work apps
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" /> Order office equipment
              </li>
            </ul>
          </div>
          <p className="text-gray-300 mt-4 text-left">
            Practio gets new hires running in 90 seconds by assigning required
            trainings, sending invites to meetings, and more.
          </p>
        </div>
 
        {/* Right Side: Automated Check-ins */}
        {/* <div className="bg-[#4F1C51] p-6 rounded-xl max-w-md">
          <h3 className="text-lg font-semibold text-left">Put monthly check-ins on autopilot</h3>
          <div className="bg-white p-4 rounded-lg mt-3">
            <p className="text-gray-700 text-left">
              <span className="bg-gray-200 px-2 py-1 rounded-md text-sm font-semibold">
                If...
              </span>{" "}
              Employee tenure is greater than 30 days
            </p>
            <p className="text-gray-700 text-left mt-2">
              <span className="bg-gray-200 px-2 py-1 rounded-md text-sm font-semibold">
                Then...
              </span>{" "}
              Send a new hire check-in survey
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Employee</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Manager</span>
            </div>
          </div>
          <p className="text-gray-300 mt-4 text-left">
            Automatically schedule 30-60-90 day check-ins and surveys to ensure
            your new hires receive sufficient support and feedback in their
            first three months.
          </p>
        </div> */}
      </div>
    </div>
 
    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-6 md:px-16">
      {/* Left Side - Background with Floating Cards */}
          {/* <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <img src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" className="w-5 h-5 mr-2" />
                <span className="font-semibold">Sao Paolo, Brazil</span>
              </span>
              <span className="text-red-500 flex items-center">
                <FaExclamationTriangle className="mr-1" /> 2 Violations
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg mt-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-5 h-5 mr-2" />
                <span className="font-semibold">Philadelphia Schedule</span>
              </span>
              <span className="text-green-600 flex items-center">
                <FaShieldAlt className="mr-1" /> Compliant
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600 flex justify-between">
              <span>Security Training</span>
              <span>Anti-harassment Training</span>
            </div>
          </div> */}
   
     
 
      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-left text-black md:pl-12 mt-8 md:mt-0">
       <center><h4 className="text-sm uppercase tracking-wide  text-gray-500">Compliance</h4></center>
        <h2 className="text-3xl font-bold mt-2">
          Maintain airtight compliance with always up-to-date policies
        </h2>
        <p className="mt-4 text-gray-600 max-w-lg">
          Enforce compliance with hundreds of pre-built workflows that monitor and flag
          violations—from hiring out-of-province or internationally to T4s and CHA paperwork—
          ensuring you avoid legal and financial risk.
        </p>
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
   
      <div className="bg-[#3C1F3F] text-white py-18 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-1/2 ml-60 mb-10">
                  <div className="flex items-center space-x-2">
                    {/* <span className="text-lg">📁</span> */}
                    <TbReportSearch className="w-10 h-10 text-yellow-400" />
       
                    <h3 className="text-lg font-semibold"></h3>
                  </div>
          <p className="mt-2 text-gray-300">
            See how you can automate your workflows and reporting with Practio’s growing
            library of pre-built templates.
          </p>
          {/* <a href="#" className="mt-3 text-yellow-400 font-semibold underline">
            Browse all templates
          </a> */}
        </div>
 
       
 
        {/* Right Side */}
        <div className="bg-[#3C1F3F] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold">
            Get a demo—<span className="text-yellow-400">live or on demand</span>
          </h2>
          <p className="mt-3 text-gray-300">
            See how Practio can help you manage all of your employee data and operations in
            one place and easily grow your business from 2 to 2,000+ employees.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-500 z-10 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600" 
             onClick={() => window.location.href = '/seePractio'}>
              Request Live Demo
            </button>
            {/* <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 hover:text-black">
              Watch Tour Video
            </button> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
 
export default Startup;