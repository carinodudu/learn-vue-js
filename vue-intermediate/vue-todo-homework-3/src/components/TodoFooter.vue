<template>
  <div class="clearAllContainder">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All ({{ this.$store.getters.getRegisterItemCount }}Items)
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    // es6 문법 적용으로 :function 생략
    clearTodo() {
      // this.$emit('clearAll');
      this.$store.commit('clearAllItems');
    }
  }

}
</script>

<style scoped>
.clearAllContainder {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>