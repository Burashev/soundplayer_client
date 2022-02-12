import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from "@/store/modules/user/getters";

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}