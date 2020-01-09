import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        defaultData: { no : 0, name : "sb"},
        Info : { desc : "abcdef"}
    },
    mutations: {
        [Constant.BUTTON_CLICK] : (state, payload) => {
            window.console.log("button Click : ", payload);
            state.defaultData.name = payload;
        }
    }
})

export default store;