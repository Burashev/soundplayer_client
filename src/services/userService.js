import { apiClient } from "@/services/apiClient";

export default {
    getProfileData() {
        return apiClient.get('/user/me')
    },

}