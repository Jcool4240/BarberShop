import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getLoaisps = async () => {
  const response = await axios.get(`${base_url}LoaiSPs/`);

  return response.data;
};

const createLoaisp = async (loaisp) => {
  const response = await axios.post(`${base_url}LoaiSPs/`, loaisp, config);

  return response.data;
};

const updateLoaisp = async (loaisp) => {
  const response = await axios.put(
    `${base_url}LoaiSPs/${loaisp.maLSP}`,
    { maLSP: loaisp.loaispData.maLSP, tenLSP: loaisp.loaispData.tenLSP, maCH: loaisp.loaispData.maCH },
    config
  );

  return response.data;
};

const getLoaisp = async (maLSP) => {
  const response = await axios.get(`${base_url}LoaiSPs/${maLSP}`, config);

  return response.data;
};

const getLoaispad = async (maCH) => {
  const response = await axios.get(`${base_url}LSPAD/${maCH}`, config);

  return response.data;
};

const deleteLoaisp = async (maLSP) => {
  const response = await axios.delete(`${base_url}LoaiSPs/${maLSP}`, config);

  return response.data;
};

const loaispService = {
  getLoaisps,
  createLoaisp,
  updateLoaisp,
  getLoaisp,
  getLoaispad,
  deleteLoaisp,
};

export default loaispService;
