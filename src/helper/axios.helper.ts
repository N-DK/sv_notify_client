import axios, { AxiosResponse } from 'axios';

const handleRes = (response: AxiosResponse) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
};

const handleError = (error: any) => {
    throw error?.response?.data || error;
};

const axiosAlarm = (baseURL: string) => {
    const instance = axios.create({
        baseURL,
    });

    instance.interceptors.response.use(handleRes, handleError);

    return instance;
};

export { axiosAlarm };
