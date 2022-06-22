import axios from 'axios';

import { FieldValues } from 'react-hook-form';

import setupInterceptorsTo from './Interceptors';

const baseApi = axios.create({
    baseURL: 'http://13.209.65.162/api',
    timeout: 1000,
});

const callApi = setupInterceptorsTo(baseApi);

const logoutApi = async () => {
    const oua = await callApi.get('/logout');
    return oua;
};

const writeApi = async (data: FormData) => {
    const wta = await callApi.post('/boards', data, {
        headers: {
            'content-type': 'multipart/form-data',
        },
    });
    return wta;
};

const deleteApi = async (id: number) => {
    const dta = await callApi.delete(`/boards/${id}`);
    return dta;
};

const reviseApi = async (id: number, formData: FormData) => {
    const rva = await callApi.put(`/boards/${id}`, formData, {
        headers: {
            'content-type': 'multipart/form-data',
        },
    });
    return rva;
};

const likeApi = async (id: number) => {
    const lka = await callApi.post(`/boards/${id}/likes`);
    return lka;
};

const unlikeApi = async (id: number) => {
    const ulka = await callApi.delete(`/boards/${id}/likes`);
    return ulka;
};

export const boardApi = {
    writeApi: (data: FormData) => writeApi(data),
    logoutApi: () => logoutApi(),
    deleteApi: (id: number) => deleteApi(id),
    reviseApi: (id: number, formData: FormData) => reviseApi(id, formData),
    likeApi: (id: number) => likeApi(id),
    unlikeApi: (id: number) => unlikeApi(id),
};
