import axios from "axios";
import store from '@/store'

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    if (error.response) {
        const errorMessage = error.response.data.message;
        store.dispatch('notification/createNotification', {
            text: errorMessage,
            error: true
        }).then();
    } else store.dispatch('notification/createNotification', {
        text: error,
        error: true
    }).then();

    return Promise.reject(error)
})

export {apiClient};