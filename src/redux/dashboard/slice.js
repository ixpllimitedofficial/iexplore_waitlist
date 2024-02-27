// import { createSlice } from "@reduxjs/toolkit";
// import {
//   getProfile,
//   uploadProfileDocument,
//   uploadProfileImage,
//   updateProfileData,
//   changePassword,
// } from "./actions";

// export const dashboardSlice = createSlice({
//   name: "dashboard",
//   initialState: {
//     profileData: null,
//     documentUploadSuccessful: false,
//     imageUploadSuccessful: false,
//     isProfileUpdateSuccessful: false,
//     isPasswordChanged: false,
//     isBtnLoading: false,
//   },
//   reducers: {
//     clearUploadingState: (state) => {
//       state.documentUploadSuccessful = false;
//       state.imageUploadSuccessful = false;
//       state.isProfileUpdateSuccessful = false;
//       state.isPasswordChanged = false;
//     },
//     setUserProfileData: (state, {payload}) =>{
//       state.profileData = payload
//     }
//   },
//   extraReducers: {
//     // ---------GET PROFILE---------/
//     [getProfile.pending]: (state) => {},
//     [getProfile.fulfilled]: (state, { payload }) => {
//       if (payload.status === "success") {
//         localStorage.setItem("profileData", JSON.stringify(payload.data));
//         state.profileData = payload.data;
//       }
//     },
//     [getProfile.rejected]: (state, load) => {},

//     // ---------UPLOAD PROFILE DOCUMENT---------/
//     [uploadProfileDocument.pending]: (state) => {
//       state.isBtnLoading = true;
//     },
//     [uploadProfileDocument.fulfilled]: (state, { payload }) => {
//       if (payload.status === "success") {
//         state.documentUploadSuccessful = true;
//         state.isBtnLoading = false;
//       } else {
//         state.isBtnLoading = false;
//       }
//     },
//     [uploadProfileDocument.rejected]: (state, load) => {
//       state.isBtnLoading = false;
//     },

//     // ---------UPLOAD PROFILE IMAGE---------/
//     [uploadProfileImage.pending]: (state) => {},
//     [uploadProfileImage.fulfilled]: (state, { payload }) => {
//       if (payload.status === "success") {
//         state.imageUploadSuccessful = true;
//       } else {
//         state.imageUploadSuccessful = false;
//       }
//     },
//     [uploadProfileImage.rejected]: (state, load) => {
//       state.imageUploadSuccessful = true;
//     },

//     // ---------UPDATE PROFILE DATA---------/
//     [updateProfileData.pending]: (state) => {
//       state.isBtnLoading = true;
//     },
//     [updateProfileData.fulfilled]: (state, { payload }) => {
//       if (payload.status === "success") {
//         state.isProfileUpdateSuccessful = true;
//         state.isBtnLoading = false;
//       } else {
//         state.isProfileUpdateSuccessful = false;
//         state.isBtnLoading = false;
//       }
//     },
//     [updateProfileData.rejected]: (state, load) => {
//       state.isProfileUpdateSuccessful = true;
//       state.isBtnLoading = false;
//     },

//     // ---------CHANGE PASSWORD---------/
//     [changePassword.pending]: (state) => {
//       state.isBtnLoading = true;
//     },
//     [changePassword.fulfilled]: (state, { payload }) => {
//       if (payload.status === "success") {
//         state.isPasswordChanged = true;
//         state.isBtnLoading = false;
//       } else {
//         state.isPasswordChanged = false;
//         state.isBtnLoading = false;
//       }
//     },
//     [changePassword.rejected]: (state, load) => {
//       state.isPasswordChanged = true;
//       state.isBtnLoading = false;
//     },
//   },
// });

// export const { clearUploadingState, setUserProfileData } = dashboardSlice.actions;

// export default dashboardSlice.reducer;
