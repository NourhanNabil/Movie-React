import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key:"3bbd0bba974178f7a5e0b77f8cafd0e6"
  }
});
