import { apiConnector } from "./apiConnecter";
import { endpoints } from "./api";
import toast from "react-hot-toast";

const headers = {
  "X-RapidAPI-Key": `${import.meta.env.VITE_RAPID_KEY}`,
  "X-RapidAPI-Host": `${import.meta.env.VITE_RAPID_HOST}`,
};

export const addSubmission = async (data) => {
  try {
    const body = {
      source_code: data.code,
      language_id: data.language_id,
      stdin: data.stdin,
    };
    const result = await apiConnector(
      "POST",
      endpoints.addSubmisson,
      body,
      headers,
      null
    ).catch((error) => {
      toast.error(error.message);
    });
    if (result.status !== 201) {
      toast.error("Submission failed");
      return;
    }

    return result.data;
  } catch (error) {
    toast.error("Submission failed");
  }
};

export const getSubmissionStatus = async (id) => {
  try {
    const result = await apiConnector(
      "GET",
      `${endpoints.getSubmissionStatus}/${id}`,
      null,
      headers,
      null
    ).catch((error) => {
      toast.error(error.message);
    });
    if (result.status !== 200) {
      toast.error("Failed to get submission status");
      return;
    }
    return result.data;
  } catch (error) {
    toast.error("Failed to get submission status");
  }
};

export const submitCode = async (data) => {
  try {
    const result = await addSubmission(data);
    if (!result) {
      return;
    }

    const submissionStatus = await getSubmissionStatus(result.token);
    //adding the submission to the database
    data.token = result.token;
    const response = await apiConnector(
      "POST",
      endpoints.submission,
      data,
      null,
      null
    ).catch((error) => {
      toast.error(error.message);
    });
    if (response.status !== 200) {
      toast.error("Failed to submit code");
      return;
    }
    toast.success("Code submitted successfully");
    console.log("DATA BASE RESPONSE", response);
    return response.data;
  } catch (error) {
    toast.error("Failed to submit code");
  }
};

export const getSubmission = async () => {
  try {
    const result = await apiConnector(
      "GET",
      endpoints.getSubmissions,
      null,
      null,
      null
    ).catch((error) => {
      toast.error(error.message);
    });
    return result.data.data;
  } catch (error) {
    toast.error("Failed to get submissions");
  }
};
