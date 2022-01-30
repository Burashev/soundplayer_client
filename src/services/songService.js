import { apiClient } from "@/services/apiClient";

export default {
    getAllSongs() {
        return apiClient.post('/song/all')
    },

}