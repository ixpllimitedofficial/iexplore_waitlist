import axios from "axios";

import { getToken } from "../utils/auth/authFunctions";
import { API_URL } from "../utils/apiConstants";
import { handleError } from "../utils/errors/errorFunctions";
import { showSimpleToast } from "../utils/alertFunctions";

async function setHeaders(headers = false) {
  let headerData;
  const token = getToken();

  headerData = {
    "content-type": "application/json",
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token.toString()}` }),
  };
  if (headers) {
    headerData = { ...headerData, ...headers };
  }

  return headerData;
}

function setBody(method, data) {
  if (method === "get" || method === "delete") {
    return { params: data };
  } else {
    return { data: data };
  }
}

export function setUrl(url = "") {
  if (url.length && url[0] != '/') {
    url = '/' + url;
  }
  var called = `${API_URL.base_url}${url}`;

  return called;
}

const callApi = async (url, data, method, header, noToast, show) => {
  let headers = await setHeaders(header);
  let body = setBody(method, data);
  let apiUrl = setUrl(url, body);

  return new Promise((resolve, reject) => {
    axios({ url: apiUrl, ...body, headers: headers, method: method })
      .then((data) => {
        !noToast && show != "error" && showSimpleToast(data.data.message, "success");
        resolve(data);
      })
      .catch((error) => {
        var errorRes = handleError(error);
        console.log('errorRes :>> ', errorRes);
        if (errorRes.message && errorRes.message === "Network Error") {
          !noToast && showSimpleToast(`${errorRes.message} - Please check your internet connection`, "failed");
        } else if (errorRes.message) {
          !noToast && showSimpleToast(errorRes.response.data.message, "failed");
        }

        reject(errorRes);
      });
  });
};

export const apiGet = (url, data = {}, header = false, noToast = true, show) => {
  return callApi(url, data, "get", header, noToast, show);
};

export const apiPost = (url, data = {}, header = false, noToast = false) => {
  return callApi(url, data, "post", header, noToast);
}; 

export const apiPatch = (url, data = {}, header = false) => {
  return callApi(url, data, "patch", header);
};

export const apiPut = (url, data = {}, header = false, noToast = false) => {
  return callApi(url, data, "put", header,noToast);
};

export const apiDelete = (url, data = {}, header = false) => {
  return callApi(url, data, "delete", header);
};
