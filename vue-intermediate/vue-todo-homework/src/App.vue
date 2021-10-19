<template>
  <div>
    <TodoHeader v-bind:propsdata="headerText"></TodoHeader>
    <TodoInput></TodoInput>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput
  },
  data: function() {
    return {
      headerText: ''
    }
  },
  created: function() {
    this.headerText = '지구를 살리는 뜻깊은 생활실천'
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
}
body {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
