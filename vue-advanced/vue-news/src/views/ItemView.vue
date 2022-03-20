<template>
  <div>
      <!-- 1. 질문 상세 정보 -->
      <section>
        <!-- 1.1. 사용자 정보 -->
        <div class="user-container">
          <div>
            <i class="fa-regular fa-user"></i>
          </div>
          <div class="user-description">
            <router-link :to="`/user/${fetchedAskItem.user}`">
              {{ fetchedAskItem.user }}
            </router-link>
            <div class="time">
              {{ fetchedAskItem.time_ago }}
            </div>
          </div>
        </div>
        <!-- 1.2. 질문 제목 -->
        <h2>
          {{ fetchedAskItem.title }}
        </h2>
        <!-- 1.3. 질문 댓글 -->
        <div v-html="fetchedAskItem.content"></div>
      </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAskItem']),
  },
  created() {
    const askItemNo = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_ITEM', askItemNo);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>