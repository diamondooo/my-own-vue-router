<template>
  <a class="link" @click="jump">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    jump() {
      const router = this._routerRoot._router;

      router.push(this.to);
    }
  }
};
</script>

<style scoped>
.link {
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
}
</style>