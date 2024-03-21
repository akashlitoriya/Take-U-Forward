import axios from "axios";

const axiosInstance = axios.create({});

export const apiConnector = async (method, url, body, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: body,
    headers: headers,
    params: params,
  });
};
