import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY": "12123123123",
    },
    baseURL:'https://pocas.ru/api/'
});
export default instance;
