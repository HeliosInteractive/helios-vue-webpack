<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
    {{#garudaAdmin}}
    <triple-tap/>
    {{/garudaAdmin}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
{{#garudaAdmin}}
import TripleTap from '@/components/TripleTap';

{{/garudaAdmin}}
export default {
  name: 'App',
  components: {
    {{#router}}{{else}}HelloWorld,{{/router}}
    {{#garudaAdmin}}TripleTap,{{/garudaAdmin}}
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
