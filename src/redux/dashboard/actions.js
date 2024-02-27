// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { apiPost, apiGet, apiPut } from "../../service/apiService";
// import { API_URL } from "../../utils/apiConstants";
// import { setUserDataInfo } from "../auth/slice";

// export const getProfile = createAsyncThunk(
//   "dashboard/getProfile",
//   async (payload, {dispatch}) => {
//     return apiGet(API_URL.getProfile)
//       .then((res) => {
//         // payload.callBack();
//         dispatch(setUserDataInfo({imgUrl: res.data?.data.imgUrl}))
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );

// export const uploadProfileDocument = createAsyncThunk(
//   "dashboard/uploadProfileDocument",
//   async (payload) => {
//     return apiPost(API_URL.uploadProfileDocument, payload)
//       .then((res) => {
//         // payload.callBack();
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );

// export const uploadProfileImage = createAsyncThunk(
//   "dashboard/uploadProfileImage",
//   async (payload, {dispatch}) => {
//     return apiPut(API_URL.uploadProfileImage, payload.data)
//       .then((res) => {
//         dispatch(getProfile())
//         payload.callBack();
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );

// export const updateProfileData = createAsyncThunk(
//   "dashboard/updateProfileData",
//   async (payload, {dispatch}) => {
//     return apiPut(API_URL.updateProfileData, payload.data)
//       .then((res) => {
//         dispatch(getProfile())
//        if( payload.callBack){
//         payload.callBack();
//        }
      
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );

// export const changePassword = createAsyncThunk(
//   "dashboard/changePassword",
//   async (payload) => {
//     return apiPost(API_URL.changePassword, payload)
//       .then((res) => {
//         // payload.callBack();
//         return res.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }
// );
