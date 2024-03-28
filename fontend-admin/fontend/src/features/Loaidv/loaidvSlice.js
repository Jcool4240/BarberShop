import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import loaidvService from "./loaidvService";

export const getLoaidvs = createAsyncThunk(
  "loaidv/get-loaidvs",
  async (thunkAPI) => {
    try {
      return await loaidvService.getLoaidvs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createLoaidv = createAsyncThunk(
  "loaidv/create-loaidv",
  async (loaidvData, thunkAPI) => {
    try {
      return await loaidvService.createLoaidv(loaidvData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALoaidv = createAsyncThunk(
  "loaidv/get-loaidv",
  async (maLDV, thunkAPI) => {
    try {
      return await loaidvService.getLoaidv(maLDV);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALoaidvad = createAsyncThunk(
  "loaidv/get-loaidvad",
  async (maCH, thunkAPI) => {
    try {
      return await loaidvService.getLoaidvad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getALoaidvcn = createAsyncThunk(
  "loaidv/get-loaidvcn",
  async (maCN, thunkAPI) => {
    try {
      return await loaidvService.getLoaidvcn(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateALoaidv = createAsyncThunk(
  "loaidv/update-loaidv",
  async (loaidvData, thunkAPI) => {
    try {
      return await loaidvService.updateLoaidv(loaidvData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteALoaidv = createAsyncThunk(
  "loaidv/delete-loaidv",
  async (maLDV, thunkAPI) => {
    try {
      return await loaidvService.deleteLoaidv(maLDV);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Loaidvs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const loaidvSlice = createSlice({
  name: "loaidv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoaidvs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoaidvs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Loaidvs = action.payload;
      })
      .addCase(getLoaidvs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createLoaidv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLoaidv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdLoaidv = action.payload;
      })
      .addCase(createLoaidv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateALoaidv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateALoaidv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedLoaidv = action.payload;
      })
      .addCase(updateALoaidv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALoaidv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALoaidv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loaidvTenLDV = action.payload.tenLDV;
        state.loaidvMaCN = action.payload.maCN;
        state.loaidvMaLDV = action.payload.maLDV;
      })
      .addCase(getALoaidv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getALoaidvad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALoaidvad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Loaidvs = action.payload;
      })
      .addCase(getALoaidvad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(getALoaidvcn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getALoaidvcn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Loaidvs = action.payload;
      })
      .addCase(getALoaidvcn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteALoaidv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteALoaidv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedLoaidv = action.payload.tenLDV;
      })
      .addCase(deleteALoaidv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default loaidvSlice.reducer;