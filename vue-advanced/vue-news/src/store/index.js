import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // 데이터
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: [],
        askItem: [],
    },
    // 데이터 접근, state로 스테이트 접근
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedAskItem(state) {
            return state.askItem;
        },
    },
    // 데이터 접근, state로 스테이트 접근
    mutations,
    // 데이터 처리 로직(API) 호출, context로 뮤테이션즈 접근
    actions,
});