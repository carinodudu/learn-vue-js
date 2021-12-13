<template>
  <div>
    <TodoInput></TodoInput>
    <router-link to="/list">할 일 목록</router-link>
  </div>
</template>

<script>
import TodoInput from '../components/TodoInput.vue';

export default {
    name: 'RegisterPage',

    components: {
        TodoInput
    }
}
</script>

<style>

</style>