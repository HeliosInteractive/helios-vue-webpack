<template>
  <div class="screen-admin">
    <header>
      <h1>{{ name }} AdminPanel</h1>
      <h2>\{{ version }}</h2>
      <button @click="$router.push('/')">Return to App</button>
    </header>
    <section>
      <h2>Config</h2>
      <garuda-admin class="garuda-admin" @saved="configUpdated" @reverted="configUpdated" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Attract',
  computed: mapState(['version']),
  methods: {
    configUpdated(config) {
      /* eslint-disable no-console */
      this.$store.commit('config', config);
    },
  },
};
</script>

<style lang="scss" scoped>
.screen-admin {
  height: 100vh;
  overflow: auto;
  text-align: left;

  header {
    text-align: center;
  }
}

.garuda-admin {
  /deep/ input[type="text"] {
    width: 400px;
  }
}
</style>
