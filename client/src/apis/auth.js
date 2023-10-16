import API from "../config";

export const loginApi = async (data) => {
  return (await API.post("/user/login", data)).data;
};
