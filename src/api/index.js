import axios from "axios";

const api = axios.create({ baseURL: "https://api-padaria.herokuapp.com/padaria/" });

export default api;