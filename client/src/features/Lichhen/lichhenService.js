import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getLichhens = async () => {
  const response = await axios.get(`${base_url}LichHens/`);

  return response.data;
};

const createLichhen = async (lichhen) => {
  const response = await axios.post(`${base_url}LichHens/`, lichhen);

  return response.data;
};

const updateLichhen = async (lichhen) => {
  const response = await axios.put(
    `${base_url}LichHens/${lichhen.maLH}`,
    {
      maLH: lichhen.lichhenData.maLH,
      phone: lichhen.lichhenData.phone,
      name: lichhen.lichhenData.name,
      customer_number: lichhen.lichhenData.customer_number,
      maCN: lichhen.lichhenData.maCN,
      ghiChu: lichhen.lichhenData.ghiChu,
      date: lichhen.lichhenData.date,
      time: lichhen.lichhenData.time,
      maDV: lichhen.lichhenData.maDV,
      maTCT: lichhen.lichhenData.maTCT,
      maCH: lichhen.lichhenData.maCH,
    }
  );

  return response.data;
};

const getLichhen = async (maLH) => {
  const response = await axios.get(`${base_url}LichHens/${maLH}`);

  return response.data;
};

const getLichhenad = async (maCH) => {
  const response = await axios.get(`${base_url}LHAD/${maCH}`);

  return response.data;
};

const getLichhenus = async (iduser) => {
  const response = await axios.get(`${base_url}LHUS/${iduser}`);

  return response.data;
};

const deleteLichhen = async (maLH) => {
  const response = await axios.delete(`${base_url}LichHens/${maLH}`);

  return response.data;
};

const lichhenService = {
  getLichhens,
  createLichhen,
  updateLichhen,
  getLichhen,
  getLichhenad,
  getLichhenus,
  deleteLichhen,
};

export default lichhenService;
