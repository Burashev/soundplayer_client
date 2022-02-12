export default {
    ADD_MODAL(state, modalName) {
        state.modals.push(modalName);
    },
    OPEN_MODAL(state, modalName) {
        state.openedModal = modalName;
    },
    CLOSE_MODAL(state) {
        state.openedModal = '';
    }
}