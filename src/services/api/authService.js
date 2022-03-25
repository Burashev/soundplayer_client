import { apiClient } from "@/services/api/apiClient";

export default {
    redirectGithub() {
        return apiClient.get('/auth/redirect/github')
    },
    callbackGithub(code) {
        return apiClient.get(`/auth/callback/github?code=${code}`)
    }
}
