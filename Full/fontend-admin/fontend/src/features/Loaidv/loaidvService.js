import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getLoaidvs = async () => {
  const response = await axios.get(`${base_url}LoaiDVs/`);

  return response.data;
};

const createLoaidv = async (loaidv) => {
  const response = await axios.post(`${base_url}LoaiDVs/`, loaidv, config);

  return response.data;
};

const updateLoaidv = async (loaidv) => {
  const response = await axios.put(
    `${base_url}LoaiDVs/${loaidv.maLDV}`,
    { maLDV: loaidv.loaidvData.maLDV, tenLDV: loaidv.loaidvData.tenLDV, maCH: loaidv.loaidvData.maCH, maCN: loaidv.loaidvData.maCN },
    config
  );

  return response.data;
};

const getLoaidv = async (maLDV) => {
  const response = await axios.get(`${base_url}LoaiDVs/${maLDV}`, config);

  return response.data;
};

const getLoaidvad = async (maCH) => {
  const response = await axios.get(`${base_url}LDVAD/${maCH}`, config);

  return response.data;
};

const getLoaidvcn = async (maCN) => {
  const response = await axios.get(`${base_url}LDVCN/${maCN}`, config);

  return response.data;
};

const deleteLoaidv = async (maLDV) => {
  const response = await axios.delete(`${base_url}LoaiDVs/${maLDV}`, config);

  return response.data;
};

const loaidvService = {
  getLoaidvs,
  createLoaidv,
  updateLoaidv,
  getLoaidv,
  getLoaidvad,
  getLoaidvcn,
  deleteLoaidv,
};

export default loaidvService;
