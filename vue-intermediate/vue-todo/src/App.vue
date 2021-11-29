<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생한 이벤트 이름="현재 컴포넌트의 메소드 이름"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:하위 컴포넌트의 프롭스 속성 이름="현재 컴포넌트의 데이터 이름"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // methods: {
  //   addOneItem(todoItem) {
  //     const obj = {
  //       completed: false,
  //       item: todoItem
  //     };
  //     // 객체를 문자열로 변경하여 넣어주어야 함.
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     this.todoItems.push(obj);
  //   },
  //   removeOneItem(todoItem, index) {
  //     localStorage.removeItem(todoItem.item);
  //     this.todoItems.splice(index, 1);
  //   },
  //   toggleOneItem(todoItem) {
  //     // 직접 하위 컴포넌트의 데이터를 수정하는 것보다 하위 컴포넌트의 프롭스데이터로 받아온 현재 컴포넌트의 데이터를 수정하는 것이 컴포넌트간의 간섭도를 낮춤
  //     // this.todoItems[index].completed = !this.todoItems[index].completed;
  //     todoItem.completed = !todoItem.completed;
  //     localStorage.removeItem(todoItem.item);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems() {
  //     localStorage.clear();
  //     this.todoItems = [];
  //   }
  // },

}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
