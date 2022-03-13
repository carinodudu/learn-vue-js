<template>
  <div>
      <p v-for="item in fetchedNews" v-bind:key="item.id">
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} by {{ item.user }}
        </small>
      </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      fetchedNews: 'fetchedNews'
    }),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;

    // fetchNewsList()
    //   .then(function(response) {
    //     console.log(response);
    //     vm.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
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