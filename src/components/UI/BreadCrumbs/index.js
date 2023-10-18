// import React from "react";
// import { Link } from "react-router-dom";

// function BreadCrumbs({ items }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         color: "white",
//       }}
//     >
//       {items.map((item, index) => (
//         <div key={index}>
//           {index === items.length - 1 ? (
//             <span>{item}</span>
//           ) : (
//             <Link to={item === "" ? "/" : `/${item}`}>
//               <span
//                 style={{
//                   color: "white",
//                 }}
//               >
//                 {item === "" ? "Ana səhifə" : item}/
//               </span>
//             </Link>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BreadCrumbs;
