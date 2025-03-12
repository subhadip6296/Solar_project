// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Info,
//   ShoppingBag,
//   HandPlatter,
//   FileText,
//   Calendar,
// BookImage,
//   Contact,
//   Handshake,
//   Home
  
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { images } from "@/assets/Assets";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const navItems = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "About Us", path: "/about", icon: Info },
//     { name: "Services", path: "/services", icon: Handshake },
//     { name: "Products", path: "/products", icon: ShoppingBag },
//     // { name: "Blogs", path: "/blogs", icon: FileText },
//     { name: "Events", path: "/events", icon: Calendar },
//     {
//       name: "Gallery",
//       path: "/gallery",
//       icon: BookImage,
//       dropdown: [
//         { name: "Download Flyers", path: "/gallery/flyers" },
//         { name: "Certifications", path: "/gallery/certifications" },
//       ],
//     },
//     { name: "Contact Us", path: "/contact", icon: Contact },


//   ];

//   const isCurrentPath = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white shadow-lg" : "bg-red/80 backdrop-blur-md"
//         }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex-shrink-0">
//               <Link to="/" className="flex items-center">
//                 <img className="h-20" src={images.logo} alt="" />
//               </Link>
//             </motion.div>

//             Desktop Navigation
//             <div className="hidden md:flex md:items-center md:space-x-6">
//               {navItems.map((item) => (
//                 <motion.div
//                   key={item.name}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ y: 0 }}>
//                   <Link
//                     to={item.path}
//                     className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
//                       isCurrentPath(item.path)
//                         ? "text-[#118B50]"
//                         : "text-gray-600 hover:text-[#118B50]"
//                     }`}>
//                     <item.icon className="w-5 h-5" />
//                     {item.name}
//                     {isCurrentPath(item.path) && (
//                       <motion.div
//                         layoutId="navbar-indicator"
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#118B50]"
//                         initial={false}
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 30,
//                         }}
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Theme Toggle & Mobile Menu Button */}
//             <div className="flex items-center gap-4">
//               {/* <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsDark(!isDark)}
//                 className="p-2 rounded-full hover:bg-gray-100">
//                 {isDark ? (
//                   <Sun className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <Moon className="w-5 h-5 text-gray-600" />
//                 )}
//               </motion.button> */}

//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded-lg hover:bg-gray-100">
//                 {isOpen ? (
//                   <X className="w-6 h-6 text-gray-600" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-gray-600" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white border-t">
//               <div className="px-4 py-2 space-y-1">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}>
//                     <Link
//                       to={item.path}
//                       className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${
//                         isCurrentPath(item.path)
//                           ? "text-[#118B50] bg-[#118B50]/5"
//                           : "text-gray-600 hover:bg-gray-50 hover:text-[#118B50]"
//                       }`}>
//                       <div className="flex items-center gap-4">
//                         <item.icon className="w-5 h-5" />
//                         {item.name}
//                       </div>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Spacer to prevent content from hiding behind fixed navbar */}
//       <div className="h-16 md:h-20" />
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Info,
  ShoppingBag,
  HandPlatter,
  FileText,
  Calendar,
  BookImage,
  Contact,
  Handshake,
  Home,
  ChevronDown
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { images } from "@/assets/Assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleDownload = (fileName) => {
    const link = document.createElement("a");
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Handshake },
    // { name: "Products", path: "/products", icon: ShoppingBag },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Contact Us", path: "/contact", icon: Contact },
  ];

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-red/80 backdrop-blur-md"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
              <Link to="/" className="flex items-center">
              <img className="h-16 max-h-16 md:h-20 md:max-h-20" src={images.logo} alt="" />
              </Link>
            </motion.div>

            <div className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Link to={item.path} className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${isCurrentPath(item.path) ? "text-[#118B50]" : "text-gray-600 hover:text-[#118B50]"}`}>
                    <item.icon className="w-5 h-5" />
                    {item.name}
                    {isCurrentPath(item.path) && (
                      <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#118B50]" initial={false} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-600 hover:text-[#118B50]">

 

                <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#118B50]">

                  <BookImage className="w-5 h-5" />
                   Gallery
                  <ChevronDown className="w-4 h-4" />
                               </Link>

                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <button onClick={() => handleDownload("ServiceNowCSA.pdf")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    📄 Brochure
                  </button>
                  <button onClick={() => handleDownload("flyer.pdf")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    📜 Flyer
                  </button>
                  <button onClick={() => handleDownload("certifications.pdf")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    🎓 Certifications
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                {isOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                    <Link to={item.path} className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${isCurrentPath(item.path) ? "text-[#118B50] bg-[#118B50]/5" : "text-gray-600 hover:bg-gray-50 hover:text-[#118B50]"}`}>
                      <div className="flex items-center gap-4">
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}


