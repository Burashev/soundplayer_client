import authService from "@/services/authService";
import localStorageService from '@/services/localStorageService'
import userService from "@/services/userService";

export default {
    getUserByCode({commit, store}, code) {
        authService.callbackGithub(code)
            .then(res => {
                const userObject = res.data;
                commit('SET_USER_TOKEN', userObject.token);
                commit('SET_USER_OBJECT', userObject);
                localStorageService.setToken(userObject.token);
                this.dispatch('notification/createNotification', {text: 'Successful login'})
            })
    },
    getUser({state, commit}) {
        if (!state.userToken) return null;

        userService.getProfileData(state.userToken)
            .then(res => {
                const userObject = res.data;
                commit('SET_USER_OBJECT', userObject);
            })
            .catch(error => {
                commit('SET_USER_TOKEN', '');
                localStorageService.setToken('');
                if (state.userObject) commit('SET_USER_OBJECT', null);
            });
    }
}