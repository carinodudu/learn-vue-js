<template>
  <div>
    <div>
      <span>등록건수:</span><span>{{ this.$store.getters.getRegisterItemCount }} &nbsp;</span>
      <span>완료건수:</span><span>{{ this.$store.getters.getCompletedItemCount }} &nbsp;</span>
      <span>완료율:</span>
      <span v-bind:class="[{textGreen: this.$store.getters.getRatioTextColor.isGreen}, 
                          {textOrange: this.$store.getters.getRatioTextColor.isOrange},
                          {textRed: this.$store.getters.getRatioTextColor.isRed}]">
      {{ this.$store.getters.getCompletedRatio }}% 
      </span>
    </div>
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
}
</script>

<style scope>
.textGreen {
  color: green;
}
.textOrange {
  color: orange;
}
.textRed {
  color: red;
}
</style>
