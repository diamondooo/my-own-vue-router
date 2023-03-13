<template>
  <div>Foo</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("foo::beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("foo::beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("foo::beforeRouteLeave");
    next();
  }
};
</script>s