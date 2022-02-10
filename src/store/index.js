import {createStore} from 'vuex'
import music from './modules/music';
import notification from './modules/notification'
import modal from './modules/modal'

export default createStore({
    modules: {music, notification, modal}
})
