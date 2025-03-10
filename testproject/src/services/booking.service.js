import {API_PATH} from '../constants/api.constant';
import axiosInstance from './../utils/axios';

const getAllBookings = (queryParams, searchValues) => {
  let url = `${API_PATH.API_VERSION}${API_PATH.GET_BOOKINGS}`;
  if (queryParams) {
    url += `?${queryParams}`;
  }
  // console.log(url, 'booking service>>>>>>>', searchValues);
  return axiosInstance.post(url, searchValues).then(response => {
    return response;
  });
};

const getAllUpcomingBookings = (queryParams, searchValues) => {
  let url = `${API_PATH.API_VERSION}${API_PATH.GET_UPCOMING_BOOKINGS}`;
  if (queryParams) {
    url += `?${queryParams}`;
  }
  console.log(url, 'booking service>>>>>>>', searchValues);
  return axiosInstance.get(url, searchValues).then(response => {
    console.log(response);
    return response;
  });
};

const getLoginLogoutTimes = (officeId, isIn, transportType) => {
  console.log('transportType', transportType);
  return axiosInstance
    .get(
      `${API_PATH.API_VERSION}${API_PATH.SHIFT}/${officeId}/${transportType}/${
        isIn ? API_PATH.IN : API_PATH.OUT
      }`,
    )
    .then(response => {
      return response;
    });
};

const getNodalLocations = officeId => {
  return axiosInstance
    .get(`${API_PATH.API_VERSION}${API_PATH.NODAL_LOCATIONS}/${officeId}`)
    .then(response => {
      return response;
    });
};

const getEmployeesByTeamId = queryParams => {
  let url = `${API_PATH.API_VERSION}${API_PATH.EMPLOYEES_BY_TEAM}`;
  if (queryParams) {
    url += `?${queryParams}`;
  }
  return axiosInstance.get(url).then(response => {
    return response;
  });
};

const getEmployeeByEmail = username => {
  return axiosInstance
    .get(`${API_PATH.API_VERSION}${API_PATH.EMP_BY_EMAIL}/${username}`)
    .then(response => {
      return response;
    });
};

const createBooking = bookingData => {
  return axiosInstance
    .post(`${API_PATH.API_VERSION}${API_PATH.CREATE_BOOKING}`, bookingData)
    .then(response => {
      return response;
    });
};

const cancelBooking = data => {
  return axiosInstance
    .put(`${API_PATH.API_VERSION}${API_PATH.CANCEL_BOOKING}/${data}`)
    .then(response => {
      return response;
    });
};

const updateBooking = data => {
  return axiosInstance
    .put(`${API_PATH.API_VERSION}${API_PATH.UPDATE_BOOKING}`, data)
    .then(response => {
      return response;
    });
};

const BookingService = {
  getAllBookings,
  getAllUpcomingBookings,
  getLoginLogoutTimes,
  getNodalLocations,
  getEmployeesByTeamId,
  createBooking,
  cancelBooking,
  getEmployeeByEmail,
  updateBooking,
};

export default BookingService;
