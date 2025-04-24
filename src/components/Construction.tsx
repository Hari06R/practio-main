import React from "react";
import logo11 from "../components/logo11.png";
import logo23 from "../components/logo23.png";  
import logo24 from "../components/logo24.png";  
import { TbReportSearch } from "react-icons/tb";
import GridBackground from "./GridBackground";
 
 
const Construction = () => {
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
    <div>
    <div className="relative min-h-screen bg-[#3C1F3F] text-white flex flex-col  items-center justify-center px-12 py-12">
      {/* Main Content Section */}
      <GridBackground/>
      <div className="flex w-full max-w-6xl items-center">
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-lg uppercase tracking-wide text-gray-300">
            Practio FOR MANUFACTURING
          </h2>
          <h1 className="text-4xl font-bold leading-tight mt-2">
            HR & Payroll as efficient <br /> as your production line
          </h1>
 
          {/* Email Input */}
          <div className="relative flex items-center mt-8 space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#F5B638]"
            />
            <button
              className="px-6 py-4 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium"
             
            >
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
          <img src={logo11} alt="Practio HR Software" className="w-full max-w-lg rounded-lg" />
        </div>
      </div>
 
      {/* Star Rating Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-12 text-center">
        <div className="w-48">
          <p className="text-yellow-300 text-2xl">★★★★★</p>
          <p className="font-bold text-gray-300 mt-2">SOFTWARE ADVICE</p>
          <p className="text-gray-400">4.9 ⭐</p>
        </div>
 
        <div className="w-48">
          <p className="text-yellow-300 text-2xl">🏆</p>
          <p className="font-bold text-gray-300 mt-2">PC MAGAZINE</p>
          <p className="text-gray-400">Editor's Choice</p>
        </div>
 
        <div className="w-48">
          <p className="text-yellow-300 text-2xl">★★★★★</p>
          <p className="font-bold text-gray-300 mt-2">GETAPP</p>
          <p className="text-gray-400">4.9 ⭐</p>
        </div></div></div>
        <div className="bg-[#F5EDE3] py-16  mt-5 px-6 flex flex-col items-center text-center">
      <h4 className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
        PAYROLL
      </h4>
      <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Run payroll in minutes, not hours
      </h2>
      <p className="text-gray-600 max-w-2xl mt-4">
        Practio syncs all your business's HR data with payroll. Never manually
        enter data, like hours worked, or use a calculator to crunch shift
        differentials, PTO, and multiple pay rates again.
      </p>
 
      {/* Payroll Image */}
      <div className="mt-8 w-full flex justify-center">
        <img
          src="https://i.pinimg.com/736x/19/e5/ee/19e5ee09dc49999d8e6fff0fdfc6ab52.jpg"
          alt="Run Payroll"
          className="max-w-4xl w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
 
    <div className="w-full flex flex-col md:flex-row bg-[#3C1F3F] text-white p-10 rounded-lg">
      {/* Left Section */}
      <div className="md:w-1/2 p-6">
        <h4 className="text-sm uppercase tracking-wide text-gray-400 flex items-center">
          <span className="mr-2">📅</span> Scheduling
        </h4>
        <h2 className="text-3xl font-bold mt-2">
          Unlock hourly workforce management with{" "}
          <span className="text-gray-300">Scheduling</span>
        </h2>
        <p className="mt-4 text-gray-300">
          Add Scheduling to Time & Attendance and build fully compliant schedules that meet your business's needs.
        </p>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center">
            ✅ <span className="ml-2">Manage shifts and track attendance in real time</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Ensure schedules are compliant with labor laws</span>
          </li>
          <li className="flex items-center">
            ✅ <span className="ml-2">Minimize overtime in your schedules</span>
          </li>
        </ul>
        <button className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg">Learn more</button>
      </div>
 
      {/* Right Section - Images */}
      <div className="md:w-1/2 p-6 flex justify-center items-center">
        <div className="relative flex">
          <img
            src={logo23} // Replace with actual image
            alt="Scheduling UI"
            className="  w-full"
          />
         
        </div>
      </div>
    </div>
 
    <div className="w-full flex flex-col items-center text-center bg-[#f5ede3] py-16 px-6">
      {/* Text Section */}
      <h4 className="text-sm uppercase tracking-wide text-gray-500">Custom Reports</h4>
      <h2 className="text-3xl font-bold mt-2">
        Create and customize any report imaginable
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Practio's powerful, easy-to-use reporting engine gives your team the
        insight they need to make smart staffing decisions and provide detailed
        audit logs for compliance purposes.
      </p>
 
      {/* Image Section */}
      <div className="mt-10 w-full flex justify-center">
        <img
          src="https://i.pinimg.com/736x/a3/81/fd/a381fd4cb1a7ded90f3c041e7612339d.jpg" // Replace with actual image
          alt="Compensation Report"
          className="rounded-lg shadow-lg max-w-3xl"
        />
      </div>
    </div>
 
    <div className="w-full  flex flex-col md:flex-row items-center justify-between bg-[#f5ede3]  py-16 px-6 md:px-16">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-left ml-40">
        <h4 className="text-sm uppercase tracking-wide text-gray-500">Mobile App</h4>
        <h2 className="text-3xl font-bold mt-2">
          Purpose built for a workforce that’s on-the-go
        </h2>
        <p className="mt-4 text-gray-600 max-w-lg">
          Practio's mobile app ensures your workforce can do everything they
          need to on their phone. Whether it’s to access their paycheck, take a
          training course, clock-in and log hours, submit PTO, or review their
          benefits, our mobile app is tailor-made for your on-the-go workforce.
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
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600"
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
 
export default Construction;