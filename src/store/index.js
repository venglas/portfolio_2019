import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        interface: {
            is_on: false
        }
    },

    mutations: {
        interface_show(state){
            state.interface.is_on = true;
        },
        interface_hide(state){
            state.interface.is_on = false;
        }
    }
});

export default store;