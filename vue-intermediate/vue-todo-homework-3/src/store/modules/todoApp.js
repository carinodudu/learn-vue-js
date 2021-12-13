const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i=0; i<localStorage.length; i++) {
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    }
};

const state = {
    todoItems: storage.fetch(),
    ratioTextColors: {
        isGreen: false,
        isOrange: false,
        isRed: false
    }
};

const getters = {
    // 등록된 할 일
    getTodoItems(state) {
        return state.todoItems;
    },
    // 등록건수
    getRegisterItemCount(state) {
        return state.todoItems.length;
    },
    // 완료건수
    getCompletedItemCount(state) {
        return state.todoItems.filter(todoItem => todoItem.completed).length;
    },
    // 완료율
    getCompletedRatio(state, getters) {
        let completedRatio = 0;
        completedRatio = Math.round(getters.getCompletedItemCount / getters.getRegisterItemCount * 100);
        return isNaN(completedRatio)? 0 : completedRatio;
    },
    // 완료율 텍스트 색상
    getRatioTextColor(state, getters) {
        let ratio = getters.getCompletedRatio;
        
        state.ratioTextColors.isGreen = false;
        state.ratioTextColors.isOrange = false;
        state.ratioTextColors.isRed = false;

        if(ratio >= 80) {
            state.ratioTextColors.isGreen = true;
        } else if(ratio >= 40) {
            state.ratioTextColors.isOrange = true;
        } else if(ratio >= 0) {
            state.ratioTextColors.isRed = true;
        }

        return state.ratioTextColors;
    }
};

const mutations = {
    addOneItem(state, payload) {
        // var obj es6문법 적용 const타입은 값을 변경할 수 없는 상수, 객체 내부의 값은 변경 가능
        const obj = {
            completed: false,
            item: payload.item,
            detail: payload.detail
        };
        // 객체를 문자열로 변경하여 넣어주어야 함.
        localStorage.setItem(payload.item, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations,
}
