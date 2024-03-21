import React from "react";
import { useForm } from "react-hook-form";
import { submitCode } from "../services/CodeSubmissionOperations";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formSubmit = async (data) => {
    data.programming_language = data.programming_language.toLowerCase();
    if (data.stdin === "") {
      data.stdin = " ";
    } else {
      data.stdin = data.stdin;
    }
    if (data.programming_language === "java") {
      data.language_id = 62;
    } else if (data.programming_language === "c") {
      data.language_id = 49;
    } else if (data.programming_language === "cpp") {
      data.language_id = 53;
    } else {
      data.language_id = 68;
    }
    const result = await submitCode(data);
    navigate("/submissions");
  };
  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="font-poppins text-base flex flex-col gap-3 text-richBlack"
    >
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="font-semibold">
            Username :<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder="Enter your username here."
            className="px-5 py-2 w-fit rounded-lg text-base"
          />
          {errors.username && <span>Username is required</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="programming_language" className="font-semibold">
            Programming Language :<span className="text-red-500">*</span>
          </label>
          <select
            {...register("programming_language", { required: true })}
            className="px-5 py-2 rounded-lg w-full"
          >
            <option value="">Select Language</option>
            <option value="c">C</option>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
          {errors.programming_language && <span>This is required</span>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="stdin" className="font-semibold">
          Stdin :
        </label>
        <textarea
          id="stdin"
          {...register("stdin")}
          className="px-5 py-2 rounded-lg"
        ></textarea>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="code" className="font-semibold">
          Code :<span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Enter your code here. Note: If Java code the class name must be Main."
          id="code"
          rows={6}
          {...register("code", { required: true })}
          className="px-5 py-2 rounded-lg"
        ></textarea>
        {errors.code && <span>Code is required</span>}
      </div>
      <div className="flex flex-row gap-3">
        <button
          type="submit"
          className="w-full bg-richMaroon px-5 py-2 rounded-lg text-richBeige-100 transition-all duration-200 hover:bg-richBeige-100 hover:text-richMaroon"
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={() => reset()}
          className="w-full bg-richMaroon px-5 py-2 rounded-lg text-richBeige-100 transition-all duration-200 hover:bg-richBeige-100 hover:text-richMaroon"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
