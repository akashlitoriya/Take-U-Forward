import React from "react";
import Form from "../components/Form";

const CodeSubmissionForm = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-4">
      <div className="border-2 border-richBeige-100 p-8 rounded-lg flex gap-5 flex-col">
        <h1 className="text-3xl font-amarath font-bold text-richBlack text-center">
          Code Submission
        </h1>
        <Form />
      </div>
    </div>
  );
};

export default CodeSubmissionForm;
