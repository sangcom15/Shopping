<template>
  <div id="app" class="container-fluid">
    <!-- <HelloWorld/> -->
    <div class="row">
      <div class="col">
        <Gnb/>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <Lnb/>
      </div>
      <div class="col">
        <Contents/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Gnb from './components/Gnb'
import Lnb from './components/Lnb'
import Contents from './components/Contents'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Gnb,
    Lnb,
    Contents,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
