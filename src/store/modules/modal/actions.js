export default {
    openModal({commit, state}, modalName) {
        if (!state.modals.find(modal => modal === modalName)) {
            throw new Error('Modal was not found');
        }
        commit('OPEN_MODAL', modalName);
    },
    closeModal({commit}) {
        commit('CLOSE_MODAL');
    },
    // createModal({commit}, modalName) {
    //     commit('ADD_MODAL', modalName);
    // }
}