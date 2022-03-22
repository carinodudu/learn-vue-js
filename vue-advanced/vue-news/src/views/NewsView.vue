<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  }
}
</script>

<style>

</style>

<!-- 오류해결
// 오류: [vue/require-v-for-key] Elements in iteration expect to have 'v-bind:key' directives.
// 해결: 
        1. v-for="값 in 배열" 형태로 가져올 때 v-bind:key="키값" 을 추가
// 참조: https://bumcrush.tistory.com/164
-->