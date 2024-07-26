import axios from 'axios';
import AuthService from '../services/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:8010',
});

const refreshTokenAPI = async () => {
  let tokenForRefresh = await AsyncStorage.getItem('token');
  if (tokenForRefresh) {
    try {
      const response = await AuthService.refreshToken({token: tokenForRefresh});
      const {data} = response || {};
      const {accessToken, token} = data || {};
      console.log(accessToken);
      if (accessToken && token) {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('accessToken', accessToken);
        return true;
      } else {
        await AsyncStorage.clear();
        return false;
      }
    } catch (e) {
      await AsyncStorage.clear();
      console.error(e);
      return false;
    }
  } else {
    await AsyncStorage.clear();
    return false;
  }
};

// Request interceptor
axiosInstance.interceptors.request.use(
  async config => {
    let userToken = await AsyncStorage.getItem('accessToken');
    let allHeaders = config?.headers;
    if (userToken && allHeaders && !allHeaders?.dontSendToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  error => {
    console.error('error', error);
    // Handle request error
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const isRefreshed = await refreshTokenAPI();
        if (isRefreshed) {
          return axiosInstance(originalRequest);
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  },
);
export default axiosInstance;
