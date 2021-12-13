<template>
  <div>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fas fa-check-circle" 
            v-on:click="toggleComplete({todoItem, index})"
          >
          </i>
          <!-- v-bind:class="{클래스명: boolean값을 갖는 변수}" 변수 값에 따라 클래스가 적용 처리 -->
          <span v-bind:class="{textCompleted: todoItem.completed}">
            {{ todoItem.item }}
          </span>
          
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
            <i class="fas fa-trash"></i>
          </span>
        </li>
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';


export default {
  // methods: 호출할 때 다시 렌더링
  methods: {
    // 이벤트 처리 함수명과 스토어 함수명이 다를 경우 객체 형태로 선언
    ...mapMutations({
      // 컴포넌트 메소드 명: '스토어의 뮤테이션 명'
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
    // removeTodo(todoItem, index) {
    //   // this.$emit('removeItem', todoItem, index);
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleItem', todoItem, index);
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },

  // computed: 값이 변했을 경우에만 자동으로 다시 렌더링
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters([
      'storedTodoItems' // 'storedTodoItems' : storedTodoItems 축약
    ])
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/* 리스트 아이템 트랜지션 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>