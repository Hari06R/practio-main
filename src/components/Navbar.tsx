// // // import React, { useState } from 'react';
// // // import {
// // //   ChevronDown,
// // //   Building2,
// // //   Globe2,
// // //   BookOpen,
// // //   CreditCard,
// // //   Users2,
// // //   Hourglass,
// // //   Workflow,
// // //   BarChart3,
// // //   KeyRound,
// // //   Boxes,
// // //   Wrench,
// // //   Menu, 
// // //   X      
// // // } from 'lucide-react';
// // // import logo from './Practio logo.png';

// // // interface NavItem {
// // //   title: string;
// // //   sections?: {
// // //     title: string;
// // //     items: {
// // //       name: string;
// // //       description: string;
// // //       icon?: React.ReactNode;
// // //       image?: string;
// // //       route?: string; 
// // //     }[];
// // //   }[];
// // //   leftPanel?: {
// // //     title: string;
// // //     description: string;
// // //     image?: string;
// // //     learnMoreLink?: string;
// // //   };
// // // }

// // // // Your existing navItems object
// // // const navItems: Record<string, NavItem> = {
// // //   Products: {
// // //     leftPanel: {
// // //       title: 'Practio HCM',
// // //       description: 'Drive business outcomes with the #1 rated HR solution.',
// // //       learnMoreLink: '/products/hcm',
// // //     },
// // //     sections: [
// // //       {
// // //         title: 'HR MANAGEMENT',
// // //         items: [
// // //           {
// // //             name: '',
// // //             description: 'Manage employee data',
// // //             icon: <Users2 className="text-white" />,
// // //             route: '/hris'
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         title:'WORKFORCE MANAGEMENT',
// // //         items:[
// // //           {
// // //             name: 'Time & Attendance',
// // //             description: 'Automate time tracking',
// // //             icon: <Hourglass className="text-white" />,
// // //             route: '/time-and-attendance'
// // //           }
// // //         ]
// // //       },
// // //       {
// // //         title: 'TALENT',
// // //         items: [
// // //           {
// // //             name: 'Recruiting',
// // //             description: 'Recruit better at every step',
// // //             icon: <Users2 className="text-white" />,
// // //           },
// // //           {
// // //             name: 'Talent Signal',
// // //             description: 'Better support new hires',
// // //             icon: <Workflow className="text-white" />,
// // //           },
// // //           {
// // //             name: 'Performance Management',
// // //             description: 'Drive employee growth',
// // //             icon: <BarChart3 className="text-white" />,
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         title: 'BENEFITS',
// // //         items: [
// // //           {
// // //             name: 'Benefits Administration',
// // //             description: 'Manage employee benefits',
// // //             icon: <CreditCard className="text-white" />,
// // //           },
// // //           {
// // //             name: 'PEO',
// // //             description: 'Access enterprise-grade benefits',
// // //             icon: <Building2 className="text-white" />,
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // //   Platform: {
// // //     leftPanel: {
// // //       title: 'Platform',
// // //       description: 'Meet the platform tailored to your business.',
// // //       learnMoreLink: '/platform',
// // //     },
// // //     sections: [
// // //       {
// // //         title: 'CORE CAPABILITIES',
// // //         items: [
// // //           {
// // //             name: 'Workflow Studio',
// // //             description: 'Trigger advanced workflows using any data',
// // //             icon: <Workflow className="text-white" />,
// // //           },
// // //           {
// // //             name: 'Analytics',
// // //             description: 'Report on anything across your apps',
// // //             icon: <BarChart3 className="text-white" />,
// // //           },
// // //           {
// // //             name: 'Policies',
// // //             description: 'Enforce company rules automatically',
// // //             icon: <KeyRound className="text-white" />,
// // //           },
// // //           {
// // //             name: 'Permissions',
// // //             description: 'Grant everyone the right access',
// // //             icon: <KeyRound className="text-white" />,
// // //           },
// // //           {
// // //             name: 'Integrations',
// // //             description: 'Push third-party apps to perform better',
// // //             icon: <Boxes className="text-white" />,
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // //   Solutions: {
// // //     sections: [
// // //       {
// // //         title: 'INDUSTRIES',
// // //         items: [
// // //           { name: 'Construction', description: 'Solutions for construction firms' },
// // //           { name: 'Financial Services', description: 'For financial institutions' },
// // //           { name: 'Healthcare', description: 'Healthcare industry solutions' },
// // //           { name: 'Manufacturing', description: 'Manufacturing sector tools' },
// // //         ],
// // //       },
// // //       {
// // //         title: 'COMPANY SIZE',
// // //         items: [
// // //           { name: 'Startups', description: 'Perfect for new companies' },
// // //           { name: 'Small Business', description: '1-50 employees' },
// // //           { name: 'Mid-Market', description: '51-999 employees' },
// // //           { name: 'Enterprise', description: '1000+ employees' },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // //   Global: {
// // //     sections: [
// // //       {
// // //         title: 'PRODUCTS',
// // //         items: [
// // //           { name: 'Global Payroll', description: 'Pay employees anywhere' },
// // //           { name: 'Global HRIS', description: 'Run global HR in one place' },
// // //           { name: 'Global Benefits', description: 'Provide benefits worldwide' },
// // //         ],
// // //       },
// // //       {
// // //         title: 'HIRE GLOBALLY',
// // //         items: [
// // //           { name: 'United Kingdom', description: 'Hire in the UK' },
// // //           { name: 'Australia', description: 'Hire in Australia' },
// // //           { name: 'Canada', description: 'Hire in Canada' },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // //   Resources: {
// // //     sections: [
// // //       {
// // //         title: 'RESOURCE LIBRARY',
// // //         items: [
// // //           { name: 'HR Leaders', description: 'Resources for HR professionals' },
// // //           { name: 'IT Leaders', description: 'Resources for IT professionals' },
// // //           { name: 'Finance Leaders', description: 'Resources for finance teams' },
// // //           { name: 'Global', description: 'International business resources' },
// // //         ],
// // //       },
// // //       {
// // //         title: 'FEATURED',
// // //         items: [
// // //           {
// // //             name: 'The state of employment',
// // //             description: 'Small and mid-sized companies',
// // //           },
// // //           {
// // //             name: 'HR Guide',
// // //             description: 'Foundations for Actionable AI',
// // //           },
// // //           { name: 'The state of spend', description: 'Perception vs. reality' },
// // //           {
// // //             name: 'Automate onboarding',
// // //             description: 'And offboarding processes',
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // //   Pricing: {
// // //     sections: [],
// // //     leftPanel: {
// // //       title: 'Pricing',
// // //       description: 'Discover our pricing plans.',
// // //       learnMoreLink: '/pricing',
// // //     },
// // //   },
// // // };

