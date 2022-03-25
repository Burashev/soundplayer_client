import { apiClient } from "@/services/api/apiClient";

export default {
    getAllSongs() {
        return apiClient.post('/song/all')
    },

}
