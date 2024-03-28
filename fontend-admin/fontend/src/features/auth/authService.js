import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const login = async (user) => {
  try {
    const response= await axios.post(`${base_url}LoginAdmin/login`, user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAuths = async () => {
  const response = await axios.get(`${base_url}Users/`);

  return response.data;
};

const getRoles = async () => {
  const response = await axios.get(`${base_url}Roles/`);

  return response.data;
};

const createRole = async (newrole) => {
  const response = await axios.post(`${base_url}NewRole/`, newrole, config);

  return response.data;
};

const authService = {
  login,
  getAuths,
  getRoles,
  createRole,
};

export default authService;
