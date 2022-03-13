import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // 데이터
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    // 데이터 접근, state로 스테이트 접근
    getters,
    // 데이터 접근, state로 스테이트 접근
    mutations,
    // 데이터 처리 로직(API) 호출, context로 뮤테이션즈 접근
    actions,
});