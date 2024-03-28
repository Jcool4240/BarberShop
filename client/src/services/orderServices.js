import * as httpRequest from '../utils/httpRequest';

export const getOrder = async () => {
    try {
        const res = await httpRequest.get('DonHangs');

        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const getOrderById = async (id) => {
    try {
        const res = await httpRequest.get(`DonHangs/${id}`, {
            params: {},
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const createOrder = async (trangThaiDH = 0, tongTien, diaChiGH, soDienThoai, id ) => {
    try {
        const res = await httpRequest.post('https://localhost:7213/api/DonHangs/dat-hang', {
            trangThaiDH: trangThaiDH,
            tongTien,
            diaChiGH,
            soDienThoai,
            id,
        });
        return res.data;
    } catch (error) {
        console.log('error: ', error.message);
    }
};

export const updateOrder = async (id, name, content, video, courseCode) => {
    try {
        const res = await httpRequest.put(`DonHangs/${id}`, {
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

export const deleteOrder = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`DonHangs/${id}`);
        return res;
    } catch (error) {
        console.log('error: ', error.message);
    }
};
