// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getlawyers } from "../redux toolkit/lawyerSlice";

// function Getlawyers() {
//   const dispatch = useDispatch();

//   const lawyerData = useSelector((state) => state.lawyer.lawyerdata);

//   useEffect(() => {
//     dispatch(getlawyers())

//   }, [dispatch]);

//   return (
//     <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold text-center underline underline-offset-2 text-[#FF0055] mb-8">
//         Lawyer List
//       </h1>
//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//         <div className="flex flex-col gap-11  ">
//           {lawyerData.map((lawyer) => (
//             <div
//               key={lawyer._id}
//               className="bg-black  shadow-cyan-700   rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
//             >
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 Status: {lawyer.status}
//               </h3>
//               <p className="text-gray-300 mb-2">
//                 Created At: {new Date(lawyer.createdAt).toLocaleString()}
//               </p>
//               {lawyer.adminnotes && (
//                 <p className="text-gray-300 mb-2">
//                   Admin Notes: {lawyer.adminnotes}
//                 </p>
//               )}
//               {/* Add additional fields here if needed */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Getlawyers;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getlawyers } from "../redux toolkit/lawyerSlice";

// function Getlawyers() {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true);
//   const lawyerData = useSelector((state) => state.lawyer.lawyerdata);

//   useEffect(() => {
//     dispatch(getlawyers()).then(() => setLoading(false));
//   }, [dispatch]);

//   const handlePreview = (documentUrl) => {
//     window.open(documentUrl, "_blank");
//   };

//   return (
//     <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-3xl font-bold text-center underline underline-offset-2 text-[#FF0055] mb-8">
//         Lawyer List
//       </h1>
//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//         <div className="flex flex-col gap-11">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             lawyerData.map((lawyer) => (
//               <div
//                 key={lawyer._id}
//                 className="bg-black  shadow-cyan-700   rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xl font-semibold text-white mb-2">
//                     Status: {lawyer.status}
//                   </h3>
//                   {lawyer.userid && (
//                     <img
//                       src={lawyer.userid.profile}
//                       alt="User Profile"
//                       className="w-12 h-12 rounded-full"
//                     />
//                   )}
//                 </div>
//                 <p className="text-gray-300 mb-2">
//                   User: {lawyer.userid ? lawyer.userid.name : "Unknown"}
//                 </p>
//                 <p className="text-gray-300 mb-2">
//                   Created At: {new Date(lawyer.createdAt).toLocaleString()}
//                 </p>
//                 {lawyer.documents && (
//                   <div className="mb-2">
//                     <p className="text-gray-300">Document Preview:</p>
//                     <button
//                       onClick={() => handlePreview(lawyer.documents)}
//                       className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
//                     >
//                       Preview
//                     </button>
//                   </div>
//                 )}
//                 {lawyer.adminnotes && (
//                   <p className="text-gray-300 mb-2 ">
//                     Admin Notes: {lawyer.adminnotes}
//                   </p>
//                 )}
//                 <div className="flex gap-4 ">
//                   <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
//                     Approve
//                   </button>
//                   <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
//                     Reject
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Getlawyers;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getlawyers } from "../redux toolkit/lawyerSlice";
import {approvestatus,rejectstatus} from "../redux toolkit/lawyerSlice.js"

function Getlawyers() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const lawyerData = useSelector((state) => state.lawyer.lawyerdata);

  useEffect(() => {
    dispatch(getlawyers()).then(() => setLoading(false));
  }, [dispatch]);

  const handlePreview = (documentUrl) => {
    window.open(documentUrl, "_blank");
  };

  const renderActionButton = (lawyer) => {
    if (lawyer.status === "pending") {
      return (
        <div className="flex gap-4 ">
          <button onClick={()=>dispatch(approvestatus(lawyer._id))} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            Approve
          </button>
          <button onClick={()=>dispatch(rejectstatus(lawyer._id))}  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            Reject
          </button>
        </div>
      );
    } else if (lawyer.status === "approved") {
      return (
        <div className="flex gap-4 ">
          <button onClick={()=>dispatch(rejectstatus(lawyer._id))}  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            Reject
          </button>
        </div>
      );
    } else if (lawyer.status === "rejected") {
      return (
        <div className="flex gap-4 ">
          <button onClick={()=>dispatch(approvestatus(lawyer._id))}  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            Approve
          </button>
        </div>
      );
    }
  };

  return (
    <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center underline underline-offset-2 text-[#FF0055] mb-8">
        Lawyer List
      </h1>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-11">
          {loading ? (
            <p>Loading...</p>
          ) : (
            lawyerData.map((lawyer) => (
              <div
                key={lawyer._id}
                className="bg-black  shadow-cyan-700   rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Status: {lawyer.status}
                  </h3>
                  {lawyer.userid && (
                    <img
                      src={lawyer.userid.profile}
                      alt="User Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                </div>
                <p className="text-gray-300 mb-2">
                  User: {lawyer.userid ? lawyer.userid.name : "Unknown"}
                </p>
                <p className="text-gray-300 mb-2">
                  Created At: {new Date(lawyer.createdAt).toLocaleString()}
                </p>
                {lawyer.documents && (
                  <div className="mb-2">
                    <p className="text-gray-300">Document Preview:</p>
                    <button
                      onClick={() => handlePreview(lawyer.documents)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                      Preview
                    </button>
                  </div>
                )}
                {lawyer.adminnotes && (
                  <p className="text-gray-300 mb-2">
                    Admin Notes: {lawyer.adminnotes}
                  </p>
                )}
                {renderActionButton(lawyer)}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Getlawyers;
