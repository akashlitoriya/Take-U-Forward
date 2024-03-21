import React, { useEffect, useState } from "react";
import { getSubmissionStatus } from "../services/CodeSubmissionOperations";
const SubmissionEntry = (props) => {
  const {
    username,
    programming_language,
    stdin,
    code,
    created_at,
    token,
  } = props.data;
  const [output, setOutput] = useState("");
  useEffect(() => {
    getOutput(token);
  }, []);
  async function getOutput(token) {
    const result = await getSubmissionStatus(token);
    if (result.status.id !== 3) {
      setOutput(result.status.description);
    } else {
      setOutput(result.stdout);
    }
  }
  return (
    <tr className="border-2 border-richBeige-100">
      <td className="tableData">{username}</td>
      <td className="tableData">{programming_language}</td>
      <td className="tableData">{stdin}</td>
      <td className="tableData text-left">{`${code.slice(0, 100)}`}</td>
      <td className="tableData">{output}</td>
      <td className="tableData">{created_at.slice(0, 10)}</td>
    </tr>
  );
};

export default SubmissionEntry;
