<template>
  <div>
    
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생한 이벤트 이름="현재 컴포넌트의 메소드 이름"></TodoInput> -->
    <TodoInput></TodoInput>

    <router-link to="/list">할 일 목록</router-link>
  </div>
</template>

<script>
import TodoInput from '../components/TodoInput.vue';

export default {
    name: 'RegisterPage',

    components: {
        TodoInput // 'TodoInput': TodoInput,
    }
}
</script>

<style>

</style>