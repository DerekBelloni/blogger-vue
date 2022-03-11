<template>
  <div class="form-group">
    <label for="title" class="">Blog Title</label>
    <textarea
      v-model="editable.title"
      placeholder="title"
      type="text"
      class="form-control"
      name="title"
      id="title"
      rows="5"
    ></textarea>

    <label for="body" class="">Blog away bro!</label>
    <textarea
      v-model="editable.body"
      placeholder="body"
      type="text"
      class="form-control"
      name="body"
      id="body"
      rows="5"
    ></textarea>

    <label for="imgUrl" class="">image:</label>
    <input
      v-model="editable.imgUrlUrl"
      placeholder=""
      type="url"
      class="form-control"
      name="imgUrl"
      id="imgUrl"
      required
    />
    <button class="btn btn-success m-3" @click="createPost">
      Create Blog!
    </button>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { blogsService } from "../services/BlogsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { Modal } from "bootstrap";
import { router } from "../router";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async createPost() {
        try {
          let newBlog = await blogsService.createPost(editable.value);
          editable.value = {};
          Modal.getOrCreateInstance(document.getElementById("form-modal"));
          router.push({ name: "CarDetails", params: { id: newBlog } });
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>