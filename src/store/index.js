import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      test: false
    },

    mutations: {
        changeTestValue (state) {
            state.test = true
        }
    }
});