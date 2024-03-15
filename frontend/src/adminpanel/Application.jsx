import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyforbecomelawyerr } from "../redux toolkit/lawyerSlice";

const Application = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const dispatch=useDispatch();

  const submitform=()=>{
  
      dispatch(applyforbecomelawyerr(selectedFile));

   
  }

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Legal Awareness</h1>
      <p className="text-lg mb-8">
        Welcome to our legal awareness platform. Here, you can access valuable
        legal resources, articles, and information to stay informed about legal
        matters.
      </p>
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Apply to Become a Lawyer</h2>
        <p className="text-lg mb-4">
          Are you a legal professional looking to join our team? Upload your
          documents below to apply as a lawyer.
        </p>
        <div className="flex flex-col items-center justify-center h-full">
          <label className="relative cursor-pointer">
            <input
              type="file"
              className="hidden"
              
              onChange={handleFileChange}
              
            />
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-800">
              <svg
                className="w-6 h-6 mr-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span>Upload Document</span>
            </div>
          </label>
          <button
      className="bg-blue-500 mt-11 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      onClick={submitform}
    >
     Apply for lawyer
    </button>
          {selectedFile && (
            <div className="mt-4">
              <p className="text-gray-700">{selectedFile.name}</p>
            </div>
          )}
          {!selectedFile && (
            <p className="mt-4 text-gray-500 italic">
              No document selected. Please upload a file (PDF, DOC, DOCX) containing your legal qualifications, certifications, or any other relevant information.
            </p>
          )}
        </div>
      </div>
      {/* Add more sections, articles, or components for your legal awareness website */}
    </div>
  );
};

export default Application;