// // // function Navbar() {
// // //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

// // //   // State to handle the mobile menu toggle
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // //   const handleDropdownClick = (title: string) => {
// // //     if (activeDropdown === title) {
// // //       setActiveDropdown(null);
// // //     } else {
// // //       setActiveDropdown(title);
// // //     }
// // //   };

// // //   return (
// // //     // Make the navbar fixed at top and full width
// // //     <div className="fixed top-0 left-0 right-0 z-50 bg-[#3c1f3f] text-white">
// // //       <nav className="w-full border-b border-gray-200">
// // //         <div className="px-4 sm:px-6 lg:px-8 w-full">
// // //           {/* Top section: logo and hamburger/desktop nav */}
// // //           <div className="flex justify-between h-16 items-center">
// // //             {/* Logo */}
// // //             <div className="flex-shrink-0 flex items-center w-1/6">
// // //               <a href="/">
// // //               <img src={logo} alt="logo" className="w-full h-auto" />
// // //               </a>
// // //             </div>

// // //             {/* Desktop Navigation Items (hidden on mobile) */}
// // //             <div className="hidden md:flex items-center space-x-1">
// // //               {Object.entries(navItems).map(([title]) => (
// // //                 <div key={title} className="relative">
// // //                   <button
// // //                     onClick={() => handleDropdownClick(title)}
// // //                     className="flex items-center space-x-1 text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                   >
// // //                     <span>{title}</span>
// // //                     <ChevronDown
// // //                       className={`w-4 h-4 transition-transform duration-200 ${
// // //                         activeDropdown === title ? 'rotate-180' : ''
// // //                       }`}
// // //                     />
// // //                   </button>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Right side */}
// // //             <div className="hidden md:flex items-center space-x-4">
// // //                 <a href="/login" className="text-white-600 hover:text-blue-900 font-medium">
// // //                 Login
// // //                 </a>
// // //                 <a href="/seePractio" className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium">
// // //                 See Practio
// // //                 </a>
// // //             </div>

// // //             {/* Hamburger menu (visible on mobile only) */}
// // //             <div className="md:hidden flex items-center">
// // //               <button
// // //               onClick={() => {
// // //                 if (isMobileMenuOpen) {
// // //                 setActiveDropdown(null); // Close any open dropdowns
// // //                 }
// // //                 setIsMobileMenuOpen(!isMobileMenuOpen);
// // //                 setActiveDropdown(null); 
// // //               }}
// // //               className="text-white-700 hover:text-white focus:outline-none"
// // //               >
// // //               {isMobileMenuOpen ? (
// // //                 <X className="h-6 w-6" />
// // //               ) : (
// // //                 <Menu className="h-6 w-6" />
// // //               )}
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Mega Menu Dropdown for desktop view */}
// // //         {activeDropdown && (
// // //             <div className="absolute w-full bg-white shadow-lg z-50 border-t border-gray-200 h-[600px] md:h-[450px] overflow-y-auto">
// // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //               <div className="flex">
// // //               {/* Left Panel */}
// // //               {navItems[activeDropdown].leftPanel && (
// // //               <div className="w-[20%] pr-4 border-r border-gray-200">
// // //                 <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
// // //                 {navItems[activeDropdown].leftPanel.title}
// // //                 </h2>
// // //                 <p className="text-gray-600 mb-4 text-sm md:text-base">
// // //                 {navItems[activeDropdown].leftPanel.description}
// // //                 </p>
// // //               <a
// // //                 href={navItems[activeDropdown].leftPanel.learnMoreLink}
// // //                 className="text-[#F5B638] hover:text-[#E5A628] font-medium"
// // //               >
// // //                 Learn more
// // //               </a>
// // //               </div>
// // //               )}

// // //               {/* Main Content */}
// // //               <div
// // //               className={`flex ${
// // //               navItems[activeDropdown].leftPanel ? ' pl-2' : 'w-full'
// // //               } flex-cols-${
// // //               navItems[activeDropdown].sections?.length || 1
// // //               } gap-1`}
// // //               >
// // //               {navItems[activeDropdown].sections?.map((section, idx) => (
// // //               <div key={idx}>
// // //                 <h3 className="text-sm w-10% font-semibold text-gray-500 uppercase tracking-wider mb-4">
// // //                 {section.title}
// // //                 </h3>
// // //                 <div className="space-y-4">
// // //                 {section.items.map((item, itemIdx) => (
// // //                 <a
// // //                 key={itemIdx}
// // //                 href={item.route || "#"}
// // //                 className="group flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
// // //                 >
// // //                 {item.icon && (
// // //                   <div className="mr-4 p-2 bg-[#333] rounded-lg">
// // //                   {item.icon}
// // //                   </div>
// // //                 )}
// // //                 <div>
// // //                   <p className="text-base font-medium text-gray-900 group-hover:text-[#F5B638]">
// // //                   {item.name}
// // //                   </p>
// // //                   <p className="mt-1 text-sm text-gray-500">
// // //                   {item.description}
// // //                   </p>
// // //                 </div>
// // //                 </a>
// // //                 ))}
// // //                 </div>
// // //               </div>
// // //               ))}
// // //               </div>
// // //               </div>
// // //             </div>
// // //             </div>
// // //         )}

// // //         {/* Mobile Menu (collapsible) */}
// // //         {isMobileMenuOpen && (
// // //           <div className="md:hidden bg-white border-t border-gray-200  px-4 py-4">
// // //             {/* Right side buttons on mobile */}
// // //             <div className="flex flex-col space-y-2 mb-4">
// // //               <button className="text-gray-600 hover:text-gray-900 font-medium text-left">
// // //                 Login
// // //               </button>
// // //               <button className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium text-left">
// // //                 See Practio
// // //               </button>
// // //             </div>

// // //             {/* Mobile nav items */}
// // //             <ul className="flex flex-col space-y-2">
// // //               {Object.entries(navItems).map(([title]) => (
// // //                 <li key={title} className="relative">
// // //                   <button
// // //                     onClick={() => handleDropdownClick(title)}
// // //                     className="w-full flex justify-between items-center text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// // //                   >
// // //                     <span>{title}</span>
// // //                     <ChevronDown
// // //                       className={`w-4 h-4 transition-transform duration-200 ${
// // //                         activeDropdown === title ? 'rotate-180' : ''
// // //                       }`}
// // //                     />
// // //                   </button>

