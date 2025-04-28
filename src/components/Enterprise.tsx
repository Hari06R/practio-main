import React from "react";
import logo18 from "../components/logo18.png";
import { TbReportSearch } from "react-icons/tb";
import GridBackground from "./GridBackground";
 
const Enterprise = () => {
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
    <div className="relative min-h-screen bg-[#3c1f3f] text-white overflow-hidden pt-10">
        <GridBackground/>
    <div className=" flex flex-col items-center justify-center px-12 py-12">
      {/* Main Content Section */}
      <div className="  items-center">
        {/* Left Content Section */}
       <center> <div className="flex-1 max-w-xl">
          <h2 className="text-lg uppercase tracking-wide text-gray-300">
          Enterprise
          </h2>
          <h1 className="text-3xl font-bold leading-tight mt-2">
          Streamline workforce management with advanced HR and payroll software.</h1>
          <p className="mt-10" > Practio helps you streamline daily operations while driving strategic growth for your business.</p>
 
          {/* Email Input */}
          <div className="relative flex items-center mt-8 space-x-4">
            <input
              type="email"
              placeholder="What's your email?"
              className="w-[70%] z-10 max-w-md px-4 py-3 text-black rounded-md focus:outline-none"
            />
            <button className="mt-0 px-6 py-3 ml-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600">
              See Practio
            </button>
          </div>
 
          <p className="text-sm text-gray-400 mt-3 mb-20">
            By clicking "See Practio," you agree to the use of your data in accordance with Practio's{" "}
            <a href="#" className="text-white underline">
              Privacy Notice
            </a>
            .  including for marketing purposes.
          </p>
        </div></center>
 
        </div>
 
      {/* Star Rating Section
      <div className="mt-12 flex flex-wrap justify-center gap-12 text-center">
        <div className="w-48">
          <p className="text-yellow-300 text-2xl">★★★★★</p>
          <p className="font-bold text-gray-300 mt-2">SOFTWARE ADVICE</p>
          <p className="text-gray-400">4.9 <span className="text-yellow-300 text-lg">★</span></p>
        </div>
 
        <div className="w-48">
          <p className="text-yellow-300 text-2xl">🏆</p>
          <p className="font-bold text-gray-300 mt-2">PC MAGAZINE</p>
          <p className="text-gray-400">Editor's Choice</p>
        </div>
 
        <div className="w-48">
          <p className="text-yellow-300 text-2xl">★★★★★</p>
          <p className="font-bold text-gray-300 mt-2">GETAPP</p>
          <p className="text-gray-400">4.9 <span className="text-yellow-300 text-lg">★</span></p>
        </div>
      </div> */}
      </div>
 
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-100">
      {/* Left Section */}
      <div className="md:w-1/2 ml-40">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          A fully featured HRMS <br /> you can easily configure
        </h2>
        <p className="text-gray-600 mb-6">
          Choose from a library of natively built applications and third-party
          integrations. Practio’s unified data model gives you unparalleled
          configurability in—and across—your tools.
        </p>
 
        <div className="grid grid-cols-2 gap-4 text-black">
          <div className="flex items-center space-x-3">
            <span className="text-lg">📋</span> <span>User Authentication</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">🌎</span> <span>Employee Management</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">⏳</span> <span>Self Service</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">🏥</span> <span>Time & Attendence</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">📌</span> <span>Recruiting</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">⚖️</span> <span>Leave Management</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">📚</span> <span>Payroll</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">📊</span> <span>Performance Management</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">📑</span> <span>Admin</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg">🧑‍💼</span> <span>Travel & Expence</span>
          </div>
        </div>
 
       
      </div>
 
      {/* Right Section (Dashboard Preview) */}
      <div className="md:w-1/3 mt-10 md:mt-0">
      <img
        src="https://i.pinimg.com/736x/6d/81/19/6d8119800984fb11d86584c2c826869e.jpg"
        alt="Dashboard Preview"
        className="w-full "
      />
        </div>
    </div>
    <div className="bg-[#3C1F3F] w-[80%] text-white py-16 px-6 md:px-20 flex flex-col items-center ml-40">
      {/* Header */}
      <h3 className="uppercase text-sm font-semibold tracking-widest text-gray-300 mb-2">
        Administration
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Manage your people operations at scale
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mb-8">
        Systematize everything-from routine processes like onboarding to global compliance-so your people can focus on execution.
      </p>
 
      {/* Content Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Left Card */}
        <div className="bg-[#432E54] p-6 rounded-lg shadow-md">
          {/* <div className="bg-gray-700 h-40 w-full rounded-md mb-4"></div> Placeholder for Image */}
          <h3 className="text-lg font-semibold mb-2">
            Automated employee life cycle, from hiring to retiring
          </h3>
          <p className="text-gray-300 text-sm">
            Manage employees with workflows that instantly communicate with other tools. From hiring to app provisioning, Practio removes the need for manual work.
          </p>
        </div>
 
        {/* Right Card */}
        <div className="bg-[#432E54] p-6 rounded-lg shadow-md">
          {/* <div className="bg-gray-700 h-40 w-full rounded-md mb-4"></div> Placeholder for Image */}
          <h3 className="text-lg font-semibold mb-2">
            Proactive compliance in 10 provinces (and 185+ countries)
          </h3>
          <p className="text-gray-300 text-sm">
            Ensure compliance with hundreds of built-in workflows to enforce policies related to minimum wage, taxation, overtime, and more.
          </p>
        </div>
      </div>
 
      {/* Quote Section */}
      <p className="text-gray-400 text-center text-sm mt-8 max-w-lg italic">
        "Practio is a modern tool kit that allows most of our administrative tasks to run on autopilot, so I can spend more time understanding how to support our leaders and team members."
      </p>
    </div>
 
    <div className="bg-gray-100 text-[#3C1E29] py-16 px-6 md:px-20 flex flex-col items-center">
      {/* Title */}
      <h3 className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
        Strategy
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Go from supporting role <br /> to strategic partner
      </h2>
      <p className="text-gray-600 text-center max-w-2xl">
        Report on the trends that matter most and customize programs to address your business’s unique challenges. Practio empowers HR leaders to deliver more value to their company.
      </p>
    </div>
 
    <div className="bg-[#F8F7F5] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
  {/* Text Section */}
  <div className="text-center max-w-2xl">
    <h3 className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
      Business Intelligence
    </h3>
    <h2 className="text-3xl md:text-4xl font-bold text-[#3C1E29] mb-4">
      Run powerful reports <br /> across modules
    </h2>
    <p className="text-gray-600">
      Quickly uncover insights on productivity, costs, or virtually any topic you can think of.
      Practio unifies all your data, even from third-party apps, on its platform.
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
   
 
 
 
    <center>  <div className="bg-[#3C1F3F] w-1/2  text-white py-16 px-8 flex justify-center">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold">See Practio in action</h2>
        <p className="text-gray-300 mt-4">
          Learn how Practio can help you streamline and save on HR, payroll,
          benefits, compliance, and more.
        </p>
 
        {/* Buttons */}
        <div className="mt-6 flex justify-center z-10 gap-4">
          <button className="bg-yellow-500 text-black z-10 font-semibold px-6 py-3 rounded-lg"
           onClick={() => window.location.href = '/seePractio'}>
            Request Demo
          </button>
         
        </div>
      </div>
    </div></center>
    </div>
  );
};
 
export default Enterprise;
 
 