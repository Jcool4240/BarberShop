import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import sanphamService from "./sanphamService";

export const getSanphams = createAsyncThunk(
  "sanpham/get-sanphams",
  async (thunkAPI) => {
    try {
      return await sanphamService.getSanphams();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createSanpham = createAsyncThunk(
  "sanpham/create-sanpham",
  async (sanphamData, thunkAPI) => {
    try {
      return await sanphamService.createSanpham(sanphamData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getASanpham = createAsyncThunk(
  "sanpham/get-sanpham",
  async (maSP, thunkAPI) => {
    try {
      return await sanphamService.getSanpham(maSP);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getASanphamad = createAsyncThunk(
  "sanpham/get-sanphamad",
  async (maCH, thunkAPI) => {
    try {
      return await sanphamService.getSanphamad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateASanpham = createAsyncThunk(
  "sanpham/update-sanpham",
  async (sanphamData, thunkAPI) => {
    try {
      return await sanphamService.updateSanpham(sanphamData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteASanpham = createAsyncThunk(
  "sanpham/delete-sanpham",
  async (maSP, thunkAPI) => {
    try {
      return await sanphamService.deleteSanpham(maSP);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Sanphams: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const sanphamSlice = createSlice({
  name: "sanpham",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSanphams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSanphams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Sanphams = action.payload;
      })
      .addCase(getSanphams.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createSanpham.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSanpham.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdSanpham = action.payload;
      })
      .addCase(createSanpham.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateASanpham.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateASanpham.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedSanpham = action.payload;
      })
      .addCase(updateASanpham.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getASanpham.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getASanpham.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sanphamMaSP = action.payload.maSP;
        state.sanphamTenSP = action.payload.tenSP;
        state.sanphamGiaSP = action.payload.giaSP;
        state.sanphamHinh = action.payload.hinh;
        state.sanphamMoTa = action.payload.moTa;
        state.sanphamSoLuongTon = action.payload.soLuongTon;
        state.sanphamMaLSP = action.payload.maLSP;
        state.sanphamMaCH = action.payload.maCH;
      })
      .addCase(getASanpham.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getASanphamad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getASanphamad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Sanphams = action.payload;
      })
      .addCase(getASanphamad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteASanpham.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteASanpham.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedSanpham = action.payload.tenSP;
      })
      .addCase(deleteASanpham.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default sanphamSlice.reducer;