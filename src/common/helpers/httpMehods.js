import httpInstance from "./httpInstance";

const get = (url, config) => {
	return httpInstance.get(url, { ...config });
};

const post = (url, data, config) => {
	return httpInstance.post(url, data, { ...config });
};

export const httpMethod = {
	get,
	post,
};
