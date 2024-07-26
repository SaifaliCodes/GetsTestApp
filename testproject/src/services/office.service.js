import {API_PATH} from '../constants/api.constant';
import axiosInstance from './../utils/axios';

const getAllOffices = () => {
  return axiosInstance
    .get(`${API_PATH.API_VERSION}${API_PATH.OFFICES}${API_PATH.ALL}`)
    .then(response => {
      return response;
    });
};

const OfficeService = {
  getAllOffices,
};

export default OfficeService;
