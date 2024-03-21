import React, { useEffect, useState } from "react";
import { getSubmission } from "../services/CodeSubmissionOperations";
import SubmissionEntry from "../components/SubmissionEntry";
const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getEntries();
    }, [1000]);
  }, []);
  async function getEntries() {
    const result = await getSubmission();
    setSubmissions(result);
  }
  console.log("Submissions", submissions);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-amarath font-bold text-richBlack text-center">
        Submissions
      </h1>
      <div className="w-4/5 rounded-lg flex gap-5 flex-col">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-2 border-richBeige-100">
              <th className="p-3 border-2 border-richBeige-100">Username</th>
              <th className="p-3 border-2 border-richBeige-100">Programming</th>
              <th className="p-3 border-2 border-richBeige-100">Inputs</th>
              <th className="p-3 border-2 border-richBeige-100">Code</th>
              <th className="p-3 border-2 border-richBeige-100">Output</th>
              <th className="p-3 border-2 border-richBeige-100">Created At</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length > 0 &&
              submissions.map((item) => (
                <SubmissionEntry data={item} key={item.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submissions;
