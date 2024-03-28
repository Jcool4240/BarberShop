import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getLichhens = async () => {
  const response = await axios.get(`${base_url}LichHens/`);

  return response.data;
};

const createLichhen = async (lichhen) => {
  const response = await axios.post(`${base_url}LichHens/`, lichhen, config);

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
    },
    config
  );

  return response.data;
};

const getLichhen = async (maLH) => {
  const response = await axios.get(`${base_url}LichHens/${maLH}`, config);

  return response.data;
};

const getLichhenad = async (maCH) => {
  const response = await axios.get(`${base_url}LHAD/${maCH}`, config);

  return response.data;
};

const getLichhencn = async (maCN) => {
  const response = await axios.get(`${base_url}LHCN/${maCN}`, config);

  return response.data;
};

const getLichhentct = async (maTCT) => {
  const response = await axios.get(`${base_url}LHTCT/${maTCT}`, config);

  return response.data;
};

const deleteLichhen = async (maLH) => {
  const response = await axios.delete(`${base_url}LichHens/${maLH}`, config);

  return response.data;
};

const lichhenService = {
  getLichhens,
  createLichhen,
  updateLichhen,
  getLichhen,
  getLichhenad,
  getLichhencn,
  getLichhentct,
  deleteLichhen,
};

export default lichhenService;
