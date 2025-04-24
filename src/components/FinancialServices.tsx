import React from "react";
import logo13 from "../components/logo13.png";
import { TbReportSearch } from "react-icons/tb";
import GridBackground from "./GridBackground";
 
const FinancialServices = () => {
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
           <GridBackground/>
    <div className="flex flex-col items-center justify-center px-12 py-12">
      {/* Main Content Section */}
   
      <div className="flex w-full max-w-6xl items-center">
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-lg uppercase tracking-wide text-gray-300">
          Practio for Financial Services
          </h2>
          <h1 className="text-4xl font-bold leading-tight mt-2">
          Focus on growing your team and clients, not on HR and IT hassles.</h1>
 
          {/* Email Input */}
          <div className="relative flex items-center mt-8 space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#F5B638]"
            />
            <button className="px-6 py-4 bg-[#F5B638] text-black rounded-lg hover:bg-[#E5A628] font-medium">
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
          <img src={logo13} alt="Practio HR Software" className="w-full max-w-lg rounded-lg" />
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
          <p className="text-gray-400">4.9 </p>
        </div>
      </div></div>
       <div className="w-full bg-[#f6f2ec] p-10 flex flex-col items-center text-center">
       {/* Heading Section */}
       <h4 className="text-sm uppercase tracking-wide text-gray-600">Eliminate Busywork</h4>
       <h2 className="text-3xl font-bold mt-2 text-gray-900">
         Effortlessly onboard, pay & manage employees
       </h2>
       <p className="text-gray-600 mt-4 max-w-2xl">
         Doubling your headcount doesn't mean you should be doubling your workload.
         Practio lets you manage all of your people operations in one place.
       </p>
 
       {/* First Section: Payroll Automation */}
       <div className="flex flex-col md:flex-row items-center mt-10 w-full max-w-5xl">
         {/* Left Image Section */}
         <div className="md:w-1/2 bg-[#e8dbcb] p-6 rounded-lg">
           <div className="bg-white shadow-lg rounded-lg p-4">
             <div className="flex items-center space-x-3">
             <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-white font-bold rounded-full">
  P
</div>
               <div>
                 <p className="font-semibold text-black">Pradeep Kumar</p>
                 <p className="text-gray-500 text-sm">Project Manager</p>
               </div>
             </div>
             <div className="mt-4">
               <p className="text-gray-700 font-medium">Net Pay</p>
               <div className="w-full bg-gray-300 h-2 rounded-full mt-2 relative">
                 <div className="bg-green-500 h-2 rounded-full absolute w-[40%]"></div>
                 <div className="bg-yellow-500 h-2 rounded-full absolute left-[40%] w-[20%]"></div>
                 <div className="bg-red-500 h-2 rounded-full absolute left-[60%] w-[40%]"></div>
               </div>
               <div className="flex justify-between text-sm text-gray-600 mt-2">
                 <span>Taxes</span>
                 <span>GRSP</span>
                 <span>Gross Pay</span>
               </div>
             </div>
           </div>
         </div>
 
         {/* Right Text Section */}
         <div className="md:w-1/2   ">
           <h3 className="text-xl font-bold text-gray-900">Payroll that runs itself</h3>
           <p className="text-gray-600 mt-4">
             Practio syncs all your business's HR data with payroll.
             Never manually enter data, like PTO hours, or use a calculator to crunch
             Group RRSP or benefit deductions again.
           </p>
         </div>
       </div>
 
       {/* Second Section: Employee Updates & Device Management */}
       <div className="flex flex-col md:flex-row items-center mt-16 w-full max-w-5xl gap-6">
         {/* Left Section: Employee Updates */}
         <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
           <div className="flex flex-col items-center">
             {/* <img src="https://via.placeholder.com/60" alt="Kelly Martin" className="rounded-full" /> */}
             <h3 className="font-bold text-xl text-grey-900 mt-4">Automatic updates with employee changes</h3>
             <p className="text-gray-600 mt-4"> Exciting new change—like promotion, marriage, or department transfer? Complete changes in minutes, not hours. For example, when an employee is promoted to a manager, Practio can automatically update their permissions in Practio and other work apps based on preconfigured settings for their new role.</p>
             
           </div>
         
         </div>
         
         {/* Right Section: Device Management */}
         <div className="md:w-1/2 bg-white shadow-lg p-6 rounded-lg">
           <h3 className="text-xl font-bold text-gray-900">Effortless device management</h3>
           <p className="text-gray-600 mt-4">
           Use one integrated solution to securely manage your employees’ computers, monitors, and more. Practio lets you set up, ship, and monitor devices from your own computer. Plus, for remote employees, we efficiently manage device retrieval when they offboard and securely store unused devices.                      </p>
           
         </div>
       </div>
     </div>
 
     <div className="w-full flex flex-col md:flex-row bg-[#3C1F3F]  text-white p-10 rounded-lg">
      {/* Left Section */}
      <div className="md:w-1/2 p-6 ml-40">
        <h4 className="text-sm uppercase tracking-wide text-gray-400">Onboarding Automation</h4>
        <h2 className="text-3xl font-bold mt-2">Onboard new hires in 90 seconds</h2>
        <p className="mt-4 text-gray-300">
          With new hires starting every week, onboarding is a daily task for
          fast-growing financial firms. practio makes it incredibly easy—
          we’ll automatically add new hires to payroll, enroll them in benefits,
          and set them up in the right systems like GSuite, Slack, or Anaplan.
        </p>
      </div>
 
      {/* Right Section */}
      <div className="md:w-1/2 p-6 flex flex-col space-y-4">
        <div className="flex items-center space-x-3">
          <span>📄</span>
          <p>Send offer letter & new hire paperwork</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>🛡</span>
          <p>Run background check</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>💰</span>
          <p>Add to payroll</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>❤️</span>
          <p>Enroll in eligible benefits</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>💻</span>
          <p>Order & ship work computer</p>
        </div>
        <div className="flex items-center space-x-3">
          <span>🖥</span>
          <p>Set up third-party apps</p>
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
 
      <div className="bg-[#3C1F3F] mt-5 text-white py-18 px-8">
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
 
export default FinancialServices;