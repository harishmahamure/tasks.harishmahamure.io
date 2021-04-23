import axios from "axios";
import { BASE_URL } from "../constants/APIEndpoints";
require("dotenv").config();

const httpInstance = axios.create({
    baseURL: BASE_URL,
});

httpInstance.interceptors.request.use(
    (apiConfig) => {
        apiConfig.headers["AuthToken"] = "xvF43K6mRV4xc6OZnfMbSfq5Y73EydD9";
        return { ...apiConfig };
    },
    (err) => {
        return Promise.reject(err);
    }
);

httpInstance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        return err;
    }
);

export default httpInstance;
