import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// 2.(2) 별도 모듈 생성
import dayManager from './modules/dayManager'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp,
        // 2.(2) 별도 모듈 생성
        dayManager
    }
});