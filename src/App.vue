<template>
  <header>
    <b
      title="Create Car"
      class="
        create-btn
        btn btn-success
        rounded-pill
        shadow
        d-flex
        align-items-center
        justify-content-center
      "
      data-bs-toggle="modal"
      data-bs-target="#form-modal"
    >
      <i class="mdi mdi-plus"></i>
    </b>
    <Navbar />
  </header>
  <main>
    <router-view />
    <Modal>
      <template #modal-title>Create Blog Post!</template>
      <template #modal-body><CreateBlogForm /></template>
    </Modal>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.create-btn {
  font-size: 20px;
  height: 60px;
  width: 60px;
  z-index: 100;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
}
</style>
