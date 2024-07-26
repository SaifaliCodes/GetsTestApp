import { API_PATH } from '../constants/api.constants';
import axiosInstance from './../utils/axios';

const getUpcomingTrips = async (driverId) => {
    console.log(`${API_PATH.API_VERSION}${API_PATH.TRIP}${API_PATH.UPCOMING_TRIPS}/${driverId}`);
    return axiosInstance
        .get(
            `${API_PATH.API_VERSION}${API_PATH.TRIP}${API_PATH.UPCOMING_TRIPS}/${driverId}`,
        )
        .then(response => {
            return response;
        });
}
const requestedTrips = async() =>{
    return axiosInstance
        .post(
            `${API_PATH.API_VERSION}${API_PATH.TRIP}${API_PATH.UPCOMING_TRIPS}/${driverId}`,
        )
        .then(response => {
            return response;
        });
}

const getTripSearchByBean = async(queryParams, searchValues) =>{
    let url = `${API_PATH.API_VERSION}${API_PATH.TRIP}${API_PATH.SEARCH_BY_BEAN}`;
  if (queryParams) {
    url += `?${queryParams}`;
  }
  return axiosInstance.post(url, searchValues).then(response => {
    return response;
  })
}


const TripService = {
    getUpcomingTrips,
    requestedTrips,
    getTripSearchByBean
};

export default TripService;
