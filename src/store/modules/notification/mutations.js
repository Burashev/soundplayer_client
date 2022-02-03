export default {
    ADD_NOTIFICATION(state, notification) {
        state.notifications.push(notification)
    },
    REMOVE_NOTIFICATION(state, id) {
        state.notifications = state.notifications.filter(notification => notification.id !== id);
    }
}