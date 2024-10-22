// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// export default function Page() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       console.log({ scroll: window.scrollY });
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   console.log("render");

//   return (
//     <div className="space-y-2">
//       <p className="fixed bottom-0 left-0 z-10 text-red-500">{scrollY}</p>
//       {Array(10)
//         .fill(",")
//         .map((item, index) => (
//           <div key={index} className="w-full h-32 bg-black"></div>
//         ))}
//     </div>
//   );
// }
