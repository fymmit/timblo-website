<template>
  <div id="app">
    <Header/>
    <router-view>

    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Main,
    Header,
    Footer,
    About
  }
};
</script>

<style>
#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a0a0a0;
}
body {
  background: #101010;
}
</style>
