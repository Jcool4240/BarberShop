import axios from "axios";
import {base_url} from "../../utils/axiosConfig";

const getDichvus = async () => {
  const response = await axios.get(`${base_url}DichVus/`);

  return response.data;
};

const createDichvu = async (dichvu) => {
  const response = await axios.post(`${base_url}DichVus/`, dichvu);

  return response.data;
};

const updateDichvu = async (dichvu) => {
  const response = await axios.put(
    `${base_url}DichVus/${dichvu.maDV}`,
    {
      maDV: dichvu.dichvuData.maDV,
      tenDV: dichvu.dichvuData.tenDV,
      giaDV: dichvu.dichvuData.giaDV,
      hinh: dichvu.dichvuData.hinh,
      moTa: dichvu.dichvuData.moTa,
      maLDV: dichvu.dichvuData.maLDV,
      maCH: dichvu.dichvuData.maCH,
    },
  );

  return response.data;
};

const getDichvu = async (maDV) => {
  const response = await axios.get(`${base_url}DichVus/${maDV}`);

  return response.data;
};

const getDichvuad = async (maCH) => {
  const response = await axios.get(`${base_url}DVAD/${maCH}`);

  return response.data;
};

const deleteDichvu = async (maDV) => {
  const response = await axios.delete(`${base_url}DichVus/${maDV}`);

  return response.data;
};

const dichvuService = {
  getDichvus,
  createDichvu,
  updateDichvu,
  getDichvu,
  getDichvuad,
  deleteDichvu,
};

export default dichvuService;
