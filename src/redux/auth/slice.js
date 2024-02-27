// import { createSlice } from "@reduxjs/toolkit";
// import {
//   registerUser,
//   loginUser,
//   getCategory,
//   forgotPassword,
// } from "./actions";

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     something: false,
//     isBtnLoading: false,
//     isUserRegistered: false,
//     registeredUserEmail: "",
//     userData: null,
//     userToken: null,
//     isUserVerified: false,
//     unverifiedUserEmail: "",
//     redirectUnverifiedUser: false,
//     isUserLoggedIn: false,
//     category: [],
//     categoryState: "Loading categories",
//     forgotPasswordEmail: null,
//   },
//   reducers: {
//     setPageTitle: (state, {payload}) => {
//       state.pageTitle = payload;
//     },
//     getUnregisteredEmail: (state, {payload}) => {
//       state.unverifiedUserEmail = payload;
//     },
//     clearRegisteredUserEmail: (state) => {
//       state.isUserVerified = false;
//       state.registeredUserEmail = "";
//     },
//     clearUnverifiedUserState: (state) => {
//       state.redirectUnverifiedUser = false;
//     },
//     clearIsEmailExistingState: (state, payload) => {
//       state.isEmailExisting = null;
//     },
//     setUserInfo: (state, {payload}) =>{
//       for (const key in payload) {
//         state[key] = payload[key];
//       }
//     },
//     setUserDataInfo: (state, {payload}) =>{
//       state.userData = {...state.userData, ...payload}
//     },
//     logout: (state) => {
//       localStorage.removeItem("storageData");
//       localStorage.removeItem("userData");
//       localStorage.removeItem("userToken");
//       localStorage.removeItem("profileData");

//       state.userData = null;
//       state.userToken = null;

//       state.redirectUnverifiedUser = false;
//       state.isUserVerified = false;
//       state.isUserLoggedIn = false;

//       state.registeredUserEmail = "";
//       state.isEmailExisting = null;
//     },
//   },
//   extraReducers: {
//     // ---------REGISTER User---------/
//     [registerUser.pending]: (state) => {
//       state.isBtnLoading = true;
//     },
//     [registerUser.fulfilled]: (state, { payload }) => {
//       //check
//       if (payload.status === "success") {
//         state.isUserRegistered = true;
//         state.registeredUserEmail = payload.data.email;
//         state.isBtnLoading = false;
//       } else {
//         state.isBtnLoading = false;
//       }
//     },
//     [registerUser.rejected]: (state, load) => {
//       state.isBtnLoading = false;
//     },


//     // ---------LOGIN---------/
//     [loginUser.pending]: (state) => {
//       state.isBtnLoading = true;
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       //check
//       if (payload.status === "success") {
//         localStorage.setItem("storageData", JSON.stringify(payload.data));
//         localStorage.setItem("userData", JSON.stringify(payload.data.user));
//         localStorage.setItem("userToken", JSON.stringify(payload.data.tokens));

//         state.userData = payload.data.user;
//         state.userToken = payload.data.tokens;
//         state.isUserLoggedIn = true;
//       } else {
//         const errorMessage = payload?.response?.data?.message;

//         if (errorMessage?.includes("verify your email")) {
//           state.redirectUnverifiedUser = true;
//         }
//       }
//       state.isBtnLoading = false;
//     },
//     [loginUser.rejected]: (state, load) => {
//       state.isBtnLoading = false;
//     },


//     // ---------Forget Password---------/
//     [forgotPassword.pending]: (state) => {
//       state.isBtnLoading = true;
//     },
//     [forgotPassword.fulfilled]: (state, { meta }) => {
//       var params = meta.arg.data;
//       state.forgotPasswordEmail = params.email;
//       state.isBtnLoading = false;
//     },
//     [forgotPassword.rejected]: (state, load) => {
//       state.isBtnLoading = false;
//     },
//   },
// });

// export const {
//   logout,
//   getUnregisteredEmail,
//   clearRegisteredUserEmail,
//   clearUnverifiedUserState,
//   clearIsEmailExistingState,
//   setUserInfo,
//   setUserDataInfo
// } = authSlice.actions;

// export default authSlice.reducer;
