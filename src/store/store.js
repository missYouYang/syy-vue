import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({

    /*全局的值*/
    state: {
        tagLayout: 'menu',
    },

    /*修改state数据的方法定义*/
    mutations: {
        add (state, n) {
            state.tagLayout =n
        }
    },
});
