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

// // Your existing navItems object
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
//             name: '',
//             description: 'Manage employee data',
//             icon: <Users2 className="text-white" />,
//             route: '/hris'
//           },
//         ],
//       },
//       {
//         title:'WORKFORCE MANAGEMENT',
//         items:[
//           {
//             name: 'Time & Attendance',
//             description: 'Automate time tracking',
//             icon: <Hourglass className="text-white" />,
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
//             icon: <Users2 className="text-white" />,
//           },
//           {
//             name: 'Talent Signal',
//             description: 'Better support new hires',
//             icon: <Workflow className="text-white" />,
//           },
//           {
//             name: 'Performance Management',
//             description: 'Drive employee growth',
//             icon: <BarChart3 className="text-white" />,
//           },
//         ],
//       },
//       {
//         title: 'BENEFITS',
//         items: [
//           {
//             name: 'Benefits Administration',
//             description: 'Manage employee benefits',
//             icon: <CreditCard className="text-white" />,
//           },
//           {
//             name: 'PEO',
//             description: 'Access enterprise-grade benefits',
//             icon: <Building2 className="text-white" />,
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
//             icon: <Workflow className="text-white" />,
//           },
//           {
//             name: 'Analytics',
//             description: 'Report on anything across your apps',
//             icon: <BarChart3 className="text-white" />,
//           },
//           {
//             name: 'Policies',
//             description: 'Enforce company rules automatically',
//             icon: <KeyRound className="text-white" />,
//           },
//           {
//             name: 'Permissions',
//             description: 'Grant everyone the right access',
//             icon: <KeyRound className="text-white" />,
//           },
//           {
//             name: 'Integrations',
//             description: 'Push third-party apps to perform better',
//             icon: <Boxes className="text-white" />,
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
//           { name: 'Construction', description: 'Solutions for construction firms' },
//           { name: 'Financial Services', description: 'For financial institutions' },
//           { name: 'Healthcare', description: 'Healthcare industry solutions' },
//           { name: 'Manufacturing', description: 'Manufacturing sector tools' },
//         ],
//       },
//       {
//         title: 'COMPANY SIZE',
//         items: [
//           { name: 'Startups', description: 'Perfect for new companies' },
//           { name: 'Small Business', description: '1-50 employees' },
//           { name: 'Mid-Market', description: '51-999 employees' },
//           { name: 'Enterprise', description: '1000+ employees' },
//         ],
//       },
//     ],
//   },
//   Global: {
//     sections: [
//       {
//         title: 'PRODUCTS',
//         items: [
//           { name: 'Global Payroll', description: 'Pay employees anywhere' },
//           { name: 'Global HRIS', description: 'Run global HR in one place' },
//           { name: 'Global Benefits', description: 'Provide benefits worldwide' },
//         ],
//       },
//       {
//         title: 'HIRE GLOBALLY',
//         items: [
//           { name: 'United Kingdom', description: 'Hire in the UK' },
//           { name: 'Australia', description: 'Hire in Australia' },
//           { name: 'Canada', description: 'Hire in Canada' },
//         ],
//       },
//     ],
//   },
//   Resources: {
//     sections: [
//       {
//         title: 'RESOURCE LIBRARY',
//         items: [
//           { name: 'HR Leaders', description: 'Resources for HR professionals' },
//           { name: 'IT Leaders', description: 'Resources for IT professionals' },
//           { name: 'Finance Leaders', description: 'Resources for finance teams' },
//           { name: 'Global', description: 'International business resources' },
//         ],
//       },
//       {
//         title: 'FEATURED',
//         items: [
//           {
//             name: 'The state of employment',
//             description: 'Small and mid-sized companies',
//           },
//           {
//             name: 'HR Guide',
//             description: 'Foundations for Actionable AI',
//           },
//           { name: 'The state of spend', description: 'Perception vs. reality' },
//           {
//             name: 'Automate onboarding',
//             description: 'And offboarding processes',
//           },
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

