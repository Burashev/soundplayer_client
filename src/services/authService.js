import { apiClient } from "@/services/apiClient";

export default {
    redirectGithub() {
        return apiClient.get('/auth/redirect/github')
    },
    callbackGithub(code) {
        return apiClient.get(`/auth/callback/github?code=${code}`)
    }
}