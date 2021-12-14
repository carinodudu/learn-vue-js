<template>
  <div>
    <div>
      <span>등록건수:</span><span>{{ this.getRegisterItemCount }} &nbsp;</span>
      <span>완료건수:</span><span>{{ this.getCompletedItemCount }} &nbsp;</span>
      <span>완료율:</span>
      <span v-bind:class="[{textGreen: this.getRatioTextColor.isGreen}, 
                          {textOrange: this.getRatioTextColor.isOrange},
                          {textRed: this.getRatioTextColor.isRed}]">
      {{ this.getCompletedRatio }}% 
      </span>
    </div>

    <!-- 2.(2) 출력 적용 -->
    <li v-for="day in this.getDayList" v-bind:key="day.date">
      {{ day.date }} {{ day.description }}
    </li>

    <router-link to="/register">할 일 등록</router-link>

    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'
import { mapGetters } from 'vuex' // mapGetters 적용

export default {
  name: 'ListPage',

  components: {
    TodoList,
    TodoFooter
  },

  // mapGetters 적용
  computed: {
    ...mapGetters([
      'getRegisterItemCount',
      'getCompletedItemCount',
      'getCompletedRatio',
      'getRatioTextColor',
      // 2.(2) getters로 state의 배열 접근
      'getDayList'
    ])
  }
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
