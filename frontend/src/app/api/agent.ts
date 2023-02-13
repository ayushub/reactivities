import axios, { AxiosResponse } from "axios";
import { resolve } from "path";
import { Activity } from "../models/activity";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) =>
        axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) =>
        axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

// CAN JUST USE CHROME NETWORK THROTTLING
// const sleep = (delay: number) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// };

// axios.interceptors.response.use(async (response) => {
//     try {
//         await sleep(1);
//         return response;
//     } catch (error) {
//         console.log(error);
//         return await Promise.reject(error);
//     }
// });

const Activities = {
    list: () => requests.get<Activity[]>("/activities"),
};

const agent = {
    Activities,
};

export default agent;
