import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import dichvuService from "./dichvuService";

export const getDichvus = createAsyncThunk(
  "dichvu/get-dichvus",
  async (thunkAPI) => {
    try {
      return await dichvuService.getDichvus();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createDichvu = createAsyncThunk(
  "dichvu/create-dichvu",
  async (dichvuData, thunkAPI) => {
    try {
      return await dichvuService.createDichvu(dichvuData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getADichvu = createAsyncThunk(
  "dichvu/get-dichvu",
  async (maDV, thunkAPI) => {
    try {
      return await dichvuService.getDichvu(maDV);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getADichvuad = createAsyncThunk(
  "dichvu/get-dichvuad",
  async (maCH, thunkAPI) => {
    try {
      return await dichvuService.getDichvuad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getADichvucn = createAsyncThunk(
  "dichvu/get-dichvucn",
  async (maCN, thunkAPI) => {
    try {
      return await dichvuService.getDichvucn(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateADichvu = createAsyncThunk(
  "dichvu/update-dichvu",
  async (dichvuData, thunkAPI) => {
    try {
      return await dichvuService.updateDichvu(dichvuData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteADichvu = createAsyncThunk(
  "dichvu/delete-dichvu",
  async (maDV, thunkAPI) => {
    try {
      return await dichvuService.deleteDichvu(maDV);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Dichvus: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const dichvuSlice = createSlice({
  name: "dichvu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDichvus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDichvus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Dichvus = action.payload;
      })
      .addCase(getDichvus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createDichvu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDichvu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdDichvu = action.payload;
      })
      .addCase(createDichvu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateADichvu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateADichvu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedDichvu = action.payload;
      })
      .addCase(updateADichvu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getADichvu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getADichvu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.dichvuMaDV = action.payload.maDV;
        state.dichvuTenDV = action.payload.tenDV;
        state.dichvuGiaDV = action.payload.giaDV;
        state.dichvuHinh = action.payload.hinh;
        state.dichvuMoTa = action.payload.moTa;
        state.dichvuMaLDV = action.payload.maLDV;
      })
      .addCase(getADichvu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getADichvuad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getADichvuad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Dichvus = action.payload;
      })
      .addCase(getADichvuad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getADichvucn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getADichvucn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Dichvus = action.payload;
      })
      .addCase(getADichvucn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteADichvu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteADichvu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedDichvu = action.payload.tenDV;
      })
      .addCase(deleteADichvu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default dichvuSlice.reducer;