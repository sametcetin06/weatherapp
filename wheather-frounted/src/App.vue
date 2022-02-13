<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['auth']),
  },
  created() {
    if (!this.auth) {
      this.$router.push({ name: 'login' })
    } else {
      this.$router.push({ name: 'dashboard' })
    }
  },
  watch: {
    // auth() {
    //   if (!this.auth) {
    //     this.$router.push({ name: 'login' })
    //   } else {
    //     this.$router.push({ name: 'dashboard' })
    //   }
    // }
  }
};
</script>
