<template>
  <div>
    
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생한 이벤트 이름="현재 컴포넌트의 메소드 이름"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>

    <router-link to="/list">할 일 목록</router-link>
  </div>
</template>

<script>
import TodoInput from '../components/TodoInput.vue';

export default {
    name: 'RegisterPage',

    components: {
        'TodoInput': TodoInput,
    },

    data: function() {
        return {
            todoItems: []
        }
    },

    methods: {
        addOneItem: function(todoItem, todoItemDetail) {
            var obj = {
                completed: false,
                item: todoItem,
                detail: todoItemDetail
            };
            // 객체를 문자열로 변경하여 넣어주어야 함.
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem: function(todoItem, index) {
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        toggleOneItem: function(todoItem) {
            // 직접 하위 컴포넌트의 데이터를 수정하는 것보다 하위 컴포넌트의 프롭스데이터로 받아온 현재 컴포넌트의 데이터를 수정하는 것이 컴포넌트간의 간섭도를 낮춤
            // this.todoItems[index].completed = !this.todoItems[index].completed;
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
    },
}
</script>

<style>

</style>