// // //                   {/* If dropdown is active, show the nested items (simplified for mobile) */}
// // //                   {activeDropdown === title && (
// // //                     <div className="mt-2 bg-gray-50 border rounded p-2">
// // //                       {/* Left panel on mobile (if any) */}
// // //                       {navItems[title].leftPanel && (
// // //                         <div className="mb-4">
// // //                           <h2 className="text-lg font-semibold text-gray-900">
// // //                             {navItems[title].leftPanel.title}
// // //                           </h2>
// // //                           <p className="text-sm text-gray-600">
// // //                             {navItems[title].leftPanel.description}
// // //                           </p>
// // //                           <a
// // //                             href={navItems[title].leftPanel.learnMoreLink}
// // //                             className="text-[#F5B638] hover:text-[#E5A628] font-medium text-sm"
// // //                           >
// // //                             Learn more
// // //                           </a>
// // //                         </div>
// // //                       )}

// // //                       {/* Sections for mobile */}
// // //                       {navItems[title].sections?.map((section, idx) => (
// // //                         <div key={idx} className="mb-2">
// // //                           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
// // //                             {section.title}
// // //                           </h3>
// // //                           <div className="space-y-2">
// // //                             {section.items.map((item, itemIdx) => (
// // //                               <a
// // //                                 key={itemIdx}
// // //                                 href="#"
// // //                                 className="block px-2 py-1 rounded hover:bg-gray-100"
// // //                               >
// // //                                 <span className="font-medium text-gray-900">
// // //                                   {item.name}
// // //                                 </span>
// // //                                 <p className="text-xs text-gray-500">
// // //                                   {item.description}
// // //                                 </p>
// // //                               </a>
// // //                             ))}
// // //                           </div>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}
// // //       </nav>
// // //     </div>
// // //   );
// // // }

// // // export default Navbar;



// // import React, { useState } from 'react';
// // import {
// //   ChevronDown,
// //   Building2,
// //   Globe2,
// //   BookOpen,
// //   CreditCard,
// //   Users2,
// //   Hourglass,
// //   Workflow,
// //   BarChart3,
// //   KeyRound,
// //   Boxes,
// //   Wrench,
// //   Menu,
// //   ReceiptIndianRupee ,
// //   X      
// // } from 'lucide-react';
// // import logo from './Practio logo.png';
// // // import { Route } from 'react-router-dom';

// // interface NavItem {
// //   title: string;
// //   sections?: {
// //     title: string;
// //     items: {
// //       name: string;
// //       description: string;
// //       icon?: React.ReactNode;
// //       image?: string;
// //       route?: string;
// //     }[];
// //   }[];
// //   leftPanel?: {
// //     title: string;
// //     description: string;
// //     image?: string;
// //     learnMoreLink?: string;
// //   };
// // }

// // // Your existing navItems object
// // const navItems: Record<string, NavItem> = {
// //   Products: {
// //     leftPanel: {
// //       title: 'Practio HCM',
// //       description: 'Drive business outcomes with the #1 rated HR solution.',
// //       learnMoreLink: '/products/hcm',
// //     },
// //     sections: [
// //       {
// //         title: 'HR MANAGEMENT',
// //         items: [
// //           {
// //             name: 'HRIS',
// //             description: 'Manage employee data',
// //             icon: <Users2 className="text-white" />,
// //             route: '/hris'
// //           },
// //           {
// //             name: 'Payroll',
// //             description: 'Manage employee Payroll',
// //             icon: <ReceiptIndianRupee  className="text-white" />,
// //             route: '/payroll'
// //           },
// //         ],
// //       },
// //       {
// //         title: 'WORKFORCE MANAGEMENT',
// //         items: [
// //           {
// //             name: 'Time & Attendance',
// //             description: 'Automate time tracking',
// //             icon: <Hourglass className="text-white" />,
// //             route: '/time-and-attendance'
// //           }
// //         ]
// //       },
// //       {
// //         title: 'TALENT',
// //         items: [
// //           {
// //             name: 'Recruiting',
// //             description: 'Recruit better at every step',
// //             icon: <Users2 className="text-white" />,
// //             route:'/recruiting'
// //           },
// //           {
// //             name: 'Talent Signal',
// //             description: 'Better support new hires',
// //             icon: <Workflow className="text-white" />,
// //             route:'/talent-signal'
// //           },
// //           {
// //             name: 'Performance Management',
// //             description: 'Drive employee growth',
// //             icon: <BarChart3 className="text-white" />,
// //             route:'/performance'
// //           },
// //         ],
// //       },
// //       {
// //         title: 'BENEFITS',
// //         items: [
// //           {
// //             name: 'Benefits Administration',
// //             description: 'Manage employee benefits',
// //             icon: <CreditCard className="text-white" />,
// //             route:'/benefits'
// //           },
// //           {
// //             name: 'Expense Management',
// //             description: 'Access all your expenses at one place',
// //             icon: <Building2 className="text-white" />,
// //             route:'/expense'
// //           },
// //         ],
// //       },
// //     ],
// //   },
// //   Platform: {
// //     leftPanel: {
// //       title: 'Platform',
// //       description: 'Meet the platform tailored to your business.',
// //       learnMoreLink: '/platform',
// //     },
// //     sections: [
// //       {
// //         title: 'CORE CAPABILITIES',
// //         items: [
// //           {
// //             name: 'Workflow Studio',
// //             description: 'Trigger advanced workflows using any data',
// //             icon: <Workflow className="text-white" />,
// //             route:'/task-management'
// //           },
// //           {
// //             name: 'Analytics',
// //             description: 'Report on anything across your apps',
// //             icon: <BarChart3 className="text-white" />,
// //             route:'/analytics'
// //           },
// //           {
// //             name: 'Policies',
// //             description: 'Enforce company rules automatically',
// //             icon: <KeyRound className="text-white" />,
// //             route:'/policies'
// //           },
// //           {
// //             name: 'Permissions',
// //             description: 'Grant everyone the right access',
// //             icon: <KeyRound className="text-white" />,
// //             route:'/permissions' 
// //           },
// //           // {
// //           //   name: 'Integrations',
// //           //   description: 'Push third-party apps to perform better',
// //           //   icon: <Boxes className="text-white" />,
// //           // },
// //         ],
// //       },
// //     ],
// //   },
// //   Solutions: {
// //     sections: [
// //       {
// //         title: 'INDUSTRIES',
// //         items: [
// //           { name: 'Construction', description: 'Solutions for construction firms',route:'/construction' },
// //           { name: 'Financial Services', description: 'For financial institutions',route:'/finance' },
// //           { name: 'Healthcare', description: 'Healthcare industry solutions',route:'/health-care' },
// //           { name: 'Manufacturing', description: 'Manufacturing sector tools',route:'/construction' },
// //         ],
// //       },
// //       {
// //         title: 'COMPANY SIZE',
// //         items: [
// //           { name: 'Startups', description: 'Perfect for new companies',route:'/startup' },
// //           { name: 'Small Business', description: '1-50 employees',route:'/small-business' },
// //           { name: 'Mid-Market', description: '51-999 employees',route:'/medium-business' },
// //           { name: 'Enterprise', description: '1000+ employees',route:'/enterprise' },
// //         ],
// //       },
// //     ],
// //   },
// //   // Global: {
// //   //   sections: [
// //   //     {
// //   //       title: 'PRODUCTS',
// //   //       items: [
// //   //         { name: 'Global Payroll', description: 'Pay employees anywhere' },
// //   //         { name: 'Global HRIS', description: 'Run global HR in one place' },
// //   //         { name: 'Global Benefits', description: 'Provide benefits worldwide' },
// //   //       ],
// //   //     },
// //   //     {
// //   //       title: 'HIRE GLOBALLY',
// //   //       items: [
// //   //         { name: 'United Kingdom', description: 'Hire in the UK' },
// //   //         { name: 'Australia', description: 'Hire in Australia' },
// //   //         { name: 'Canada', description: 'Hire in Canada' },
// //   //       ],
// //   //     },
// //   //   ],
// //   // },
// //   // Resources: {
// //   //   sections: [
// //   //     {
// //   //       title: 'RESOURCE LIBRARY',
// //   //       items: [
// //   //         { name: 'HR Leaders', description: 'Resources for HR professionals' },
// //   //         { name: 'IT Leaders', description: 'Resources for IT professionals' },
// //   //         { name: 'Finance Leaders', description: 'Resources for finance teams' },
// //   //         { name: 'Global', description: 'International business resources' },
// //   //       ],
// //   //     },
// //   //     {
// //   //       title: 'FEATURED',
// //   //       items: [
// //   //         {
// //   //           name: 'The state of employment',
// //   //           description: 'Small and mid-sized companies',
// //   //         },
// //   //         {
// //   //           name: 'HR Guide',
// //   //           description: 'Foundations for Actionable AI',
// //   //         },
// //   //         { name: 'The state of spend', description: 'Perception vs. reality' },
// //   //         {
// //   //           name: 'Automate onboarding',
// //   //           description: 'And offboarding processes',
// //   //         },
// //   //       ],
// //   //     },
// //   //   ],
// //   // },
// //   // Pricing will be rendered as a direct link.
// //   Pricing: {
// //     sections: [],
// //     leftPanel: {
// //       title: 'Pricing',
// //       description: 'Discover our pricing plans.',
// //       learnMoreLink: '/pricing',
// //     },
// //   },
// // };

