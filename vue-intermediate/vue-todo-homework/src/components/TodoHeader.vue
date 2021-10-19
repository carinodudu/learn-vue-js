<template>
  <div>
      <img class="headerImg" src="http://www.hansalim.or.kr/wp-content/themes/hansalim2018renew/images/logo.png">
      <div class="headerText">
        {{ propsdata }}
      </div>
  </div>
</template>

<script>
export default {
    props: ['propsdata']
}
</script>

<style>
.headerImg {
    margin-bottom: 3rem;
}
.headerText {
    color: #8CC63F;
    margin-bottom: 1rem;
}
</style>