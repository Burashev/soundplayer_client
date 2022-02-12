import { apiClient } from "@/services/apiClient";

export default {
    getProfileData(token) {
        return apiClient.get('/user/me', {
            'headers': {'Authorization': `Bearer ${token}`}
        })
    },

}