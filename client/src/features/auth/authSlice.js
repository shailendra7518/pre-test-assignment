// // src/features/auth/authSlice.js
// import { getToken } from '@chakra-ui/react';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode';
// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
// };

// // Async thunk for login
// export const login = createAsyncThunk('auth/login', async ({credentials,toast,navigate}, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:3000/api/auth/login', credentials);
    
//     return response.data;
//     navigate("/dashboard")
//   } catch (error) {
//     toast({
//         title: `Failed to login`,
//         status: "error",
//         isClosable: true,
//         position:"top"
//       })
//       localStorage.removeItem("token");
//     return rejectWithValue(error.message);
//   }
// });

// // Async thunk for signup
// export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post('http://localhost:3000/api/auth/signup', userData);
//     return response.data;
//   } catch (error) {
   
//     // return rejectWithValue(error.response.data);
//   }
// });
// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//       logout(state) {
//         state.user = null;
//         state.token = null;
//         localStorage.removeItem('token');
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(login.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(login.fulfilled, (state, action) => {
//           state.loading = false;
//           state.token = action.payload.token;
//           state.user = jwtDecode(action.payload.token);
//           localStorage.setItem('token', action.payload.token);
//         })
//         .addCase(login.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         })
//         .addCase(signup.pending, (state) => {
//           state.loading = true;
//           state.error = null;
//         })
//         .addCase(signup.fulfilled, (state, action) => {
//           state.loading = false;
//           state.token = action.payload.token;
//           state.user = jwtDecode(action.payload.token);
//           localStorage.setItem('token', action.payload.token);
//         })
//         .addCase(signup.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         });
//     },
//   });
  
//   export const { logout } = authSlice.actions;
//   export default authSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = jwtDecode(action.payload.token);
      localStorage.setItem('token', action.payload.token);
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.user = jwtDecode(action.payload.token);
      localStorage.setItem('token', action.payload.token);
    },
    signupFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, loginFailure, signupSuccess, signupFailure, logout } = authSlice.actions;
export default authSlice.reducer;
