export default {
    createNotification({commit}, notification) {
        notification.id = Date.now();

        commit('ADD_NOTIFICATION', notification);

        setTimeout(() => {
            commit('REMOVE_NOTIFICATION', notification.id);
        }, 2000)
    }
}