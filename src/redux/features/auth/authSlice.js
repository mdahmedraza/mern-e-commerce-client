import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';
import {toast} from 'react-toastify';

const initialState = {
    isLoggedIn: false,
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

// register user
export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try{
            return await authService.register(userData)
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)
// login user
export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try{
            return await authService.login(userData)
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)
// logout user
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try{
            return await authService.logout()
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)
// getLoginStatus
export const getLoginStatus = createAsyncThunk(
    "auth/getLoginStatus",
    async (_, thunkAPI) => {
        try{
            return await authService.getLoginStatus()
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)
// get user
export const getUser = createAsyncThunk(
    "auth/getUser",
    async (_, thunkAPI) => {
        try{
            return await authService.getUser()
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)
// update user
export const updateUser = createAsyncThunk(
    "auth/updateUser",
    async (userData, thunkAPI) => {
        try{
            return await authService.updateUser(userData)
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)
// // update photo
export const updatePhoto = createAsyncThunk(
    "auth/updatePhoto",
    async (userData, thunkAPI) => {
        try{
            return await authService.updatePhoto(userData)
        }catch(error){
            const message = (error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        RESET_AUTH(state){
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            // register user
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.user = action.payload
                toast.success("registration successful")
                
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
                toast.success(action.payload);
            })
            // login user
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.user = action.payload
                toast.success("login successful")
                
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
                toast.success(action.payload);
            })
            // logout user
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = false;
                state.user = null;
                toast.success(action.payload);
                
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.success(action.payload);
            })
            // getLoginStatus
            .addCase(getLoginStatus.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getLoginStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = action.payload;
                if(action.payload.message === "invalid signature") {
                    state.isLoggedIn = false;
                }
            })
            .addCase(getLoginStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            // getUser
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.user = action.payload;

            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })
            // updateUser
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.user = action.payload;
                toast.success("user updated")

            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })
            // updatePhoto
            .addCase(updatePhoto.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePhoto.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isLoggedIn = true;
                state.user = action.payload;
                toast.success("user photo updated")

            })
            .addCase(updatePhoto.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                toast.error(action.payload)
            })
    }
})

export const {RESET_AUTH} = authSlice.actions;

export default authSlice.reducer;