// // function Navbar() {
// //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const handleDropdownClick = (title: string) => {
// //     if (activeDropdown === title) {
// //       setActiveDropdown(null);
// //     } else {
// //       setActiveDropdown(title);
// //     }
// //   };

// //   return (
// //     <div className="fixed top-0 left-0 right-0 z-50 bg-[#3c1f3f] text-white">
// //       <nav className="w-full border-b border-gray-200">
// //         <div className="px-4 sm:px-6 lg:px-8 w-full">
// //           {/* Top section: logo and hamburger/desktop nav */}
// //           <div className="flex justify-between h-16 items-center">
// //             {/* Logo */}
// //             <div className="flex-shrink-0 flex items-center w-1/6">
// //               <a href="/">
// //                 <img src={logo} alt="logo" className="w-full h-auto" />
// //               </a>
// //             </div>

// //             {/* Desktop Navigation Items (hidden on mobile) */}
// //             <div className="hidden md:flex items-center space-x-1">
// //               {Object.entries(navItems).map(([title, item]) => (
// //                 <div key={title} className="relative">
// //                   {title === 'Pricing' ? (
// //                     <a
// //                       href="/pricing"
// //                       className="flex items-center space-x-1 text-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// //                     >
// //                       <span>{title}</span>
// //                     </a>
// //                   ) : !item.sections || item.sections.length === 0 ? (
// //                     <a
// //                       href={item.leftPanel?.learnMoreLink || "#"}
// //                       className="flex items-center space-x-1 text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// //                     >
// //                       <span>{title}</span>
// //                     </a>
// //                   ) : (
// //                     <button
// //                       onClick={() => handleDropdownClick(title)}
// //                       className="flex items-center space-x-1 text-white-700 hover:text-Black px-3 py-2 rounded-md text-sm font-medium"
// //                     >
// //                       <span>{title}</span>
// //                       <ChevronDown
// //                         className={`w-4 h-4 transition-transform duration-200 ${
// //                           activeDropdown === title ? 'rotate-180' : ''
// //                         }`}
// //                       />
// //                     </button>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Right side */}
// //             <div className="hidden md:flex items-center space-x-4">
// //               <a href="/login" className="text-white-600 hover:text-white hover:font-bold font-medium">
// //                 Login
// //               </a>
// //               <a
// //                 href="/seePractio"
// //                 className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium"
// //               >
// //                 See Practio
// //               </a>
// //             </div>

// //             {/* Hamburger menu (visible on mobile only) */}
// //             <div className="md:hidden flex items-center">
// //               <button
// //                 onClick={() => {
// //                   if (isMobileMenuOpen) {
// //                     setActiveDropdown(null);
// //                   }
// //                   setIsMobileMenuOpen(!isMobileMenuOpen);
// //                   setActiveDropdown(null);
// //                 }}
// //                 className="text-white-700 hover:text-white focus:outline-none"
// //               >
// //                 {isMobileMenuOpen ? (
// //                   <X className="h-6 w-6" />
// //                 ) : (
// //                   <Menu className="h-6 w-6" />
// //                 )}
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mega Menu Dropdown for desktop view */}
// //         {activeDropdown &&
// //           navItems[activeDropdown].sections &&
// //           navItems[activeDropdown].sections.length > 0 && (
// //             <div className="absolute w-full bg-white shadow-lg z-50 border-t border-gray-200 h-[600px] md:h-[450px] overflow-y-auto">
// //               <div className="px-4 sm:px-6 lg:px-8 py-8">
// //                 <div className="flex">
// //                   {/* Left Panel */}
// //                   {navItems[activeDropdown].leftPanel && (
// //                     <div className="w-[20%] pr-4 border-r border-gray-200">
// //                       <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
// //                         {navItems[activeDropdown].leftPanel.title}
// //                       </h2>
// //                       <p className="text-gray-600 mb-4 text-sm md:text-base">
// //                         {navItems[activeDropdown].leftPanel.description}
// //                       </p>
// //                       {/* <a
// //                         href={navItems[activeDropdown].leftPanel.learnMoreLink}
// //                         className="text-[#F5B638] hover:text-[#E5A628] font-medium"
// //                       >
// //                         Learn more
// //                       </a> */}
// //                     </div>
// //                   )}

