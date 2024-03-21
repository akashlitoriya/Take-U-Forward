const backendURL = import.meta.env.VITE_BASE_APP;

export const endpoints = {
  submission: `${backendURL}/api/v1/code/submitCode`,
  getSubmissions: `${backendURL}/api/v1/code/getCodeSubmission`,
  addSubmisson: `https://judge0-ce.p.rapidapi.com/submissions`,
  getSubmissionStatus: `https://judge0-ce.p.rapidapi.com/submissions`,
};
