import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import loaidvReducer from "../features/Loaidv/loaidvSlice";
import loaispReducer from "../features/Loaisp/loaispSlice";
import chReducer from "../features/Ch/chSlice";
import dichvuReducer from '../features/Dichvu/dichvuSlice';
import sanphamReducer from '../features/Sanpham/sanphamSlice';
import chinhanhReducer from '../features/Chinhanh/chinhanhSlice';
import tctReducer from '../features/Tct/tctSlice';
import lichhenReducer from '../features/Lichhen/lichhenSlice';

export const store = configureStore({
  reducer: { 
    auth: authReducer, 
    loaidv: loaidvReducer, 
    loaisp: loaispReducer,
    ch: chReducer,
    dichvu: dichvuReducer,
    sanpham: sanphamReducer,
    chinhanh: chinhanhReducer,
    tct: tctReducer,
    lichhen: lichhenReducer,
  },
});
