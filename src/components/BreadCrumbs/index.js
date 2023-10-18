// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import classes from "./index.module.css";
// // const BreadCrumb = () => {
// //   const location = useLocation();
// //   const breadCrumbView = () => {
// //     const { pathname } = location;
// //     const pathnames = pathname.split("/").filter((item) => item);
// //     const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
// //     return (
// //       <div className={styles["breadcrumb"]}>
// //         <div className={styles["breadcrumb_items"]}>
// //           {pathnames.length > 0 ? <Link to="/">Home</Link> : <></>}
// //           <div className={styles["svg_cont"]}>
// //             <svg
// //               width="14"
// //               height="10"
// //               viewBox="0 0 14 10"
// //               fill="none"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 fill-rule="evenodd"
// //                 clip-rule="evenodd"
// //                 d="M13.5303 5.5303C13.8232 5.2374 13.8232 4.7626 13.5303 4.4697L9.5303 0.469668C9.2374 0.176777 8.7626 0.176777 8.4697 0.469668C8.1768 0.762558 8.1768 1.23744 8.4697 1.53033L11.1893 4.25H1C0.58579 4.25 0.25 4.5858 0.25 5C0.25 5.4142 0.58579 5.75 1 5.75H11.1893L8.4697 8.4697C8.1768 8.7626 8.1768 9.2374 8.4697 9.5303C8.7626 9.8232 9.2374 9.8232 9.5303 9.5303L13.5303 5.5303Z"
// //                 fill="#8D9195"
// //               />
// //             </svg>
// //           </div>
// //           {pathnames.map((name, index) => {
// //             const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
// //             const isLast = index === pathnames.length - 1;
// //             return isLast ? (
// //               <div className={styles["blog_view"]}>
// //                 <div className={styles["svg_cont"]}>
// //                   <svg
// //                     width="14"
// //                     height="10"
// //                     viewBox="0 0 14 10"
// //                     fill="none"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       fill-rule="evenodd"
// //                       clip-rule="evenodd"
// //                       d="M13.5303 5.5303C13.8232 5.2374 13.8232 4.7626 13.5303 4.4697L9.5303 0.469668C9.2374 0.176777 8.7626 0.176777 8.4697 0.469668C8.1768 0.762558 8.1768 1.23744 8.4697 1.53033L11.1893 4.25H1C0.58579 4.25 0.25 4.5858 0.25 5C0.25 5.4142 0.58579 5.75 1 5.75H11.1893L8.4697 8.4697C8.1768 8.7626 8.1768 9.2374 8.4697 9.5303C8.7626 9.8232 9.2374 9.8232 9.5303 9.5303L13.5303 5.5303Z"
// //                       fill="#8D9195"
// //                     />
// //                   </svg>
// //                 </div>
// //                 <div className={styles["unactive_item"]}>
// //                   {capatilize(name)}
// //                 </div>
// //               </div>
// //             ) : (
// //               <div className={styles["active_item"]}>
// //                 <Link to={`${routeTo}`}>
// //                   <p>{capatilize(name)}</p>
// //                 </Link>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return <>{breadCrumbView()}</>;
// // };

// // export default BreadCrumb;

// function BreadCrumbs({ pathnames }) {
//   return (
//     <>
//       <div className={classes["first_text_of_breadcrumb"]}>
//         {pathnames &&
//           pathnames.map((path, index) =>
//             path === "" ? (
//               <>
//                 <Link to={"/"}>Əsas</Link>
//               </>
//             ) : index === pathnames.length - 1 ? (
//               <div className={classes["last_text_of_breadrcrumb"]}>
//                 <div>
//                   <svg
//                     width="14"
//                     height="10"
//                     viewBox="0 0 14 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       clip-rule="evenodd"
//                       d="M13.5303 5.5303C13.8232 5.2374 13.8232 4.7626 13.5303 4.4697L9.5303 0.469668C9.2374 0.176777 8.7626 0.176777 8.4697 0.469668C8.1768 0.762558 8.1768 1.23744 8.4697 1.53033L11.1893 4.25H1C0.58579 4.25 0.25 4.5858 0.25 5C0.25 5.4142 0.58579 5.75 1 5.75H11.1893L8.4697 8.4697C8.1768 8.7626 8.1768 9.2374 8.4697 9.5303C8.7626 9.8232 9.2374 9.8232 9.5303 9.5303L13.5303 5.5303Z"
//                       fill="#8D9195"
//                     />
//                   </svg>
//                 </div>
//                 <span>{path}</span>
//               </div>
//             ) : (
//               <div className={classes["pathname_of_breadcrumb"]}>
//                 <svg
//                   width="14"
//                   height="10"
//                   viewBox="0 0 14 10"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M13.5303 5.5303C13.8232 5.2374 13.8232 4.7626 13.5303 4.4697L9.5303 0.469668C9.2374 0.176777 8.7626 0.176777 8.4697 0.469668C8.1768 0.762558 8.1768 1.23744 8.4697 1.53033L11.1893 4.25H1C0.58579 4.25 0.25 4.5858 0.25 5C0.25 5.4142 0.58579 5.75 1 5.75H11.1893L8.4697 8.4697C8.1768 8.7626 8.1768 9.2374 8.4697 9.5303C8.7626 9.8232 9.2374 9.8232 9.5303 9.5303L13.5303 5.5303Z"
//                     fill="#8D9195"
//                   />
//                 </svg>
//                 <Link to={`/${path}`}>{path}</Link>
//               </div>
//             )
//           )}
//       </div>
//     </>
//   );
// }

// export default BreadCrumbs;
