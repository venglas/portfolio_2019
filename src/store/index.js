import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        interface: {
            is_on: false,
            menu_width: 0
        },
        all_routes: []
    },

    mutations: {
        interface_show(state){
            state.interface.is_on = true;
        },
        interface_hide(state){
            state.interface.is_on = false;
        },
        set_menu_width(state, width){
            state.interface.menu_width = width;
        },

        set_all_routes(state, all_routes){
            state.all_routes = all_routes;
        }
    }
});

export default store;