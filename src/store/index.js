import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bg_rectangle_color: ''
    },

    mutations: {
        update_bg_rectangle_color (state) {
            state.bg_rectangle_color = true;
        }
    }
});

export default store;