// //                   {/* Main Content */}
// //                   <div className={`flex ${navItems[activeDropdown].leftPanel ? 'pl-2' : 'w-full'} gap-1`}>
// //                     {navItems[activeDropdown].sections.map((section, idx) => (
// //                       <div key={idx}>
// //                         <h3 className="text-sm w-10% font-semibold text-gray-500 uppercase tracking-wider mb-4">
// //                           {section.title}
// //                         </h3>
// //                         <div className="space-y-1">
// //                           {section.items.map((item, itemIdx) => (
// //                             <a
// //                               key={itemIdx}
// //                               href={item.route || "#"}
// //                               className="group flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
// //                             >
// //                               {item.icon && (
// //                                 <div className="mr-4 p-2 bg-[#333] rounded-lg">
// //                                   {item.icon}
// //                                 </div>
// //                               )}
// //                               <div>
// //                                 <p className="text-base font-medium text-gray-900 group-hover:text-[#F5B638]">
// //                                   {item.name}
// //                                 </p>
// //                                 <p className="mt-1 text-sm text-gray-500">
// //                                   {item.description}
// //                                 </p>
// //                               </div>
// //                             </a>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //         {/* Mobile Menu (collapsible) */}
// //         {isMobileMenuOpen && (
// //           <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
// //             {/* Right side buttons on mobile */}
// //             <div className="flex flex-col space-y-2 mb-4">
// //               <button className="text-gray-600 hover:text-gray-900 font-medium text-left">
// //                 Login
// //               </button>
// //               <button className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium text-left">
// //                 See Practio
// //               </button>
// //             </div>

// //             {/* Mobile nav items */}
// //             <ul className="flex flex-col space-y-2">
// //               {Object.entries(navItems).map(([title, item]) => (
// //                 <li key={title} className="relative">
// //                   {title === 'Pricing' ? (
// //                     <a
// //                       href="/pricing"
// //                       className="block px-3 py-2 text-gray-700 hover:text-white rounded-md text-sm font-medium"
// //                     >
// //                       {title}
// //                     </a>
// //                   ) : !item.sections || item.sections.length === 0 ? (
// //                     <a
// //                       href={item.leftPanel?.learnMoreLink || "#"}
// //                       className="block px-3 py-2 text-gray-700 hover:text-white rounded-md text-sm font-medium"
// //                     >
// //                       {title}
// //                     </a>
// //                   ) : (
// //                     <>
// //                       <button
// //                         onClick={() => handleDropdownClick(title)}
// //                         className="w-full flex justify-between items-center text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
// //                       >
// //                         <span>{title}</span>
// //                         <ChevronDown
// //                           className={`w-4 h-4 transition-transform duration-200 ${
// //                             activeDropdown === title ? 'rotate-180' : ''
// //                           }`}
// //                         />
// //                       </button>
// //                       {activeDropdown === title && (
// //                         <div className="mt-2 bg-gray-50 border rounded p-2">
// //                           {item.leftPanel && (
// //                             <div className="mb-4">
// //                               <h2 className="text-lg font-semibold text-gray-900">
// //                                 {item.leftPanel.title}
// //                               </h2>
// //                               <p className="text-sm text-gray-600">
// //                                 {item.leftPanel.description}
// //                               </p>
// //                               {/* <a
// //                                 href={item.leftPanel.learnMoreLink}
// //                                 className="text-[#F5B638] hover:text-[#E5A628] font-medium text-sm"
// //                               >
// //                                 Learn more
// //                               </a> */}
// //                             </div>
// //                           )}
// //                           {item.sections?.map((section, idx) => (
// //                             <div key={idx} className="mb-2">
// //                               <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
// //                                 {section.title}
// //                               </h3>
// //                               <div className="space-y-2">
// //                                 {section.items.map((itm, itemIdx) => (
// //                                   <a
// //                                     key={itemIdx}
// //                                     href={itm.route || "#"}
// //                                     className="block px-2 py-1 rounded hover:bg-gray-100"
// //                                   >
// //                                     <span className="font-medium text-gray-900">
// //                                       {itm.name}
// //                                     </span>
// //                                     <p className="text-xs text-gray-500">
// //                                       {itm.description}
// //                                     </p>
// //                                   </a>
// //                                 ))}
// //                               </div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </>
// //                   )}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navbar;

















// import React, { useState } from 'react';
// import {
//   ChevronDown,
//   Building2,
//   Globe2,
//   BookOpen,
//   CreditCard,
//   Users2,
//   Hourglass,
//   Workflow,
//   BarChart3,
//   KeyRound,
//   Boxes,
//   Wrench,
//   Menu,
//   ReceiptIndianRupee,
//   X
// } from 'lucide-react';
// import logo from './Practio logo.png';

// interface NavItem {
//   title: string;
//   sections?: {
//     title: string;
//     items: {
//       name: string;
//       description: string;
//       icon?: React.ReactNode;
//       image?: string;
//       route?: string;
//     }[];
//   }[];
//   leftPanel?: {
//     title: string;
//     description: string;
//     image?: string;
//     learnMoreLink?: string;
//   };
// }

