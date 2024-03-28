import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
const register = async (userData) => {
    const response = await axios.post(`${base_url}Authentication/Register`, userData);
    if (response.data) {
        return response.data;
    }
}
const login = async (user) => {
    try {
        const response = await axios.post(`${base_url}LoginAdmin/loginuser`, user);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const donhangSP = async (userData) => {
    const response = await axios.post(`https://localhost:7213/api/DonHangs/dat-hang`, userData);
    if (response.data) {
        return response.data;
    }
}
const getdonhangSP = async () => {
    const response = await axios.get(`${base_url}DonHangs`);
    if (response.data) {
        return response.data;
    }
}

export const authService = {
    register,
    login,
    donhangSP,
    getdonhangSP,

}