//   // State to handle the mobile menu toggle
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleDropdownClick = (title: string) => {
//     if (activeDropdown === title) {
//       setActiveDropdown(null);
//     } else {
//       setActiveDropdown(title);
//     }
//   };

//   return (
//     // Make the navbar fixed at top and full width
//     <div className="fixed top-0 left-0 right-0 z-50 bg-[#3c1f3f] text-white">
//       <nav className="w-full border-b border-gray-200">
//         <div className="px-4 sm:px-6 lg:px-8 w-full">
//           {/* Top section: logo and hamburger/desktop nav */}
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center w-1/6">
//               <a href="/">
//               <img src={logo} alt="logo" className="w-full h-auto" />
//               </a>
//             </div>

//             {/* Desktop Navigation Items (hidden on mobile) */}
//             <div className="hidden md:flex items-center space-x-1">
//               {Object.entries(navItems).map(([title]) => (
//                 <div key={title} className="relative">
//                   <button
//                     onClick={() => handleDropdownClick(title)}
//                     className="flex items-center space-x-1 text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     <span>{title}</span>
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform duration-200 ${
//                         activeDropdown === title ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Right side */}
//             <div className="hidden md:flex items-center space-x-4">
//                 <a href="/login" className="text-white-600 hover:text-blue-900 font-medium">
//                 Login
//                 </a>
//                 <a href="/seePractio" className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium">
//                 See Practio
//                 </a>
//             </div>

//             {/* Hamburger menu (visible on mobile only) */}
//             <div className="md:hidden flex items-center">
//               <button
//               onClick={() => {
//                 if (isMobileMenuOpen) {
//                 setActiveDropdown(null); // Close any open dropdowns
//                 }
//                 setIsMobileMenuOpen(!isMobileMenuOpen);
//                 setActiveDropdown(null); 
//               }}
//               className="text-white-700 hover:text-white focus:outline-none"
//               >
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mega Menu Dropdown for desktop view */}
//         {activeDropdown && (
//             <div className="absolute w-full bg-white shadow-lg z-50 border-t border-gray-200 h-[600px] md:h-[450px] overflow-y-auto">
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//               <div className="flex">
//               {/* Left Panel */}
//               {navItems[activeDropdown].leftPanel && (
//               <div className="w-[20%] pr-4 border-r border-gray-200">
//                 <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
//                 {navItems[activeDropdown].leftPanel.title}
//                 </h2>
//                 <p className="text-gray-600 mb-4 text-sm md:text-base">
//                 {navItems[activeDropdown].leftPanel.description}
//                 </p>
//               <a
//                 href={navItems[activeDropdown].leftPanel.learnMoreLink}
//                 className="text-[#F5B638] hover:text-[#E5A628] font-medium"
//               >
//                 Learn more
//               </a>
//               </div>
//               )}

//               {/* Main Content */}
//               <div
//               className={`flex ${
//               navItems[activeDropdown].leftPanel ? ' pl-2' : 'w-full'
//               } flex-cols-${
//               navItems[activeDropdown].sections?.length || 1
//               } gap-1`}
//               >
//               {navItems[activeDropdown].sections?.map((section, idx) => (
//               <div key={idx}>
//                 <h3 className="text-sm w-10% font-semibold text-gray-500 uppercase tracking-wider mb-4">
//                 {section.title}
//                 </h3>
//                 <div className="space-y-4">
//                 {section.items.map((item, itemIdx) => (
//                 <a
//                 key={itemIdx}
//                 href={item.route || "#"}
//                 className="group flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
//                 >
//                 {item.icon && (
//                   <div className="mr-4 p-2 bg-[#333] rounded-lg">
//                   {item.icon}
//                   </div>
//                 )}
//                 <div>
//                   <p className="text-base font-medium text-gray-900 group-hover:text-[#F5B638]">
//                   {item.name}
//                   </p>
//                   <p className="mt-1 text-sm text-gray-500">
//                   {item.description}
//                   </p>
//                 </div>
//                 </a>
//                 ))}
//                 </div>
//               </div>
//               ))}
//               </div>
//               </div>
//             </div>
//             </div>
//         )}

//         {/* Mobile Menu (collapsible) */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200  px-4 py-4">
//             {/* Right side buttons on mobile */}
//             <div className="flex flex-col space-y-2 mb-4">
//               <button className="text-gray-600 hover:text-gray-900 font-medium text-left">
//                 Login
//               </button>
//               <button className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium text-left">
//                 See Practio
//               </button>
//             </div>

//             {/* Mobile nav items */}
//             <ul className="flex flex-col space-y-2">
//               {Object.entries(navItems).map(([title]) => (
//                 <li key={title} className="relative">
//                   <button
//                     onClick={() => handleDropdownClick(title)}
//                     className="w-full flex justify-between items-center text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     <span>{title}</span>
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform duration-200 ${
//                         activeDropdown === title ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </button>

//                   {/* If dropdown is active, show the nested items (simplified for mobile) */}
//                   {activeDropdown === title && (
//                     <div className="mt-2 bg-gray-50 border rounded p-2">
//                       {/* Left panel on mobile (if any) */}
//                       {navItems[title].leftPanel && (
//                         <div className="mb-4">
//                           <h2 className="text-lg font-semibold text-gray-900">
//                             {navItems[title].leftPanel.title}
//                           </h2>
//                           <p className="text-sm text-gray-600">
//                             {navItems[title].leftPanel.description}
//                           </p>
//                           <a
//                             href={navItems[title].leftPanel.learnMoreLink}
//                             className="text-[#F5B638] hover:text-[#E5A628] font-medium text-sm"
//                           >
//                             Learn more
//                           </a>
//                         </div>
//                       )}

//                       {/* Sections for mobile */}
//                       {navItems[title].sections?.map((section, idx) => (
//                         <div key={idx} className="mb-2">
//                           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
//                             {section.title}
//                           </h3>
//                           <div className="space-y-2">
//                             {section.items.map((item, itemIdx) => (
//                               <a
//                                 key={itemIdx}
//                                 href="#"
//                                 className="block px-2 py-1 rounded hover:bg-gray-100"
//                               >
//                                 <span className="font-medium text-gray-900">
//                                   {item.name}
//                                 </span>
//                                 <p className="text-xs text-gray-500">
//                                   {item.description}
//                                 </p>
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
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
  ReceiptIndianRupee ,
  X      
} from 'lucide-react';
import logo from './Practio logo.png';
import { Route } from 'react-router-dom';

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

// Your existing navItems object
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
            icon: <ReceiptIndianRupee  className="text-white" />,
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
            route:'/recruiting'
          },
          {
            name: 'Talent Signal',
            description: 'Better support new hires',
            icon: <Workflow className="text-white" />,
            route:'/talent-signal'
          },
          {
            name: 'Performance Management',
            description: 'Drive employee growth',
            icon: <BarChart3 className="text-white" />,
            route:'/performance'
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
            route:'/benefits'
          },
          {
            name: 'Expense Management',
            description: 'Access all your expenses at one place',
            icon: <Building2 className="text-white" />,
            route:'/expense'
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
            route:'/task-management'
          },
          {
            name: 'Analytics',
            description: 'Report on anything across your apps',
            icon: <BarChart3 className="text-white" />,
            route:'/analytics'
          },
          {
            name: 'Policies',
            description: 'Enforce company rules automatically',
            icon: <KeyRound className="text-white" />,
            route:'/policies'
          },
          {
            name: 'Permissions',
            description: 'Grant everyone the right access',
            icon: <KeyRound className="text-white" />,
            route:'/permissions' 
          },
          // {
          //   name: 'Integrations',
          //   description: 'Push third-party apps to perform better',
          //   icon: <Boxes className="text-white" />,
          // },
        ],
      },
    ],
  },
  Solutions: {
    sections: [
      {
        title: 'INDUSTRIES',
        items: [
          { name: 'Construction', description: 'Solutions for construction firms',route:'/construction' },
          { name: 'Financial Services', description: 'For financial institutions',route:'/finance' },
          { name: 'Healthcare', description: 'Healthcare industry solutions',route:'/health-care' },
          { name: 'Manufacturing', description: 'Manufacturing sector tools',route:'/manufacturing' },
        ],
      },
      {
        title: 'COMPANY SIZE',
        items: [
          { name: 'Startups', description: 'Perfect for new companies',route:'/startup' },
          { name: 'Small Business', description: '1-50 employees',route:'/small-business' },
          { name: 'Mid-Market', description: '51-999 employees',route:'/medium-business' },
          { name: 'Enterprise', description: '1000+ employees',route:'/enterprise' },
        ],
      },
    ],
  },
  // Global: {
  //   sections: [
  //     {
  //       title: 'PRODUCTS',
  //       items: [
  //         { name: 'Global Payroll', description: 'Pay employees anywhere' },
  //         { name: 'Global HRIS', description: 'Run global HR in one place' },
  //         { name: 'Global Benefits', description: 'Provide benefits worldwide' },
  //       ],
  //     },
  //     {
  //       title: 'HIRE GLOBALLY',
  //       items: [
  //         { name: 'United Kingdom', description: 'Hire in the UK' },
  //         { name: 'Australia', description: 'Hire in Australia' },
  //         { name: 'Canada', description: 'Hire in Canada' },
  //       ],
  //     },
  //   ],
  // },
  // Resources: {
  //   sections: [
  //     {
  //       title: 'RESOURCE LIBRARY',
  //       items: [
  //         { name: 'HR Leaders', description: 'Resources for HR professionals' },
  //         { name: 'IT Leaders', description: 'Resources for IT professionals' },
  //         { name: 'Finance Leaders', description: 'Resources for finance teams' },
  //         { name: 'Global', description: 'International business resources' },
  //       ],
  //     },
  //     {
  //       title: 'FEATURED',
  //       items: [
  //         {
  //           name: 'The state of employment',
  //           description: 'Small and mid-sized companies',
  //         },
  //         {
  //           name: 'HR Guide',
  //           description: 'Foundations for Actionable AI',
  //         },
  //         { name: 'The state of spend', description: 'Perception vs. reality' },
  //         {
  //           name: 'Automate onboarding',
  //           description: 'And offboarding processes',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // Pricing will be rendered as a direct link.
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#3c1f3f] text-white">
      <nav className="w-full border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          {/* Top section: logo and hamburger/desktop nav */}
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center w-1/6">
              <a href="/">
                <img src={logo} alt="logo" className="w-full h-auto" />
              </a>
            </div>

            {/* Desktop Navigation Items (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-1">
              {Object.entries(navItems).map(([title, item]) => (
                <div key={title} className="relative">
                  {title === 'Pricing' ? (
                    <a
                      href="/pricing"
                      className="flex items-center space-x-1 text-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span>{title}</span>
                    </a>
                  ) : !item.sections || item.sections.length === 0 ? (
                    <a
                      href={item.leftPanel?.learnMoreLink || "#"}
                      className="flex items-center space-x-1 text-white-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span>{title}</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => handleDropdownClick(title)}
                      className="flex items-center space-x-1 text-white-700 hover:text-Black px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <span>{title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-white-600 hover:text-white hover:font-bold font-medium">
                Login
              </a>
              <a
                href="/seePractio"
                className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium"
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
                  setActiveDropdown(null);
                }}
                className="text-white-700 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
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
              <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex">
                  {/* Left Panel */}
                  {navItems[activeDropdown].leftPanel && (
                    <div className="w-[20%] pr-4 border-r border-gray-200">
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                        {navItems[activeDropdown].leftPanel.title}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm md:text-base">
                        {navItems[activeDropdown].leftPanel.description}
                      </p>
                      {/* <a
                        href={navItems[activeDropdown].leftPanel.learnMoreLink}
                        className="text-[#F5B638] hover:text-[#E5A628] font-medium"
                      >
                        Learn more
                      </a> */}
                    </div>
                  )}

                  {/* Main Content */}
                  <div className={`flex ${navItems[activeDropdown].leftPanel ? 'pl-2' : 'w-full'} gap-1`}>
                    {navItems[activeDropdown].sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm w-10% font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          {section.title}
                        </h3>
                        <div className="space-y-1">
                          {section.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={item.route || "#"}
                              className="group flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {item.icon && (
                                <div className="mr-4 p-2 bg-[#333] rounded-lg">
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

        {/* Mobile Menu (collapsible) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
            {/* Right side buttons on mobile */}
            <div className="flex flex-col space-y-2 mb-4">
              <button className="text-gray-600 hover:text-gray-900 font-medium text-left">
                Login
              </button>
              <button className="bg-[#F5B638] text-black px-4 py-2 rounded-md hover:bg-[#E5A628] font-medium text-left">
                See Practio
              </button>
            </div>

            {/* Mobile nav items */}
            <ul className="flex flex-col space-y-2">
              {Object.entries(navItems).map(([title, item]) => (
                <li key={title} className="relative">
                  {title === 'Pricing' ? (
                    <a
                      href="/pricing"
                      className="block px-3 py-2 text-gray-700 hover:text-white rounded-md text-sm font-medium"
                    >
                      {title}
                    </a>
                  ) : !item.sections || item.sections.length === 0 ? (
                    <a
                      href={item.leftPanel?.learnMoreLink || "#"}
                      className="block px-3 py-2 text-gray-700 hover:text-white rounded-md text-sm font-medium"
                    >
                      {title}
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDropdownClick(title)}
                        className="w-full flex justify-between items-center text-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        <span>{title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === title ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === title && (
                        <div className="mt-2 bg-gray-50 border rounded p-2">
                          {item.leftPanel && (
                            <div className="mb-4">
                              <h2 className="text-lg font-semibold text-gray-900">
                                {item.leftPanel.title}
                              </h2>
                              <p className="text-sm text-gray-600">
                                {item.leftPanel.description}
                              </p>
                              {/* <a
                                href={item.leftPanel.learnMoreLink}
                                className="text-[#F5B638] hover:text-[#E5A628] font-medium text-sm"
                              >
                                Learn more
                              </a> */}
                            </div>
                          )}
                          {item.sections?.map((section, idx) => (
                            <div key={idx} className="mb-2">
                              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                {section.title}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((itm, itemIdx) => (
                                  <a
                                    key={itemIdx}
                                    href={itm.route || "#"}
                                    className="block px-2 py-1 rounded hover:bg-gray-100"
                                  >
                                    <span className="font-medium text-gray-900">
                                      {itm.name}
                                    </span>
                                    <p className="text-xs text-gray-500">
                                      {itm.description}
                                    </p>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
