<template>
  <div
    class="position-absolute top-0 end-0 me-5 shadow bg-body rounded" >
    <button type="button" class="btn m-1 border">
      <icon class="mdi mdi-trash-can-outline"></icon>
    </button>
    <button type="button" class="btn m-1 border">
      <icon class="mdi mdi-draw-pen"></icon>
    </button>
  </div>
</template>


<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      selected: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>