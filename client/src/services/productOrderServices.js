import * as httpRequest from '../utils/httpRequest';

export const getChiTietDonHang = async () => {
    try {
        const res = await httpRequest.get('ChiTietDonHang');

        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const getChiTietDonHangById = async (id) => {
    try {
        const res = await httpRequest.get(`ChiTietDonHang/${id}`, {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createChiTietDonHang = async ({ maDH, maSP, soLuong }) => {
    try {
        const res = await httpRequest.post('https://localhost:7213/api/ChiTietDonHang', {
            maDH,
            maSP,
            soLuong
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const updateChiTietDonHang = async (id, name, content, video, courseCode) => {
    try {
        const res = await httpRequest.put(`ChiTietDonHang/${id}`, {
            tenBH: name,
            noiDungBH: content,
            content: video,
            video: video,
            maKH: courseCode,
        });

        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const deleteChiTietDonHang = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`ChiTietDonHang/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
