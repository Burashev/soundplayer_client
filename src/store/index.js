import {createStore} from 'vuex'
import music from './modules/music';
import notification from './modules/notification'

export default createStore({
    modules: {music, notification}
})
