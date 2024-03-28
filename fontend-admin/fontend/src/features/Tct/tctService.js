import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getTcts = async () => {
  const response = await axios.get(`${base_url}ThoCatTocs/`);

  return response.data;
};

const createTct = async (tct) => {
  const response = await axios.post(`${base_url}ThoCatTocs/`, tct, config);

  return response.data;
};

const updateTct = async (tct) => {
  const response = await axios.put(
    `${base_url}ThoCatTocs/${tct.maTCT}`,
    {
      maTCT: tct.tctData.maTCT,
      tenTCT: tct.tctData.tenTCT,
      maCN: tct.tctData.maCN,
      maCH: tct.tctData.maCH,
    },
    config
  );

  return response.data;
};

const getTct = async (maTCT) => {
  const response = await axios.get(`${base_url}ThoCatTocs/${maTCT}`, config);

  return response.data;
};

const getTctad = async (maCH) => {
  const response = await axios.get(`${base_url}TCTAD/${maCH}`, config);

  return response.data;
};

const getTctcn = async (maCN) => {
  const response = await axios.get(`${base_url}TCTCN/${maCN}`, config);

  return response.data;
};

const deleteTct = async (maTCT) => {
  const response = await axios.delete(`${base_url}ThoCatTocs/${maTCT}`, config);

  return response.data;
};

const tctService = {
  getTcts,
  createTct,
  updateTct,
  getTct,
  getTctad,
  getTctcn,
  deleteTct,
};

export default tctService;
