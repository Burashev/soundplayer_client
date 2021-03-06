import authService from "@/services/api/authService";
import localStorageService from '@/services/localStorageService'
import userService from "@/services/api/userService";

export default {
    getUserByCode({commit, store}, code) {
        authService.callbackGithub(code)
            .then(res => {
                const userObject = res.data;
                commit('SET_USER_TOKEN', userObject.token);
                commit('SET_USER_OBJECT', userObject);
                localStorageService.setToken(userObject.token);
                localStorageService.setUserObject(userObject);
                this.dispatch('notification/createNotification', {text: 'Successful login'})
            })
    },
    getUser({state, getters, commit}) {
        if (!getters.isAuth) return null;

        userService.getProfileData(state.userToken)
            .then(res => {
                const userObject = res.data;
                if (userObject.updated_at === state.userObject.updated_at) return null;
                commit('SET_USER_OBJECT', userObject);
                localStorageService.setUserObject(userObject);
            })
            .catch(() => {
                commit('SET_USER_TOKEN', '');
                localStorageService.setToken('');
                if (state.userObject) {
                    commit('SET_USER_OBJECT', null);
                    localStorageService.setUserObject(null)
                }
            });
    },
    likeSong({state, dispatch}, id) {
        userService.likeSong(state.userToken, id)
            .then(() => {
                dispatch('getUser')
                dispatch('notification/createNotification', {
                    text: 'Song added to your favorites',
                    error: false
                }, {root: true})
            })
    },
    unlikeSong({state, dispatch}, id) {
        userService.unlikeSong(state.userToken, id)
            .then(() => {
                dispatch('getUser')
                dispatch('notification/createNotification', {
                    text: 'Song removed from your favorites',
                    error: true
                }, {root: true})
            })
    }
}
