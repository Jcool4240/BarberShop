import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getTcts = async () => {
  const response = await axios.get(`${base_url}ThoCatTocs/`);

  return response.data;
};

const createTct = async (tct) => {
  const response = await axios.post(`${base_url}ThoCatTocs/`, tct);

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
    }
  );

  return response.data;
};

const getTct = async (maTCT) => {
  const response = await axios.get(`${base_url}ThoCatTocs/${maTCT}`);

  return response.data;
};

const getTctad = async (maCN) => {
  try {
    const response = await axios.get(`${base_url}TCTCN/${maCN}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Xử lý khi có lỗi 404 (Not Found)
      throw new Error("No data found for TCTCN");
    } else {
      // Ném lỗi lại để được xử lý ở phía component hoặc slice
      throw error;
    }
  }
};

const deleteTct = async (maTCT) => {
  const response = await axios.delete(`${base_url}ThoCatTocs/${maTCT}`);

  return response.data;
};

const tctService = {
  getTcts,
  createTct,
  updateTct,
  getTct,
  getTctad,
  deleteTct,
};

export default tctService;
