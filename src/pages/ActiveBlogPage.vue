<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 rounded m-5 text-center shadow bg-light">
        <h1>{{ activeBlog.title }}</h1>
        <img class="img-fluid p-3" :src="activeBlog.imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>



<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      activeBlog: computed(() => AppState.activeBlog),
    };
  },
};
</script>




<style lang="scss" scoped>
</style>