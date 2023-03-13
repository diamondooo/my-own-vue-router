<template>
  <div>Bar</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("Bar::beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Bar::beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Bar::beforeRouteLeave");
    next();
  }
};
</script>s