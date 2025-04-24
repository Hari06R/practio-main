import React, { useState } from "react";
import logo27 from "../components/logo27.png"
import GridBackground from "./GridBackground";
const testimonials = [
  {
    quote:
      "Just had the easiest onboarding possible via Practio. 10 min start to finish for all the documentation that usually takes days. Saves even more time for the HR team.",
    author: "Raja J.",
  },
  {
    quote:
      "Practio has made our payroll process seamless. No more manual work, and our employees love the experience!",
    author: "Priyanka K.",
  },
  {
    quote:
      "Switching to Practio was the best decision! The HR automation tools saved us countless hours every month.",
    author: "Ramesh G.",
  },
];
 
const MediumBusiness = () => {
  const [index, setIndex] = useState(0);
 
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
 
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
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
  const tools = [
    ["User Authentication", "Employee Management", "Self Service"],
    ["Time & Attendence", "Leave Management", "Recruiting"],
    ["Payroll", "Performance Management", "Admin"],
    ["Travel & Expence"],
  ];
  return (
    <div className="relative min-h-screen bg-[#3c1f3f] text-white overflow-hidden">
        <GridBackground/>
    <div className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Section - Text and CTA */}
      <div className="md:w-1/2">
        <h3 className="uppercase text-sm font-semibold tracking-widest text-gray-400 mb-2">
          Medium-Sized Businesses
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          The HRIS system <br /> for midsize businesses
        </h2>
        <p className="text-gray-300 mb-6">
          Automate work across HR, IT, and finance, so you can deliver the
          results of a much bigger team.
        </p>
 
        {/* Email Input and Button */}
        <div className="flex items-center bg-white z-10 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 z-10 px-4 py-2 text-black outline-none"
          />
          <button className="bg-yellow-500 z-10 text-black font-semibold px-6 py-2">
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
 
      {/* Right Section - Onboarding UI */}
      <div className="md:w-1/2  p-6 text-black">
        <img
          src={logo27}
          alt="Onboarding UI"
          className=""
        />
      </div>
    </div>
 
    <center><div
  className="bg-[#3C1F3F] mt-2 w-[90%] bg-cover bg-center text-white py-16 px-6 md:px-20 text-center"
>      <h4 className="text-yellow-400 uppercase tracking-wide mb-2">Products</h4>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Get the tools you need at every stage
      </h2>
      <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
        Every Practio product is built on the same powerful foundation, so it's painless to implement new ones as your business needs evolve.
      </p>
 
      {/* Tools Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((col, index) => (
          <div key={index} className="space-y-4">
            {col.map((tool, idx) => (
              <button
                key={idx}
                className="flex justify-between items-center w-full px-5 py-4 bg-[#432E54] rounded-lg text-lg font-medium hover:bg-[#432E54] transition"
              >
                {tool}
                {/* <span className="text-yellow-400">{">"}</span> */}
              </button>
            ))}
          </div>
        ))}
      </div>
 
     
    </div></center>
 
    <div className="bg-white text-center py-16 px-6 md:px-20">
      <h4 className="text-gray-500 uppercase tracking-wide mb-2">Automation</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Automate 90% of your <br /> administrative work
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Practio automates routine changes, like updating employees’ payroll taxes if they move.
        You can also build custom automations to streamline your company’s unique processes.
      </p>
    </div>
 
    <div className="bg-white text-center py-16 px-6 md:px-20">
      <h4 className="text-gray-500 uppercase tracking-wide mb-2">
        Employee Experience
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Designed for you.< br />
      Admired by employees.      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
      Seamless, innovative, and engaging—these are just a few ways our customers' employees describe their experience with Practio.
      </p>
      <p className="text-lg font-semibold text-gray-900 max-w-2xl mx-auto italic">
        “{testimonials[index].quote}”
      </p>
      <p className="text-gray-700 font-bold mt-4">- {testimonials[index].author}</p>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-gray-300 z-10 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 z-10 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400"
        >
          &gt;
        </button>
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
    <div className="bg-[#3C1F3F] text-white py-16 px-6 md:px-20 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">
      Ready to 2x your efficiency with the <br />
      HRIS system for midsize businesses?
    </h2>
    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
      See how Practio can help you manage all of your employee data and
      operations in one place, no matter your business’s size.
    </p>
 
    {/* Buttons */}
    <div className="flex flex-col z-10 md:flex-row justify-center gap-4">
      <button className="bg-yellow-500 z-10 text-black font-semibold px-6 py-3 rounded-lg"
       onClick={() => window.location.href = '/seePractio'}>
        Request demo
      </button>
      {/* <button className="border border-yellow-500 text-yellow-500 font-semibold px-6 py-3 rounded-lg">
        Watch Tour Video
      </button> */}
    </div>
  </div></div>
  );
};
 
export default MediumBusiness;