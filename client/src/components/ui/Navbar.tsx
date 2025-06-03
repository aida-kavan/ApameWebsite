// import { useState } from "react";



// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-center gap-16 relative">
//       {navbarMenuList.map((nav) => (
//         <div key={nav.id} className="relative group">
//           <ul>
//             <li>
//               <a
//                 href={nav.link}
//                 className="text-[16.5px] hover:text-[#4672e2e0]  duration-200 hover:opacity-80 flex items-center"
//               >
//                 {nav.title}
//                 {nav.submenu && (
//                   <span className="mr-1 inline-block transform group-hover:rotate-180 transition-transform duration-200">
//                     &#9660;
//                   </span>
//                 )}
//               </a>
//             </li>
//           </ul>

//           {nav.submenu && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
//               <ul className="py-1">
//                 {nav.submenu.map((subItem) => (
//                   <li key={subItem.id}>
//                     <a
//                       href={subItem.link}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-right"
//                     >
//                       {subItem.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// };

// export default Navbar
