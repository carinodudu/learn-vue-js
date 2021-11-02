<template>
  <div>

    <div class="inputBox shadow">
      <input type="text" placeholder="할 일 제목을 입력하세요." v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus"></i>
        </span>
    </div>

    <div class="textBox shadow">
      <textarea cols="100" rows="10" placeholder="할 일 상세 내용을 입력하세요." v-model="newTodoItemDetail"></textarea>
    </div>
      
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
        제목과 상세내용을 입력하세요.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data: function() {
        return {
            newTodoItem: '',
            newTodoItemDetail: '',
            showModal: false
        }
    },

    methods: {
        addTodo: function() {
          if(this.newTodoItem !== '' && this.newTodoItemDetail !== '') {
            // this.$emit('이벤트이름', 파라미터1, 파라미터2, ...);
            this.$emit('addTodoItem', this.newTodoItem, this.newTodoItemDetail);
            this.clearInput();
          } else {
            this.showModal = !this.showModal;
          }
        },
        clearInput: function() {
          this.newTodoItem = '';
          this.newTodoItemDetail = '';
        }
    },
    
    components: {
      Modal: Modal
    }
}
</script>

<style scope>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 1rem;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.textBox {
  background:white;
  border-radius: 5px;
  width: 95%;
  margin: 1rem;
}
.textBox textarea {
  background:rgb(217, 239, 248);
  border-style: none;
  font-size: 0.9rem;
  width: 100%;
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