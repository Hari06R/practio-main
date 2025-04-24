import React, { useState } from "react";
import logo18 from "../components/logo18.png";
import { TbReportSearch } from "react-icons/tb";
import GridBackground from "./GridBackground";
 
const faqs = [
  {
    question: "Which types of roles does Talent Signal currently support?",
    answer: "Talent Signal currently supports engineering, sales, and customer success roles. More roles may be added in the future."
  },
  {
    question: "What data does Talent Signal use to produce its performance signals?",
    answer: "Talent Signal analyzes data from code contributions, customer interactions, and other performance metrics to generate insights."
  },
  {
    question: "Which third-party app connections do we need to enable to use Talent Signal?",
    answer: "You need to enable integrations with tools like GitHub, Salesforce, and Zendesk to fully leverage Talent Signal’s capabilities."
  },
  {
    question: "How long does Rippling retain data ingested from third-party app data sources?",
    answer: "Rippling retains data for up to 12 months, ensuring compliance with data privacy and security policies."
  },
  {
    question: "How is the Talent Signal AI model trained?",
    answer: "Talent Signal’s AI model is trained using anonymized historical data and real-time employee performance metrics."
  },
  {
    question: "How often does Talent Signal generate performance signals and reports?",
    answer: "Performance reports are generated weekly, with the option for real-time updates based on company settings."
  },
  {
    question: "Can we use Talent Signal to generate performance signals and reports after the first 90 days?",
    answer: "Yes, Talent Signal continues to provide performance insights beyond 90 days, helping with ongoing employee evaluations."
  },
  {
    question: "Does Talent Signal’s output automatically feed into any workflows in Rippling?",
    answer: "Yes, Talent Signal seamlessly integrates with Rippling’s HR workflows to assist in performance reviews and decision-making."
  },
  {
    question: "How does Rippling protect the security of the data it uses specifically for Talent Signal?",
    answer: "Rippling follows industry-standard security protocols, including data encryption and role-based access control."
  },
  {
    question: "How does Rippling control access to our source code by Rippling employees?",
    answer: "Rippling enforces strict access control policies and monitors employee access to prevent unauthorized viewing of source code."
  },
  {
    question: "Are you using any third-party vendors for the core model?",
    answer: "Yes, Talent Signal leverages industry-leading AI models from trusted third-party providers for enhanced accuracy."
  },
  {
    question: "Will you share Talent Signal’s outputs with any third party?",
    answer: "No, Talent Signal’s performance insights are confidential and are not shared with any third parties without explicit permission."
  }
];
 
 
const TalentSignal = () => {
  const [openIndex, setOpenIndex] = useState(null);
 
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  const [email, setEmail] = useState("");
 
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
    <div className="relative min-h-screen text-white overflow-hidden mt-16">
           <GridBackground/>
    <div className="bg-[#3C1F3F] text-white flex flex-col items-center justify-center px-12 py-12">

    <div className="max-w-2xl text-center">
        <span className="bg-[#5A2A5A] text-sm text-white px-3 py-1 rounded-full">
          TALENT SIGNAL &nbsp; • &nbsp; EARLY ACCESS
        </span>
        <h1 className="text-4xl font-bold mt-4">
        Empower new hires with meaningful, actionable feedback for success.
        </h1>
        <p className="mt-4 text-lg text-gray-300">
        Talent Signal enables new hires to maximize their potential by providing managers with a second opinion on employee work and actionable feedback for improvement.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 z-10 w-64 rounded-md text-black outline-none"
          />
          <button className="bg-yellow-500 z-10 text-black px-5 py-3 rounded-md  font-semibold hover:bg-yellow-400">
            see Practio
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-3 mb-7">
            By clicking "See Practio," you agree to the use of your data in accordance with Practio's{" "}
            <a href="#" className="text-white underline">
              Privacy Notice
            </a>
            . including for marketing purposes.
          </p>
      </div>
 
     </div>
     <div className="bg-gray-100 text-gray-900 py-20 flex flex-col items-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Fast Track to Success
        </p>
        <h2 className="text-4xl font-bold mt-2">
          Get another perspective on new hire performance
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Early feedback is critical to any new hire’s success. But delivering
          high-quality feedback is a challenge. Talent Signal uses AI to review
          work, from specific lines of code to customer interactions, then
          generates a performance signal based on actual contributions.
        </p>
      </div>
    </div>
 
   
   <center> <div className="max-w-2xl mx-auto p-6">
      <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
        SHORTER FEEDBACK LOOPS
      </span>
      <h2 className="text-3xl text-white font-bold mt-3">
        Surface performance insights <br /> by day 90
      </h2>
      <p className="text-white mt-3">
        Talent Signal reviews the first 90 days of work product for new hires in
        engineering, support, and sales roles to generate a
        <span className="font-medium"> “performance signal” </span> for each employee.
      </p>
    </div></center>
 
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
 
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
   
 
 
 
    <center>  <div className="bg-[#3C1F3F] w-full  text-white py-16 px-8 flex justify-center">
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
 
export default TalentSignal;
 