import { apiClient } from "@/services/apiClient";

export default {
    getPlaylistsOnMain() {
        return apiClient.get('/playlists/main')
    },

}