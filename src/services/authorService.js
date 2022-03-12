import { apiClient } from "@/services/apiClient";

export default {
    getAuthor(id) {
        return apiClient.get(`/author/${id}`)
    },

}