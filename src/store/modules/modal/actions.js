export default {
    toggleIsOpen({ commit, state }) {
        commit('SET_IS_OPEN', !state.isOpen);
    }
}