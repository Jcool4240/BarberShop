import axios from "axios";



const postOrder = async (tongTien,
    diaChiGH,
    soDienThoai,
    id
    ) => {
    const response = await axios.post(`https://localhost:7213/api/DonHangs/dat-hang`, {
        trangThaiDH: 0,
        tongTien,
        diaChiGH,
        soDienThoai,
        id: "bf3085cb-16e7-4dd8-8f54-401da1d34ab2",

      });
    if (response.data) {
        return response.data;
    }
}
export const order =  {postOrder} 