// const navItems: Record<string, NavItem> = {
//   Products: {
//     leftPanel: {
//       title: 'Practio HCM',
//       description: 'Drive business outcomes with the #1 rated HR solution.',
//       learnMoreLink: '/products/hcm',
//     },
//     sections: [
//       {
//         title: 'HR MANAGEMENT',
//         items: [
//           {
//             name: 'HRIS',
//             description: 'Manage employee data',
//             icon: <Users2 className="text-white w-7 h-7" />,
//             route: '/hris'
//           },
//           {
//             name: 'Payroll',
//             description: 'Manage employee Payroll',
//             icon: <ReceiptIndianRupee className="text-white w-7 h-7" />,
//             route: '/payroll'
//           },
//         ],
//       },
//       {
//         title: 'WORKFORCE MANAGEMENT',
//         items: [
//           {
//             name: 'Time & Attendance',
//             description: 'Automate time tracking',
//             icon: <Hourglass className="text-white w-7 h-7" />,
//             route: '/time-and-attendance'
//           }
//         ]
//       },
//       {
//         title: 'TALENT',
//         items: [
//           {
//             name: 'Recruiting',
//             description: 'Recruit better at every step',
//             icon: <Users2 className="text-white w-7 h-7" />,
//             route: '/recruiting'
//           },
//           {
//             name: 'Talent Signal',
//             description: 'Better support new hires',
//             icon: <Workflow className="text-white w-7 h-7" />,
//             route: '/talent-signal'
//           },
//           {
//             name: 'Performance Management',
//             description: 'Drive employee growth',
//             icon: <BarChart3 className="text-white w-7 h-7" />,
//             route: '/performance'
//           },
//         ],
//       },
//       {
//         title: 'BENEFITS',
//         items: [
//           {
//             name: 'Benefits Administration',
//             description: 'Manage employee benefits',
//             icon: <CreditCard className="text-white w-7 h-7" />,
//             route: '/benefits'
//           },
//           {
//             name: 'Expense Management',
//             description: 'Access all your expenses at one place',
//             icon: <Building2 className="text-white w-7 h-7" />,
//             route: '/expense'
//           },
//         ],
//       },
//     ],
//   },
//   Platform: {
//     leftPanel: {
//       title: 'Platform',
//       description: 'Meet the platform tailored to your business.',
//       learnMoreLink: '/platform',
//     },
//     sections: [
//       {
//         title: 'CORE CAPABILITIES',
//         items: [
//           {
//             name: 'Workflow Studio',
//             description: 'Trigger advanced workflows using any data',
//             icon: <Workflow className="text-white w-7 h-7" />,
//             route: '/task-management'
//           },
//           {
//             name: 'Analytics',
//             description: 'Report on anything across your apps',
//             icon: <BarChart3 className="text-white w-7 h-7" />,
//             route: '/analytics'
//           },
//           {
//             name: 'Policies',
//             description: 'Enforce company rules automatically',
//             icon: <KeyRound className="text-white w-7 h-7" />,
//             route: '/policies'
//           },
//           {
//             name: 'Permissions',
//             description: 'Grant everyone the right access',
//             icon: <KeyRound className="text-white w-7 h-7" />,
//             route: '/permissions'
//           },
//         ],
//       },
//     ],
//   },
//   Solutions: {
//     sections: [
//       {
//         title: 'INDUSTRIES',
//         items: [
//           { name: 'Construction', description: 'Solutions for construction firms', route: '/construction' },
//           { name: 'Financial Services', description: 'For financial institutions', route: '/finance' },
//           { name: 'Healthcare', description: 'Healthcare industry solutions', route: '/health-care' },
//           { name: 'Manufacturing', description: 'Manufacturing sector tools', route: '/construction' },
//         ],
//       },
//       {
//         title: 'COMPANY SIZE',
//         items: [
//           { name: 'Startups', description: 'Perfect for new companies', route: '/startup' },
//           { name: 'Small Business', description: '1-50 employees', route: '/small-business' },
//           { name: 'Mid-Market', description: '51-999 employees', route: '/medium-business' },
//           { name: 'Enterprise', description: '1000+ employees', route: '/enterprise' },
//         ],
//       },
//     ],
//   },
//   Pricing: {
//     sections: [],
//     leftPanel: {
//       title: 'Pricing',
//       description: 'Discover our pricing plans.',
//       learnMoreLink: '/pricing',
//     },
//   },
// };

