<template>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="b in blogs"
        :key="b.id"
        class="col-4 rounded m-5 text-center shadow bg-light selectable"
      >
        <Blog :blog="b" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { blogsService } from "../services/BlogsService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await blogsService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      blogs: computed(() => AppState.blogs),
    };
  },
};
</script>
<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
