import React, { useState } from "react";
import { motion } from "framer-motion";
import logo4 from '../components/Practio logo.png';
import GridBackground from "./GridBackground";
 
export default function PricingPage() {
 
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
 
  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
 
  // Handle form submission
  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email is required!");
    } else if (!validateEmail(email)) {
      setError("Enter a valid email address!");
    } else {
      setError("");
      // alert(`Demo scheduled for: ${email}`);
    }
  };
 
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Can I buy each product separately?",
      answer:
        "Each HR, Finance and IT product (e.g., Payroll, Expenses, Benefits, Device Management) can be purchased separately—alongside the core, required Practio Unity Platform—so you can create just the right plan for you.",
    },
    {
      question: "How does Practio pricing work?",
      answer: "Practio pricing is based on the services you choose. Contact us for a custom quote.",
    },
    {
      question: "We're currently using another provider for payroll, but I love the ease of Practio. How painful will it be to make the switch?",
      answer: "Switching to Practio is seamless, with automated data migration and guided setup.",
    },
    {
      question: "Does Practio offer Partner pricing?",
      answer: "Yes, we have partner pricing options available. Contact sales for more information.",
    },
    {
      question: "How does Practio's pricing compare to similar services?",
      answer: "Trick question—there’s no service like Practio! Practio is the only service that allows you to unify HR, Finance and IT. That said, each Practio bundle is competitive with more narrowly-focused competitors’ pricing.",
    },
  ];
 
  const modules = [
    {
      title: "User Authentication",
      description: "Secure login & role-based access control.",
      features: ["Multi-factor Authentication", "OAuth & SSO", "User Permissions"],
      icon: "🔐",
    },
    {
      title: "Employee Management",
      description: "Centralized employee records & profiles.",
      features: ["Org Chart", "Role Management", "Performance Tracking"],
      icon: "👥",
    },
    {
      title: "Self-Service",
      description: "Empower employees with self-service tools.",
      features: ["Profile Update", "Request Management", "Personal Dashboard"],
      icon: "📋",
    },
    {
      title: "Recruiting",
      description: "Streamline hiring & applicant tracking.",
      features: ["Job Posting", "Resume Parsing", "Interview Scheduling"],
      icon: "📄",
    },
    {
      title: "Timesheet",
      description: "Track employee work hours & shifts.",
      features: ["Clock-in/out", "Approval Workflow", "Automated Reports"],
      icon: "⏳",
    },
    {
      title: "Project Management",
      description: "Manage projects, tasks & deadlines.",
      features: ["Task Assignment", "Progress Tracking", "Team Collaboration"],
      icon: "📊",
    },
    {
      title: "Travel & Expense",
      description: "Automate travel requests & expense claims.",
      features: ["Reimbursements", "Policy Compliance", "Expense Reports"],
      icon: "✈️",
    },
    {
      title: "Payroll",
      description: "Automate payroll & tax calculations.",
      features: ["Salary Processing", "Payslips", "Tax Compliance"],
      icon: "💰",
    },
    {
      title: "Leave Management",
      description: "Manage employee leaves efficiently.",
      features: ["Leave Requests", "Approval Workflow", "Balance Tracking"],
      icon: "🏝️",
    },
    {
      title: "Wellness",
      description: "Enhance employee well-being with wellness programs.",
      features: ["Mental Health Support", "Fitness Programs", "Wellness Challenges"],
      icon:"❤️",
    },
  ];
  return (
    <div>
      {/* Header Section with Dark Background */}
      <div className="bg-[#3c1f3f] text-white z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
          <h2 className="text-4xl font-bold mb-4">
            Flexible & competitive pricing <br /> that fits your business needs
          </h2>
          <p className="mb-6 max-w-lg">
            Tell us which services you'd like to use, and we'll send a custom quote.
          </p>
          {/* <button className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600">
            Get a Free Quote
          </button> */}
          <a
                href="/freequote"
                className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] z-10 font-medium"
              >
                Get a Free Quote
              </a>
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
 
      {/* Rest of the page with Gray Background */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 ">
          <h2 className="text-center text-3xl font-bold mb-10">The Workforce Platform</h2>
 
          {/* Main Feature Card */}
          <div className="bg-white text-black shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-8 border-t-2 border-yellow-500">
            {/* Left Section */}
            <div className="md:w-1/3">
              <div className="flex items-center gap-2">
                <div className="bg-[#3C1F3F] text-white p-3 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center ">
  <img src={logo4} alt="Logo" className="w-10 h-10" />
</div>                </div>
                <h3 className="text-2xl font-bold">Practio Platform</h3>
              </div>
              <p className="text-gray-600 mt-2">
                Manage and automate all of your workforce operations in one place—onboarding, offboarding, and everything in between.
              </p>
              {/* <a href="#" className="text-yellow-500 font-semibold mt-3 inline-block">
                Learn more →
              </a> */}
            </div>
 
            {/* Right Section (Feature List + Compare Plans Button) */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Unified Workforce Directory",
                "Global Workforce Analytics & Dashboards",
                "Onboarding/Offboarding Automation",
                "Advanced Admin & Field Privileges",
                "Compensation Bands",
                "Practio Mobile App",
                "Advanced Policy Management",
                "Dynamic Permissions & Approvals Management",
                "Advanced Document Management",
                "Compliance 360",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
 
              {/* Compare Plans Button Below Compliance 360 */}
              <div className="col-span-1 md:col-span-2 flex justify-left mt-4">
                <a href="#" className="text-black font-semibold border-b-2 border-yellow-500 pb-1">
                  Compare Plans
                </a>
              </div>
            </div>
          </div>
        </div>
 
       
 
              {/* Feature Cards Section */}
 
<div className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Practio HRMS Features</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md  border-gray-200 border-t-2 border-yellow-400">
              <div className="flex items-center space-x-3 mb-4 ">
              <div className="w-12 h-12 flex items-center justify-center bg-[#3C1F3F] rectangle-full ">
  <span className="text-3xl">{module.icon}</span>
</div>
                <h3 className="text-xl font-semibold">{module.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                {module.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
 
      {/* <div className="min-h-screen bg-[#3c1f3f] flex flex-col items-center justify-center p-6">
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
    <motion.div
      className="text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6">
        Employees Get<br />More Done with<br />Practio
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Increase savings, automate busy work, and make better decisions by managing payroll, HR, IT, and spend in one place.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#F5B638] w-full sm:w-80"
        />
        <button className="bg-[#F5B638] text-black px-6 py-3 rounded-md hover:bg-[#E5A628] font-medium whitespace-nowrap">
          See Practio
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        By clicking "See Practio," you agree to the use of your data in accordance with Practio's Privacy Notice.
      </p>
    </motion.div>
  </div>
</div> */}
<div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-[#3C1F3F] text-white w-full max-w-6xl rounded-lg py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Employees Get More <center> Done with Practio</center>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Increase savings, automate busy work, and make better decisions by managing <center>
            payroll, HR, IT, and spend in one place.</center>
          </p>
 
          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="w-full sm:w-80">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your email?"
                className={`px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-400 border w-full focus:outline-none
                ${error ? "border-red-500 focus:border-red-500" : "border-gray-500 focus:border-yellow-400"}`}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#F5B638] text-black px-6 py-3 rounded-md hover:bg-[#E5A628] font-medium whitespace-nowrap"
            >
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      {/* Header Text */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
        Practio helps eliminate the busywork <br />
        so you can focus on the big picture.
      </h2>
 
      {/* Testimonial Container */}
      <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden">
        {/* Left Side - Quote & Stats */}
        <div className="p-8 w-full lg:w-2/3">
          <blockquote className="text-gray-700 text-lg">
            <span className="text-5xl text-gray-500 font-serif leading-none">“</span>
            "Practio helps minimize the administrative work on the HR and IT side, which means I can spend more time on what I enjoy most: helping clients solve problems with innovative strategies".
            {/* <span className="text-5xl text-gray-500 font-serif leading-none">”</span> */}
          </blockquote>
 
          {/* Author */}
          <p className="mt-4 text-gray-800 font-bold">K Praveen Kumar</p>
          <p className="text-gray-600 text-sm">Managing Director at Practio</p>
 
          {/* Statistics */}
          <div className="mt-6 flex gap-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">10x</p>
              <p className="text-gray-600 text-sm">faster technology onboarding</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-gray-600 text-sm">admin hours saved per month</p>
            </div>
          </div>
 
          {/* Case Study Link */}
          {/* <p className="mt-6">
            <a href="#" className="text-black font-medium border-b-2 border-yellow-500 hover:text-yellow-600">
              Read the case study
            </a>
          </p> */}
        </div>
 
        {/* Right Side - Image */}
        <motion.div
          className="w-full lg:w-1/3 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGpUsv7ggqGzw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725878367693?e=2147483647&v=beta&t=aU_4bP4y_CPOogJgbLvDzynK__L9oMilsEYQKRiLdYo" // Replace with actual image URL
            alt="Testimonial"
            className="w-full h-auto object-cover"
          />
          {/* Name Label Overlay */}
          {/* <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold shadow-md">
            Highnoon
          </div> */}
    </motion.div>
  </div>
</div>
    {/* FAQ Section */}
        <div className="max-w-5xl mx-auto px-6 mt-16">
          <h2 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && <p className="text-gray-600 pb-4">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}