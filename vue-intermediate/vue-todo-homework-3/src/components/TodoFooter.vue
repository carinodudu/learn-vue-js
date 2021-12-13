<template>
  <div class="clearAllContainder">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All ({{ this.getRegisterItemCount }}Items)
    </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex' // mapGetters, mapMutations 적용

export default {
  methods: {
    // mapMutations 적용
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
  },

  computed: {
    // mapGetters 적용
    ...mapGetters([
      'getRegisterItemCount'
    ])
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