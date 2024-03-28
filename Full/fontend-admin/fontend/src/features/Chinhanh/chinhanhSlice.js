import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import chinhanhService from "./chinhanhService";

export const getChinhanhs = createAsyncThunk(
  "chinhanh/get-chinhanhs",
  async (thunkAPI) => {
    try {
      return await chinhanhService.getChinhanhs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createChinhanh = createAsyncThunk(
  "chinhanh/create-chinhanh",
  async (chinhanhData, thunkAPI) => {
    try {
      return await chinhanhService.createChinhanh(chinhanhData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAChinhanh = createAsyncThunk(
  "chinhanh/get-chinhanh",
  async (maCN, thunkAPI) => {
    try {
      return await chinhanhService.getChinhanh(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAChinhanhad = createAsyncThunk(
  "chinhanh/get-chinhanhad",
  async (maCH, thunkAPI) => {
    try {
      return await chinhanhService.getChinhanhad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAChinhanh = createAsyncThunk(
  "chinhanh/update-chinhanh",
  async (chinhanhData, thunkAPI) => {
    try {
      return await chinhanhService.updateChinhanh(chinhanhData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAChinhanh = createAsyncThunk(
  "chinhanh/delete-chinhanh",
  async (maCN, thunkAPI) => {
    try {
      return await chinhanhService.deleteChinhanh(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Chinhanhs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const chinhanhSlice = createSlice({
  name: "chinhanh",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChinhanhs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChinhanhs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Chinhanhs = action.payload;
      })
      .addCase(getChinhanhs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createChinhanh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChinhanh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdChinhanh = action.payload;
      })
      .addCase(createChinhanh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAChinhanh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAChinhanh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedChinhanh = action.payload;
      })
      .addCase(updateAChinhanh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAChinhanh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAChinhanh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.chinhanhTenCN = action.payload.tenCN;
        state.chinhanhMaCN = action.payload.maCN;
      })
      .addCase(getAChinhanh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAChinhanhad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAChinhanhad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Chinhanhs = action.payload;
      })
      .addCase(getAChinhanhad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAChinhanh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAChinhanh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedChinhanh = action.payload.tenCN;
      })
      .addCase(deleteAChinhanh.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default chinhanhSlice.reducer;