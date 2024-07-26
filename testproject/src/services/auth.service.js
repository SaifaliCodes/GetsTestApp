import {API_PATH} from '../constants/api.constants';
import axiosInstance from './../utils/axios';

const login = userDetails => {
  return axiosInstance
    .post(`${API_PATH.API_VERSION}${API_PATH.LOGIN}`, userDetails)
    .then(response => {
      return response;
    });
};

const generateOTP = username => {
  return axiosInstance
    .post(`${API_PATH.API_VERSION}${API_PATH.GENERATEOTP}?username=${username}`)
    .then(response => {
      return response;
    });
};

const verifyOTP = (username, otp) => {
  return axiosInstance
    .post(
      `${API_PATH.API_VERSION}${API_PATH.VERIFYOTP}?username=${username}&otp=${otp}`,
    )
    .then(response => {
      return response;
    });
};

const refreshToken = token => {
  return axiosInstance
    .post(`${API_PATH.API_VERSION}${API_PATH.REFRESH_TOKEN}`, token, {
      headers: {
        dontSendToken: true,
      },
    })
    .then(response => {
      return response;
    });
};

const logout = () => {
  return axiosInstance
    .post(`${API_PATH.API_VERSION}${API_PATH.LOGOUT}`)
    .then(response => {
      return response;
    });
};

const AuthService = {
  login,
  generateOTP,
  verifyOTP,
  refreshToken,
  logout,
};

export default AuthService;
