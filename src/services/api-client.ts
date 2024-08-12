import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd32db5b47764b9f8f0828d0e196776a",
  },
});