// function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleDropdownClick = (title: string) => {
//     if (activeDropdown === title) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(title);
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-[#3c1f3f] text-white">
//       <nav className="w-full border-b border-gray-200">
//         <div className="px-4 sm:px-6 lg:px-8 w-full">
//           {/* Top section: logo and hamburger/desktop nav */}
//           <div className="flex justify-between h-18 items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center w-1/6">
//               <a href="/">
//                 <img src={logo} alt="logo" className="w-full h-auto" />
//               </a>
//             </div>

//             {/* Desktop Navigation Items (hidden on mobile) */}
//             <div className="hidden md:flex items-center space-x-3">
//               {Object.entries(navItems).map(([title, item]) => (
//                 <div key={title} className="relative">
//                   {title === 'Pricing' ? (
//                     <a
//                       href="/pricing"
//                       className="flex items-center space-x-2 text-white hover:text-[#F5B638] px-5 py-3 rounded-md text-base font-semibold"
//                     >
//                       <span>{title}</span>
//                     </a>
//                   ) : !item.sections || item.sections.length === 0 ? (
//                     <a
//                       href={item.leftPanel?.learnMoreLink || "#"}
//                       className="flex items-center space-x-2 text-white hover:text-[#F5B638] px-5 py-3 rounded-md text-base font-semibold"
//                     >
//                       <span>{title}</span>
//                     </a>
//                   ) : (
//                     <button
//                       onClick={() => handleDropdownClick(title)}
//                       className="flex items-center space-x-2 text-white hover:text-[#F5B638] px-5 py-3 rounded-md text-base font-semibold"
//                     >
//                       <span>{title}</span>
//                       <ChevronDown
//                         className={`w-5 h-5 transition-transform duration-200 ${
//                           activeDropdown === title ? 'rotate-180' : ''
//                         }`}
//                       />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Right side */}
//             <div className="hidden md:flex items-center space-x-6">
//               <a href="/login" className="text-white hover:text-[#F5B638] font-semibold text-base">
//                 Login
//               </a>
//               <a
//                 href="/seePractio"
//                 className="bg-[#F5B638] text-black px-6 py-3 rounded-md hover:bg-[#E5A628] font-semibold text-base"
//               >
//                 See Practio
//               </a>
//             </div>

//             {/* Hamburger menu (visible on mobile only) */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => {
//                   if (isMobileMenuOpen) {
//                     setActiveDropdown(null);
//                   }
//                   setIsMobileMenuOpen(!isMobileMenuOpen);
//                   setActiveDropdown(null);
//                 }}
//                 className="text-white hover:text-[#F5B638] focus:outline-none"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="h-7 w-7" />
//                 ) : (
//                   <Menu className="h-7 w-7" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mega Menu Dropdown for desktop view */}
//         {activeDropdown &&
//           navItems[activeDropdown] &&
//           navItems[activeDropdown].sections && (
//             <div className="hidden md:flex justify-center bg-[#3c1f3f] px-8 py-8 border-t border-[#F5B638]">
//               <div className="flex max-w-7xl w-full gap-16">
//                 {/* Left Panel */}
//                 {navItems[activeDropdown].leftPanel && (
//                   <div className="w-72 flex-shrink-0">
//                     <h2 className="text-xl font-bold mb-3">
//                       {navItems[activeDropdown].leftPanel?.title}
//                     </h2>
//                     <p className="text-[#F5B638] mb-6">
//                       {navItems[activeDropdown].leftPanel?.description}
//                     </p>
//                     {navItems[activeDropdown].leftPanel?.learnMoreLink && (
//                       <a
//                         href={navItems[activeDropdown].leftPanel.learnMoreLink}
//                         className="text-white hover:text-[#F5B638] underline font-semibold"
//                       >
//                         Learn More
//                       </a>
//                     )}
//                   </div>
//                 )}

//                 {/* Sections */}
//                 <div className="flex flex-wrap gap-x-10 gap-y-8 max-w-5xl">
//                   {navItems[activeDropdown].sections?.map((section) => (
//                     <div key={section.title} className="min-w-[12rem]">
//                       <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
//                       <ul className="space-y-3">
//                         {section.items.map((item) => (
//                           <li key={item.name}>
//                             <a
//                               href={item.route || '#'}
//                               className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#F5B638] hover:text-black transition-colors"
//                             >
//                               {item.icon && (
//                                 <span className="flex-shrink-0">
//                                   {React.cloneElement(item.icon as React.ReactElement, {
//                                     className: 'w-7 h-7',
//                                   })}
//                                 </span>
//                               )}
//                               <span className="text-base font-medium">{item.name}</span>
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-[#3c1f3f] text-white border-t border-[#F5B638]">
//             <div className="px-6 py-6 space-y-4">
//               {/* Mobile nav items */}
//               {Object.entries(navItems).map(([title, item]) => (
//                 <div key={title}>
//                   {item.sections && item.sections.length > 0 ? (
//                     <>
//                       <button
//                         onClick={() =>
//                           activeDropdown === title
//                             ? setActiveDropdown(null)
//                             : setActiveDropdown(title)
//                         }
//                         className="w-full flex justify-between items-center text-white hover:text-[#F5B638] px-5 py-3 rounded-md text-base font-semibold"
//                       >
//                         {title}
//                         <ChevronDown
//                           className={`w-5 h-5 transition-transform duration-200 ${
//                             activeDropdown === title ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </button>
//                       {/* Dropdown for this item */}
//                       {activeDropdown === title && (
//                         <div className="mt-2 pl-5 space-y-3">
//                           {item.sections.map((section) => (
//                             <div key={section.title}>
//                               <h4 className="text-[#F5B638] font-semibold mb-2">{section.title}</h4>
//                               <ul className="space-y-2">
//                                 {section.items.map((sectionItem) => (
//                                   <li key={sectionItem.name}>
//                                     <a
//                                       href={sectionItem.route || '#'}
//                                       className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#F5B638] hover:text-black transition-colors text-base font-medium"
//                                     >
//                                       {sectionItem.icon && (
//                                         <span className="flex-shrink-0 w-6 h-6">
//                                           {React.cloneElement(
//                                             sectionItem.icon as React.ReactElement,
//                                             {
//                                               className: 'w-6 h-6',
//                                             }
//                                           )}
//                                         </span>
//                                       )}
//                                       <span>{sectionItem.name}</span>
//                                     </a>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <a
//                       href={item.leftPanel?.learnMoreLink || '#'}
//                       className="block px-5 py-3 rounded-md text-base font-semibold hover:text-[#F5B638]"
//                     >
//                       {title}
//                     </a>
//                   )}
//                 </div>
//               ))}

//               {/* Login and See Practio buttons */}
//               <div className="mt-6 space-y-4">
//                 <a
//                   href="/login"
//                   className="block text-center text-white hover:text-[#F5B638] font-semibold text-base"
//                 >
//                   Login
//                 </a>
//                 <a
//                   href="/seePractio"
//                   className="block bg-[#F5B638] text-black px-6 py-3 rounded-md hover:bg-[#E5A628] font-semibold text-base text-center"
//                 >
//                   See Practio
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;












import React, { useState } from 'react';
import {
  ChevronDown,
  Building2,
  Globe2,
  BookOpen,
  CreditCard,
  Users2,
  Hourglass,
  Workflow,
  BarChart3,
  KeyRound,
  Boxes,
  Wrench,
  Menu,
  ReceiptIndianRupee,
  X
} from 'lucide-react';
import logo from './Practio logo.png';

interface NavItem {
  title: string;
  sections?: {
    title: string;
    items: {
      name: string;
      description: string;
      icon?: React.ReactNode;
      image?: string;
      route?: string;
    }[];
  }[];
  leftPanel?: {
    title: string;
    description: string;
    image?: string;
    learnMoreLink?: string;
  };
}

const navItems: Record<string, NavItem> = {
  Products: {
    leftPanel: {
      title: 'Practio HCM',
      description: 'Drive business outcomes with the #1 rated HR solution.',
      learnMoreLink: '/products/hcm',
    },
    sections: [
      {
        title: 'HR MANAGEMENT',
        items: [
          {
            name: 'HRIS',
            description: 'Manage employee data',
            icon: <Users2 className="text-white" />,
            route: '/hris'
          },
          {
            name: 'Payroll',
            description: 'Manage employee Payroll',
            icon: <ReceiptIndianRupee className="text-white" />,
            route: '/payroll'
          },
        ],
      },
      {
        title: 'WORKFORCE MANAGEMENT',
        items: [
          {
            name: 'Time & Attendance',
            description: 'Automate time tracking',
            icon: <Hourglass className="text-white" />,
            route: '/time-and-attendance'
          }
        ]
      },
      {
        title: 'TALENT',
        items: [
          {
            name: 'Recruiting',
            description: 'Recruit better at every step',
            icon: <Users2 className="text-white" />,
            route: '/recruiting'
          },
          {
            name: 'Talent Signal',
            description: 'Better support new hires',
            icon: <Workflow className="text-white" />,
            route: '/talent-signal'
          },
          {
            name: 'Performance Management',
            description: 'Drive employee growth',
            icon: <BarChart3 className="text-white" />,
            route: '/performance'
          },
        ],
      },
      {
        title: 'BENEFITS',
        items: [
          {
            name: 'Benefits Administration',
            description: 'Manage employee benefits',
            icon: <CreditCard className="text-white" />,
            route: '/benefits'
          },
          {
            name: 'Expense Management',
            description: 'Access all your expenses at one place',
            icon: <Building2 className="text-white" />,
            route: '/expense'
          },
        ],
      },
    ],
  },
  Platform: {
    leftPanel: {
      title: 'Platform',
      description: 'Meet the platform tailored to your business.',
      learnMoreLink: '/platform',
    },
    sections: [
      {
        title: 'CORE CAPABILITIES',
        items: [
          {
            name: 'Workflow Studio',
            description: 'Trigger advanced workflows using any data',
            icon: <Workflow className="text-white" />,
            route: '/task-management'
          },
          {
            name: 'Analytics',
            description: 'Report on anything across your apps',
            icon: <BarChart3 className="text-white" />,
            route: '/analytics'
          },
          {
            name: 'Policies',
            description: 'Enforce company rules automatically',
            icon: <KeyRound className="text-white" />,
            route: '/policies'
          },
          {
            name: 'Permissions',
            description: 'Grant everyone the right access',
            icon: <KeyRound className="text-white" />,
            route: '/permissions'
          },
        ],
      },
    ],
  },
  Solutions: {
    sections: [
      {
        title: 'INDUSTRIES',
        items: [
          { name: 'Construction', description: 'Solutions for construction firms', route: '/construction' },
          { name: 'Financial Services', description: 'For financial institutions', route: '/finance' },
          { name: 'Healthcare', description: 'Healthcare industry solutions', route: '/health-care' },
          { name: 'Manufacturing', description: 'Manufacturing sector tools', route: '/construction' },
        ],
      },
      {
        title: 'COMPANY SIZE',
        items: [
          { name: 'Startups', description: 'Perfect for new companies', route: '/startup' },
          { name: 'Small Business', description: '1-50 employees', route: '/small-business' },
          { name: 'Mid-Market', description: '51-999 employees', route: '/medium-business' },
          { name: 'Enterprise', description: '1000+ employees', route: '/enterprise' },
        ],
      },
    ],
  },
  Pricing: {
    sections: [],
    leftPanel: {
      title: 'Pricing',
      description: 'Discover our pricing plans.',
      learnMoreLink: '/pricing',
    },
  },
};

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownClick = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#3c1f3f] text-white shadow-md">
      <nav className="w-full border-b border-gray-700">
        <div className="px-6 sm:px-8 lg:px-10 w-full">
          {/* Top section: logo and hamburger/desktop nav */}
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            {/* <div className="flex-shrink-0 flex items-center w-1/6">
              <a href="/">
                <img src={logo} alt="logo" className="w-full h-auto max-h-12" />
              </a>
            </div> */}
            <div className="flex-shrink-0 flex items-center w-1/2 md:w-1/6">
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-32 h-auto max-h-16 md:w-full md:max-h-12"
                />
              </a>
            </div>


            {/* Desktop Navigation Items (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-6 text-base font-semibold">

              {Object.entries(navItems).map(([title, item]) => (
                <div key={title} className="relative">
                  {title === 'Pricing' ? (
                    <a
                      href="/pricing"
                      className="text-white hover:text-[#F5B638] px-4 py-3 rounded-md transition-colors"
                    >
                      {title}
                    </a>
                  ) : !item.sections || item.sections.length === 0 ? (
                    <a
                      href={item.leftPanel?.learnMoreLink || "#"}
                      className="text-white hover:text-[#F5B638] px-4 py-3 rounded-md transition-colors"
                    >
                      {title}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleDropdownClick(title)}
                      className="flex items-center space-x-1 text-white hover:text-[#F5B638] px-4 py-3 rounded-md transition-colors"
                    >
                      <span>{title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === title ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Right side buttons on desktop */}
            <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
              <a href="/login" className="text-white hover:text-[#F5B638] transition-colors">
                Login
              </a>
              <a
                href="/seePractio"
                className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] transition-colors"
              >
                See Practio
              </a>
            </div>

            {/* Hamburger menu (visible on mobile only) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => {
                  if (isMobileMenuOpen) {
                    setActiveDropdown(null);
                  }
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown for desktop view */}
        {activeDropdown &&
          navItems[activeDropdown].sections &&
          navItems[activeDropdown].sections.length > 0 && (
            <div className="absolute w-full bg-white shadow-lg z-50 border-t border-gray-200 h-[600px] md:h-[450px] overflow-y-auto">
              <div className="px-6 sm:px-8 lg:px-10 py-8">
                <div className="flex">
                  {/* Left Panel */}
                  {navItems[activeDropdown].leftPanel && (
                    <div className="w-[20%] pr-6 border-r border-gray-200">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                        {navItems[activeDropdown].leftPanel.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-base">
                        {navItems[activeDropdown].leftPanel.description}
                      </p>
                      {/* Learn more link can be enabled here */}
                    </div>
                  )}

                  {/* Main Content */}
                  <div className={`flex gap-6 ${navItems[activeDropdown].leftPanel ? 'pl-4' : 'w-full'}`}>
                    {navItems[activeDropdown].sections.map((section, idx) => (
                      <div key={idx} className="min-w-[160px]">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={item.route || "#"}
                              className="group flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {item.icon && (
                                <div className="mr-4 p-2 bg-[#3c1f3f] rounded-lg">
                                  {item.icon}
                                </div>
                              )}
                              <div>
                                <p className="text-base font-medium text-gray-900 group-hover:text-[#F5B638]">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#3c1f3f] px-4 pt-4 pb-6 border-t border-gray-700">
            {Object.entries(navItems).map(([title, item]) => (
              <div key={title} className="mb-6">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === title ? null : title)
                  }
                  className="flex justify-between items-center w-full text-white text-lg font-semibold px-3 py-3 rounded-md hover:bg-[#5a3462] transition-colors"
                >
                  <span>{title}</span>
                  {item.sections && item.sections.length > 0 && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === title ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </button>
                {/* Dropdown content on mobile */}
                {activeDropdown === title && item.sections && (
                  <div className="mt-3 space-y-4">
                    {item.sections.map((section, idx) => (
                      <div key={idx} className="pl-4">
                        <h4 className="text-sm font-semibold text-gray-300 uppercase mb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.items.map((navItem, idx2) => (
                            <li key={idx2}>
                              <a
                                href={navItem.route || "#"}
                                className="block text-white px-3 py-2 rounded-md hover:bg-[#5a3462] transition-colors"
                              >
                                {navItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {/* For Pricing or items without sections */}
                {activeDropdown === title && (!item.sections || item.sections.length === 0) && (
                  <div className="pl-4 mt-2 text-gray-300">
                    <a
                      href={item.leftPanel?.learnMoreLink || '#'}
                      className="block px-3 py-2 rounded-md hover:bg-[#5a3462] transition-colors"
                    >
                      Learn more
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile right buttons */}
            <div className="border-t border-gray-700 pt-4">
              <a
                href="/login"
                className="block w-full text-center text-white font-semibold px-4 py-3 rounded-md hover:bg-[#5a3462] mb-3"
              >
                Login
              </a>
              <a
                href="/seePractio"
                className="block w-full text-center bg-[#F5B638] text-black font-semibold px-4 py-3 rounded-md hover:bg-[#E5A628]"
              >
                See Practio
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
