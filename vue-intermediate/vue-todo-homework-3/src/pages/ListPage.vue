<template>
  <div>
    <router-link to="/register">할 일 등록</router-link>
    
    <!-- <TodoList v-bind:하위 컴포넌트의 프롭스 속성 이름="현재 컴포넌트의 데이터 이름"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import TodoFooter from '../components/TodoFooter.vue';

export default {
  name: 'ListPage',

  components: {
    TodoList, // 'TodoList': TodoList,
    TodoFooter // 'TodoFooter': TodoFooter
  },

  // store의 state로 적용
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },

  // store의 mutations로 적용
  // methods: {
  //   //es6 문법 적용으로 :function 생략
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

</style>
