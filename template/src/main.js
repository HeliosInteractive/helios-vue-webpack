{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#garuda}}
import garuda from '@helios-interactive/garuda-js';
{{/garuda}}
{{#garudaAdmin}}
import VueGarudaAdmin from '@helios-interactive/vue-garuda-admin';
{{/garudaAdmin}}
import App from './App'
{{#store}}
import store from './store';
{{/store}}
{{#router}}
import router from './router'
{{/router}}

Vue.config.productionTip = false

{{#garudaAdmin}}
Vue.use(VueGarudaAdmin);
{{/garudaAdmin}}

{{#garuda}}
garuda.get()
.then(({{#store}}config{{/store}}) => {
  {{#store}}store.commit('config', config);{{/store}}
{{/garuda}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#store}}
  store,
  {{/store}}
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})

{{#garuda}}
});
{{/garuda}}
