<template>
  <div>
      <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fas fa-check-circle" 
            v-on:click="toggleComplete(todoItem)"
          >
          </i>
          <!-- v-bind:class="{클래스명: boolean값을 갖는 변수}" 변수 값에 따라 클래스가 적용 처리 -->
          <span v-bind:class="{textCompleted: todoItem.completed}" @click="popModal(todoItem)">
            {{ todoItem.item }}
          </span>
          
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash"></i>
          </span>

          <Modal v-if="showModal" @close="showModal = false">
            <!--
              <div slot="상위컴포넌트의 slot태그의 name속성값">
                하위 컴포넌트에서 재정의
              </div>
            -->
            <h3 slot="header">
              {{ item }}
              <i class="closeModalBtn fas fa-times-circle" @click="showModal = false"></i>
            </h3>
            <div slot="body">
              {{ detail }}
            </div>
          </Modal>

      </li>

    </transition-group>

  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  props: ['propsdata'],

  components: {
    Modal // Modal: Modal
  },

  data() {
    return {
        showModal: false,
        item: '',
        detail: ''
    }
  },

  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete(todoItem) {
      this.$emit('toggleItem', todoItem);
    },
    popModal(todoItem) {
      this.item = todoItem.item;
      this.detail = todoItem.detail;
      this.showModal = !this.showModal;
    }
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
.closeModalBtn {
  color: #42b983;
}
</style>