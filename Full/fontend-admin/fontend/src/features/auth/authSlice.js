import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isSuccessRole: false,
  isSuccessLogin: false,
  isSuccessLogout: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});

export const getAuths = createAsyncThunk(
  "auth/get-auths",
  async (thunkAPI) => {
    try {
      return await authService.getAuths();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getRoles = createAsyncThunk(
  "auth/get-roles",
  async (thunkAPI) => {
    try {
      return await authService.getRoles();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createRole = createAsyncThunk(
  "auth/new-role",
  async (newrole, thunkAPI) => {
    try {
      return await authService.createRole(newrole);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessLogin = true;
        state.isSuccessLogout = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccessLogin = false;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccessLogin = false;
        state.isSuccessLogout = true;
        state.isError = false;
        state.user = null; // Xóa thông tin người dùng từ state
        state.message = "Logout successfully";
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccessLogout = false;
        state.message = "Logout failed";
      })
      .addCase(getAuths.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuths.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.auth = action.payload;
      })
      .addCase(getAuths.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getRoles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isEdit = false;
        state.role = action.payload;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isSuccessRole = true;
        state.createdRole = action.payload;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.isSuccessRole = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
