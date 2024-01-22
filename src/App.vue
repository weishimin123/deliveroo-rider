<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font: normal 100%/1.6 "ibm-plex-sans", sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: #fff;
  }

  a {
    color: rgb(0, 204, 188);
    text-decoration: none;
  }

  input {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    user-select: none;
    -moz-user-focus: none;
    appearance: none;
    outline: none;
  }

  input,
  button {
    border: none;
    background: none;
  }

  .slider {
    position: absolute;
    top: 100vh;
    height: 0vh;
    width: 100vw;
    background-color: rgb(28, 28, 30);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: top 0.5s ease, height 0.5s ease;
    overflow: hidden;
  }

  .slider[show] {
    top: 5vh;
    height: 95vh;
  }

      .img-x {
      width: 16px;
    }
</style>
