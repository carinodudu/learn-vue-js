// 2.(2) 별도 모듈 생성
const state = {
    dayList: [
        { date:'12/25', description:'크리스마스'},
        { date:'01/01', description:'새해 첫날'},
        { date:'03/17', description:'두환이 생일'}
    ]
};

const getters = {
    getDayList(state) {
        return state.dayList;
    }
};

export default {
    state,
    getters
}