<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <!-- <button v-on:이벤트="이벤트 발생 시 호출될 함수">send</button> -->
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    // 'props'라는 속성에 'propsdata' 배열에 데이터를 받기로 함
    // 'props'는 상위 컴포넌트 -> 하위 컴포넌트로 데이터 전달 객체
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>