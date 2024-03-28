import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import tctService from "./tctService";

export const getTcts = createAsyncThunk(
  "tct/get-tcts",
  async (thunkAPI) => {
    try {
      return await tctService.getTcts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createTct = createAsyncThunk(
  "tct/create-tct",
  async (tctData, thunkAPI) => {
    try {
      return await tctService.createTct(tctData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getATct = createAsyncThunk(
  "tct/get-tct",
  async (maTCT, thunkAPI) => {
    try {
      return await tctService.getTct(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getATctad = createAsyncThunk(
  "tct/get-tctad",
  async (maCH, thunkAPI) => {
    try {
      return await tctService.getTctad(maCH);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getATctcn = createAsyncThunk(
  "tct/get-tctcn",
  async (maCN, thunkAPI) => {
    try {
      return await tctService.getTctcn(maCN);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateATct = createAsyncThunk(
  "tct/update-tct",
  async (tctData, thunkAPI) => {
    try {
      return await tctService.updateTct(tctData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteATct = createAsyncThunk(
  "tct/delete-tct",
  async (maTCT, thunkAPI) => {
    try {
      return await tctService.deleteTct(maTCT);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  Tcts: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
  message: "",
};
export const tctSlice = createSlice({
  name: "tct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTcts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTcts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Tcts = action.payload;
      })
      .addCase(getTcts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createTct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdTct = action.payload;
      })
      .addCase(createTct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateATct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateATct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = true;
        state.updatedTct = action.payload;
      })
      .addCase(updateATct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getATct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getATct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.tctMaTCT = action.payload.maTCT;
        state.tctTenTCT = action.payload.tenTCT;
        state.tctMaCN = action.payload.maCN;
      })
      .addCase(getATct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getATctad.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getATctad.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Tcts = action.payload;
      })
      .addCase(getATctad.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getATctcn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getATctcn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.Tcts = action.payload;
      })
      .addCase(getATctcn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteATct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteATct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedTct = action.payload.tenTCT;
      })
      .addCase(deleteATct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default tctSlice.reducer;