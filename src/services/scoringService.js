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
