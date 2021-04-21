import { config } from "dotenv";

export const handlePreRequest = async (apiConfig) => {
	apiConfig.headers["Content-Type"] = "application/json";
	apiConfig.headers["AuthToken"] = config.API_KEY;
	return apiConfig;
};

const getError = async (err) => {
	return Promise.reject(err);
};

export const handleResponseSuccess = async (response) => {
	return response.data;
};

export const handleRequestError = async (err) => {
	return getError(err);
};

export const handleResponseError = async (err) => {
	return getError(err);
};
