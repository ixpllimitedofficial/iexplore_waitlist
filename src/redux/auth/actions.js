// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { apiPost, apiGet } from "../../service/apiService";
// import { API_URL } from "../../utils/apiConstants";

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (payload) => {
//     return apiPost(API_URL.registerUser, payload)
//       .then((res) => {
//         // payload.callBack();
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );


// export const loginUser = createAsyncThunk("auth/loginUser", async (payload) => {
//   return apiPost(API_URL.login, payload)
//     .then((res) => {
//       // payload.callBack();
//       return res.data;
//     })
//     .catch((error) => {
//       return error;
//     });
// });


// export const getCategory = createAsyncThunk(
//   "auth/getCategory",
//   async (payload) => {
//     return apiGet(API_URL.categories, payload)
//       .then((res) => {
//         // payload.callBack();
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );

// export const forgotPassword = createAsyncThunk(
//   "auth/forgotPassword",
//   async (payload) => {
//     return apiPost(API_URL.forgotPassword, payload.data)
//       .then((res) => {
//         payload.callBack();
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );
