import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getSanPhams = async()=>{
    const response = await axios.get(`${base_url}SanPhams?GiaGiamDan=false&GiaTangDan=false&TenAtoZ=false&TenZtoA=false`);
    if(response.data){
        return response.data;
    }
};

const getSanPhamGiaGiamDan = async()=>{
    const response = await axios.get(`${base_url}SanPhams?GiaGiamDan=true&GiaTangDan=false&TenAtoZ=false&TenZtoA=false`);
    if(response.data){
        return response.data;
    }
};

const getSanPhamsGiaTangDan = async()=>{
    const response = await axios.get(`${base_url}SanPhams?GiaGiamDan=true&GiaTangDan=true&TenAtoZ=false&TenZtoA=false`);
    if(response.data){
        return response.data;
    }
};

const getSanPhamTenAtoZ = async()=>{
    const response = await axios.get(`${base_url}SanPhams?GiaGiamDan=false&GiaTangDan=false&TenAtoZ=true&TenZtoA=true`);
    if(response.data){
        return response.data;
    }

};

const getSanPhamTenZtoA = async()=>{
    const response = await axios.get(`${base_url}SanPhams?GiaGiamDan=false&GiaTangDan=false&TenAtoZ=false&TenZtoA=true`);
    if(response.data){
        return response.data;
    }
};


const getSingleSanPhams = async(maSP)=>{
    const response = await axios.get(`${base_url}SanPhams/${maSP}`);
    if(response.data){
        return response.data;
    }
};
const sanphamService = {
    getSanPhams,
    getSingleSanPhams,
    getSanPhamGiaGiamDan,
    getSanPhamsGiaTangDan,
    getSanPhamTenAtoZ,
    getSanPhamTenZtoA
};

export default sanphamService;
