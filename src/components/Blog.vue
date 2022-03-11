<template>
  <router-link :to="{ name: 'ActiveBlog', params: { id: blog.id } }">
    <div class="row" @click="setActive">
      <h1>{{ blog.title }}</h1>
      <img class="img-fluid p-3" :src="blog.imgUrl" alt="" />
      <h4>{{ blog.creator?.name }}</h4>
    </div>
  </router-link>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { blogsService } from "../services/BlogsService";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      setActive() {
        blogsService.setActive(props.blog);
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>