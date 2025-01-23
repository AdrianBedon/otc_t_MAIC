import axios from "axios";

const BASE_URL = "http://localhost:8080/api/scoring";

export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log("API Response:", response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const findByPhone = async (phone) => {
  try {
    const response = await axios.get(`${BASE_URL}/${phone}`);
    console.log("API Response:", response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const findByPhoneNB = async (phone) => {
  try {
    const response = await axios.get(`${BASE_URL}/nba-nbc/${phone}`);
    console.log("API Response:", response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};
