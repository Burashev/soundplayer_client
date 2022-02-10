import authService from "@/services/authService";

export default {
    getUserByCode({commit, store}, code) {
        authService.callbackGithub(code)
            .then(data => {
                const object = data.data;
                commit('SET_USER_TOKEN', object.token);
                commit('SET_USER_OBJECT', object);
                this.dispatch('notification/createNotification', {text: 'Successful login'})
            })
    },
    getUser() {

    }
}