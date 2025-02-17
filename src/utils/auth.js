export const isAuthenticated = async (token) => {
    if (!token || !token.accessToken) {
      return false;
    }
    return true;
  };