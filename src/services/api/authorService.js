import { apiClient } from "@/services/api/apiClient";

export default {
    getAuthor(id) {
        return apiClient.get(`/author/${id}`)
    },

}
