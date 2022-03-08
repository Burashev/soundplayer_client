import { apiClient } from "@/services/apiClient";

export default {
    getProfileData(token) {
        return apiClient.get('/user/me', {
            'headers': {'Authorization': `Bearer ${token}`}
        })
    },
    likeSong(token, id) {
        return apiClient.get(`/song/${id}/like`, {
            'headers': {'Authorization': `Bearer ${token}`}
        })
    },
    unlikeSong(token, id) {
        return apiClient.get(`/song/${id}/unlike`, {
            'headers': {'Authorization': `Bearer ${token}`}
        })
    }
}