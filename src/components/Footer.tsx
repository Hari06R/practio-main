// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import logo from './Practio logo.png';
// import { useNavigate } from 'react-router-dom';
// const Footer = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });
//   const navigate = useNavigate();
//   const footerLinks = {
//     Company: ['About', 'Contact'],
//     Products: ['Hris', 'Pricing', 'payroll', 'Enterprise'],
//     // Resources: ['Blog', 'Help Center', 'API Docs', 'Status'],
//     Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Security'],
//   };
//   const handleLinkClick = (link) => {
//     if (link === 'Hris') {
//       navigate('/hris'); // Navigate to the '/hris' route
//     } else if (link === 'Pricing') {
//       navigate('/pricing'); // Navigate to '/pricing'
//     } else {
//       console.log(`${link} clicked`); // Handle other links or external redirects
//     }
//   };
//   return (
//     <footer className="bg-[#3c1f3f] text-white" ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//         <motion.div
//               className="flex items-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* <Settings className="h-8 w-8 text-[#F5B638]" />
//               <span className="ml-2 text-xl font-bold">Practio</span> */}
//               <img src={logo} alt="Practio" className="h-8" />
              
//             </motion.div>
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h2 className="text-lg font-semibold mb-4">{category}</h2>
//               <ul className="space-y-2">
//                 {links.map((link) => (
//                   <li key={link}>
//                      <a
//                       href="#"
//                       onClick={() => handleLinkClick(link)} // Handle clicks
//                       className="text-gray-400 hover:text-blue-400 transition-colors"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-gray-700 pt-8 mt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             {/* <motion.div
//               className="flex items-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6 }}
//             > */}
//               {/* <Settings className="h-8 w-8 text-[#F5B638]" />
//               <span className="ml-2 text-xl font-bold">Practio</span> */}
//               {/* <img src={logo} alt="Practio" className="h-8" />
//             </motion.div> */}
//             <div className="mt-4 md:mt-0 text-gray-400">
//               © {new Date().getFullYear()} Practio. All rights reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from './Practio logo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const footerLinks = {
    Company: ['About', 'Contact'],
    Products: ['Hris', 'Pricing', 'payroll', 'Enterprise'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Security'],
  };

  const handleLinkClick = (link) => {
    if (link === 'Hris') {
      navigate('/hris');
    } else if (link === 'Pricing') {
      navigate('/pricing');
    } else if (link === 'Contact') {
      navigate('/seePractio'); // <<< Navigating to contact page
    } else if (link === 'About') {
      navigate('/seePractio'); // Optional: if you have an About page
    } else {
      console.log(`${link} clicked`);
    }
  };

  return (
    <footer className="bg-[#3c1f3f] text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Practio" className="h-10" />
            <div className="text-lg text-gray-400 leading-relaxed">
              <p>Markona, Balasore, </p>
              <p>Odisha – 756126, </p>
              <p>India</p>
              <p><a href="mailto:support@practio.in" className="text-yellow-400 hover:underline">support@practio.in</a></p>
            </div>
          </motion.div>


          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h2 className="text-lg font-semibold mb-4">{category}</h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={() => handleLinkClick(link)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mt-4 md:mt-0 text-gray-400">
              © {new Date().getFullYear()} Practio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
