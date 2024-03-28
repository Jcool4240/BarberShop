import axios from "axios";
import {base_url} from "../../utils/axiosConfig";

const getChinhanhs = async () => {
  const response = await axios.get(`${base_url}ChiNhanhs/`);

  return response.data;
};

const createChinhanh = async (chinhanh) => {
  const response = await axios.post(`${base_url}ChiNhanhs/`, chinhanh);

  return response.data;
};

const updateChinhanh = async (chinhanh) => {
  const response = await axios.put(
    `${base_url}ChiNhanhs/${chinhanh.maCN}`,
    { maCN: chinhanh.chinhanhData.maCN, tenCN: chinhanh.chinhanhData.tenCN, maCH: chinhanh.chinhanhData.maCH }
  );

  return response.data;
};

const getChinhanh = async (maCN) => {
  const response = await axios.get(`${base_url}ChiNhanhs/${maCN}`);

  return response.data;
};

const getChinhanhad = async (maCH) => {
  const response = await axios.get(`${base_url}CNAD/${maCH}`);

  return response.data;
};

const deleteChinhanh = async (maCN) => {
  const response = await axios.delete(`${base_url}ChiNhanhs/${maCN}`);

  return response.data;
};

const chinhanhService = {
  getChinhanhs,
  createChinhanh,
  updateChinhanh,
  getChinhanh,
  getChinhanhad,
  deleteChinhanh,
};

export default chinhanhService;
