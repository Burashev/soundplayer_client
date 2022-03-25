import { apiClient } from "@/services/api/apiClient";

export default {
    getPlaylistsOnMain() {
        return apiClient.get('/playlists/main')
    },

}
