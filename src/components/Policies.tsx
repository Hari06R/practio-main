import React from "react";
import logo11 from "../components/logo11.png";
import logo23 from "../components/logo23.png";  
import logo24 from "../components/logo24.png";
import logo27 from "../components/logo27.png";
import { TbReportSearch } from "react-icons/tb";
 
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import GridBackground from "./GridBackground";
 
const faqs = [
  { question: "What is the definition of a policy?", answer: "A policy is a set of guidelines or rules that govern an organization's operations." },
  { question: "What is company policy enforcement?", answer: "It refers to how a company ensures employees follow established policies." },
  { question: "Why are company policies important?", answer: "Policies help maintain consistency, compliance, and clear expectations within a company." },
  { question: "What are examples of company policy?", answer: "Examples include HR policies, security policies, and remote work policies." }
];
 
 
const Policies = () => {
  const [openIndex, setOpenIndex] = useState(null);
 
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
    <div className="relative min-h-screen overflow-hidden mt-16">
        <GridBackground/>
    <div className="bg-[#3C1F3F] text-white flex flex-col  items-center justify-center px-12 py-12">
      {/* Main Content Section */}
      <div className="flex w-full max-w-6xl items-center">
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-lg uppercase tracking-wide text-gray-300">
          Policies          </h2>
          <h1 className="text-4xl font-bold leading-tight mt-2">
          Automatically implement your company policies.</h1>
 
          {/* Email Input */}
          <div className="mt-6 z-10">
            <input
              type="email"
              placeholder="What's your email?"
              className="w-[70%] z-10 max-w-md px-4 py-3 text-black rounded-md focus:outline-none"
            />
            <button className="mt-4 z-10 px-6 py-3 ml-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600">
              See Practio
            </button>
          </div>
 
          <p className="text-sm text-gray-400 mt-3">
            By clicking "See Practio," you agree to the use of your data in accordance with Practio's{" "}
            <a href="#" className="text-white underline">
              Privacy Notice
            </a>
            . including for marketing purposes.
          </p>
        </div>
 
        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <img src={logo27} alt="Practio HR Software" className="w-full  max-w-lg  rounded-lg" />
        </div>
      </div>
 
      {/* Star Rating Section */}
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
        </div></div></div>
        <div className=" py-16 text-white  px-6 flex flex-col items-center text-center">
      <h4 className="text-sm font-semibold tracking-widest text-white uppercase">
      POLICY ENFORCEMENT
      </h4>
      <h2 className="text-3xl  text-white ">
      Effortlessly streamline policy enforcement <br />for complete peace of mind.
 
 
 
 
 
 
 
</h2>
      <p className="text-white-600 max-w-2xl mt-2 ">
        Practio automates the tedious, error-prone tasks involved in policy enforcement—such as sending reminders, updating systems, and more.
 
 
 
 
 
 
 
 
      </p>
 
      {/* Payroll Image */}
      {/* <div className="mt-8 w-full flex justify-center">
        <img
          src="https://i.pinimg.com/736x/19/e5/ee/19e5ee09dc49999d8e6fff0fdfc6ab52.jpg"
          alt="Run Payroll"
          className="max-w-4xl w-full rounded-lg shadow-lg"
        />
      </div> */}
    </div>
 
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-100">
      {/* Left Content */}
     <center> <div className="w-1/2 ">
        <h2 className="text-4xl font-bold text-gray-800">
          Build policies that apply to the right people automatically
        </h2>
        <p className="text-gray-600 mt-4">
          Apply policies to people using Supergroups. Supergroups are dynamic
          membership lists you can customize using attributes like level or
          location. If an employee moves or changes roles, their policies
          update automatically.
        </p>
      </div></center>
 
      {/* Right Image/Interactive Section */}
      {/* <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="your-image-url.png"
          alt="Policy Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div> */}
    </div>
 
    <div className="flex justify-center items-center bg-[#3C1F3F] text-white p-10 rounded-lg">
  <div className="p-6 py-16 px-6 flex flex-col items-center text-center max-w-2xl">
    <h4 className="text-sm uppercase tracking-wide text-gray-400 flex items-center justify-center">
      Automated Policy Enforcement Based on Roles
    </h4>
    <h2 className="text-3xl font-bold mt-2">
      Updating someone's role instantly adjusts their policies.
    </h2>
    <p className="mt-4 text-gray-300">
      Employees seamlessly inherit the correct policies when transitioning to new roles or Supergroups—no action required from you.
    </p>
  </div>
</div>
 
 
     
 
    <div className="w-full  flex flex-col md:flex-row items-center justify-between bg-[#f5ede3]  py-16 px-6 md:px-16">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-left ml-40">
        <h4 className="text-sm uppercase tracking-wide text-gray-500"> Cross-app policies</h4>
        <h2 className="text-3xl font-bold mt-2">
        Design policies that seamlessly integrate across Practio's applications.</h2>
        <p className="mt-4 text-gray-600 max-w-lg">
        A policy activated in one area of Practio can trigger actions in another. For instance, you can create a rule that blocks employees from clocking into Time & Attendance if they have unfinished trainings in Learning Management.
        </p>
      </div>
 
      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={logo24} // Replace with actual mobile app image
          alt="Mobile App Preview"
        />
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
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-white mb-6">FAQs</h2>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
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
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-yellow-500 z-10 text-black font-semibold px-6 py-3 rounded-lg"
           onClick={() => window.location.href = '/seePractio'}>
            Request Demo
          </button>
         
        </div>
      </div>
    </div></center>
 
 
     
     
   
   
    </div>
 
 
     
   
   
  );
 
};
 
export default Policies;