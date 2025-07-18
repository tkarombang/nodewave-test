import axios from "axios";

export const api = axios.create({
  baseURL: "https://fe-test-api.nwappservice.com",
});
