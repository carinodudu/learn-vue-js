<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>

      <Modal v-if="showModal" @close="showModal = false">
        <!--
          <div slot="상위컴포넌트의 slot태그의 name속성값">
            하위 컴포넌트에서 재정의
          </div>
        -->
        <h3 slot="header">
          경고!
          <i class="closeModalBtn fas fa-times-circle" @click="showModal = false"></i>
        </h3>
        <div slot="body">
          값을 입력하세요.
        </div>
        <div slot="footer">
          copy right
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
          if(this.newTodoItem !== '') {
            // this.$emit('이벤트이름', 파라미터1, 파라미터2, ...);
            this.$emit('addTodoItem', this.newTodoItem);
            this.clearInput();
          } else {
            this.showModal = !this.showModal;
          }
        },
        clearInput() {
          this.newTodoItem = '';
        }
    },
    components: {
      Modal
    }
}
</script>

<style>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  height: 50px;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
  height: 50px;
  width: 50px;
}
.closeModalBtn {
  color: #42b983;
}
</style>