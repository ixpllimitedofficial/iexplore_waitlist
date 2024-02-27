// import { useDispatch, useSelector } from "react-redux";
// import { setUserInfo } from "../../redux/auth/slice";

// export const getStorageData = () => {
//   const storageData = JSON.parse(localStorage.getItem("storageData"));
//   return storageData;
// };

// export const getToken = () => {
//   const token = JSON.parse(localStorage.getItem("userToken"));

//   if (token === null || token === undefined) {
//     return {};
//   } else {
//     return token.userToken.accessToken;
//   }
// };

// export const getUserData = () => {
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   return userData;
// };

// export const clearLocalStorage = () => {
//   localStorage.removeItem("storageData");
//   localStorage.removeItem("userData");
//   localStorage.removeItem("userToken");
// };

// export const useAuth = () => {
//   const { userToken, userData } = useSelector((state) => state.authReducer);
//   const dispatch = useDispatch()

//   // local storage tokens
//   const isTokenAvailable = JSON.parse(localStorage.getItem("userToken"));

//   if (!userData){
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     const profileData = JSON.parse(localStorage.getItem("profileData"));
//     dispatch(setUserInfo({userToken: isTokenAvailable, userData, profileData}))
//   }
//   if (userToken !== null || isTokenAvailable !== null) {
//     return true;
//   } else {
//     return false;
//   }
// };
