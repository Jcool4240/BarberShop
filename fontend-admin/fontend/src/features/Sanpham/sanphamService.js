import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getSanphams = async () => {
  const response = await axios.get(`${base_url}SanPhams/`);

  return response.data;
};

const createSanpham = async (sanpham) => {
  const response = await axios.post(`${base_url}SanPhams/`, sanpham, config);

  return response.data;
};

const updateSanpham = async (sanpham) => {
  const response = await axios.put(
    `${base_url}SanPhams/${sanpham.maSP}`,
    {
      maSP: sanpham.sanphamData.maSP,
      tenSP: sanpham.sanphamData.tenSP,
      giaSP: sanpham.sanphamData.giaSP,
      hinh: sanpham.sanphamData.hinh,
      moTa: sanpham.sanphamData.moTa,
      soLuongTon: sanpham.sanphamData.soLuongTon,
      maLSP: sanpham.sanphamData.maLSP,
      maCH: sanpham.sanphamData.maCH,
    },
    config
  );

  return response.data;
};

const getSanpham = async (maSP) => {
  const response = await axios.get(`${base_url}SanPhams/${maSP}`, config);

  return response.data;
};

const getSanphamad = async (maCH) => {
  const response = await axios.get(`${base_url}SPAD/${maCH}`, config);

  return response.data;
};

const deleteSanpham = async (maSP) => {
  const response = await axios.delete(`${base_url}SanPhams/${maSP}`, config);

  return response.data;
};

const sanphamService = {
  getSanphams,
  createSanpham,
  updateSanpham,
  getSanpham,
  getSanphamad,
  deleteSanpham,
};

export default sanphamService;
