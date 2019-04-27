import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        interface: {
            is_on: false,
            menu_width: 0,
            menu: {
                isVisible: true,
                left_side_menu: false
            },
            scroll_arrow_info: false,
            scroll_position: 0
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
        },

        show_horizontal_menu(state){
            state.interface.menu.isVisible = true;
        },

        hide_horizontal_menu(state){
            state.interface.menu.isVisible = false;
        },

        show_left_side_menu(state){
            state.interface.menu.left_side_menu = true;
        },

        hide_left_side_menu(state){
            state.interface.menu.left_side_menu = false;
        },

        show_scroll_arrow(state){
            state.interface.scroll_arrow_info = true;
        },

        hide_scroll_arrow(state){
            state.interface.scroll_arrow_info = false;
        },

        setScrollPosition(state, scroll_position){
            state.interface.scroll_position = scroll_position;
        }
    }
});

export default store;