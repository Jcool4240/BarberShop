import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import lichhenService from "./lichhenService";

export const getLichhens = createAsyncThunk(
  "lichhen/get-lichhens",
  async (thunkAPI) => {
    try {
      return await lichhenService.getLichhens();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createLichhen = createAsyncThunk(
  "lichhen/create-lichhen",
  async (lichhenData, thunkAPI) => {
    try {
      return await lichhenService.createLichhen(lichhenData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALichhen = createAsyncThunk(
  "lichhen/get-lichhen",
  async (maTCT, thunkAPI) => {
    try {
      return await lichhenService.getLichhen(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALichhenad = createAsyncThunk(
  "lichhen/get-lichhenad",
  async (maCH, thunkAPI) => {
    try {
      return await lichhenService.getLichhenad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALichhencn = createAsyncThunk(
  "lichhen/get-lichhencn",
  async (maCN, thunkAPI) => {
    try {
      return await lichhenService.getLichhencn(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALichhentct = createAsyncThunk(
  "lichhen/get-lichhentct",
  async (maTCT, thunkAPI) => {
    try {
      return await lichhenService.getLichhentct(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateALichhen = createAsyncThunk(
  "lichhen/update-lichhen",
  async (lichhenData, thunkAPI) => {
    try {
      return await lichhenService.updateLichhen(lichhenData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteALichhen = createAsyncThunk(
  "lichhen/delete-lichhen",
  async (maTCT, thunkAPI) => {
    try {
      return await lichhenService.deleteLichhen(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Lichhens: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const lichhenSlice = createSlice({
  name: "lichhen",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLichhens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLichhens.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Lichhens = action.payload;
      })
      .addCase(getLichhens.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createLichhen.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLichhen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdLichhen = action.payload;
      })
      .addCase(createLichhen.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateALichhen.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateALichhen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedLichhen = action.payload;
      })
      .addCase(updateALichhen.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALichhen.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALichhen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.lichhenMaLH = action.payload.maLH;
        state.lichhenPhone = action.payload.phone;
        state.lichhenName = action.payload.name;
        state.lichhenCustomer_number = action.payload.customer_number;
        state.lichhenMaCN = action.payload.maCN;
        state.lichhenGhiChu = action.payload.ghiChu;
        state.lichhenDate = action.payload.date;
        state.lichhenTime = action.payload.time;
        state.lichhenMaDV = action.payload.maDV;
        state.lichhenMaTCT = action.payload.maTCT;
      })
      .addCase(getALichhen.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALichhenad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALichhenad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Lichhens = action.payload;
      })
      .addCase(getALichhenad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALichhencn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALichhencn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Lichhens = action.payload;
      })
      .addCase(getALichhencn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALichhentct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALichhentct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Lichhens = action.payload;
      })
      .addCase(getALichhentct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteALichhen.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteALichhen.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedLichhen = action.payload.name;
      })
      .addCase(deleteALichhen.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default lichhenSlice.reducer;