<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white border-t"
    >
      <div className="px-4 py-2 space-y-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className={`block px-3 py-4 text-base font-medium rounded-lg transition-colors ${
                isCurrentPath(item.path)
                  ? "text-[#118B50] bg-[#118B50]/5"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#118B50]"
              }`}
            >
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5" />
                {item.name}
              </div>
            </Link>
          </motion.div>
        ))}

        {/* ✅ Added Gallery Dropdown for Mobile */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between px-3 py-4 text-base font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[#118B50]"
          >
            <div className="flex items-center gap-4">
              <BookImage className="w-5 h-5" />
              Gallery
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-6 space-y-1"
            >
              <button
                onClick={() => handleDownload("ServiceNowCSA.pdf")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                📄 Brochure
              </button>
              <button
                onClick={() => handleDownload("flyer.pdf")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                📜 Flyer
              </button>
              <button
                onClick={() => handleDownload("certifications.pdf")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                🎓 Certifications
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </motion.nav>
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;


// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Menu,
//   X,
//   Info,
//   ShoppingBag,
//   Handshake,
//   Calendar,
//   BookImage,
//   Contact,
//   Home,
//   ChevronDown,
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { images } from "@/assets/Assets";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const handleDownload = (pdfLink, fileName) => {
//     const link = document.createElement("a");
//     link.href = pdfLink;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const navItems = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "About Us", path: "/about", icon: Info },
//     { name: "Overview", path: "/services", icon: Handshake },
//     { name: "Services", path: "/products", icon: ShoppingBag },
//     { name: "Events", path: "/events", icon: Calendar },
//     { name: "Contact Us", path: "/contact", icon: Contact },
//   ];

//   const isCurrentPath = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white shadow-lg" : "bg-red/80 backdrop-blur-md"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex-shrink-0"
//             >
//               <Link to="/" className="flex items-center">
//                 <img className="h-20" src={images.logo} alt="" />
//               </Link>
//             </motion.div>

//             <div className="hidden md:flex md:items-center md:space-x-6">
//               {navItems.map((item) => (
//                 <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                   <Link
//                     to={item.path}
//                     className={`relative flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
//                       isCurrentPath(item.path)
//                         ? "text-[#118B50]"
//                         : "text-gray-600 hover:text-[#118B50]"
//                     }`}
//                   >
//                     <item.icon className="w-5 h-5" />
//                     {item.name}
//                     {isCurrentPath(item.path) && (
//                       <motion.div
//                         layoutId="navbar-indicator"
//                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#118B50]"
//                         initial={false}
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}

//               {/* Gallery with dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 onMouseLeave={() => setIsDropdownOpen(false)}
//               >
//                 <Link to="/gallery" className="flex items-center gap-2 text-gray-600 hover:text-[#118B50]">
//                   <BookImage className="w-5 h-5" />
//                   Gallery
//                   <ChevronDown className="w-4 h-4" />
//                 </Link>

//                 {/* Dropdown content */}
//                 <div
//                   className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md transition-all duration-300 ${
//                     isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
//                   }`}
//                   onMouseEnter={() => setIsDropdownOpen(true)}
//                   onMouseLeave={() => setIsDropdownOpen(false)}
//                 >
//                   <button
//                     onClick={() =>
//                       handleDownload("https://example.com/ServiceNowCSA.pdf", "ServiceNowCSA.pdf")
//                     }
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     📄 Brochure
//                   </button>
//                   <button
//                     onClick={() => handleDownload("https://example.com/flyer.pdf", "flyer.pdf")}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     📜 Flyer
//                   </button>
//                   <button
//                     onClick={() =>
//                       handleDownload("https://example.com/certifications.pdf", "certifications.pdf")
//                     }
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     🎓 Certifications
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded-lg hover:bg-gray-100"
//               >
//                 {isOpen ? (
//                   <X className="w-6 h-6 text-gray-600" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-gray-600" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>
//       <div className="h-16 md:h-20" />
//     </>
//   );
// };

// export default Navbar;
