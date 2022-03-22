<template>
  <div id="app">
    <tool-bar></tool-bar>
    <Transition name="page">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42B883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition, https://vuejs.org/guide/built-ins/transition.html#css-based-transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
