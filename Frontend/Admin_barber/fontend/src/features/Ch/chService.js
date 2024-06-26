import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getChs = async () => {
  const response = await axios.get(`${base_url}CuaHangs/`);

  return response.data;
};

const createCh = async (ch) => {
  const response = await axios.post(`${base_url}CuaHangs/`, ch, config);

  return response.data;
};

const updateCh = async (ch) => {
  const response = await axios.put(
    `${base_url}CuaHangs/${ch.maCH}`,
    {
      maCH: ch.chData.maCH,
      tenCH: ch.chData.tenCH,
      email: ch.chData.email,
      sdt: ch.chData.sdt,
      diaChi: ch.chData.diaChi,
    },
    config
  );

  return response.data;
};

const getCh = async (maCH) => {
  const response = await axios.get(`${base_url}CuaHangs/${maCH}`, config);

  return response.data;
};

const deleteCh = async (maCH) => {
  const response = await axios.delete(
    `${base_url}CuaHangs/${maCH}`,
    config
  );

  return response.data;
};

const chService = {
  getChs,
  createCh,
  updateCh,
  getCh,
  deleteCh,
};

export default chService;
