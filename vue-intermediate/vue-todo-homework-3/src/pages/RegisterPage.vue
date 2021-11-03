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
    },
}
</script>

<style>

</style>