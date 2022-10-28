<template>
  <div
    class="position-absolute top-0 end-0 me-5 shadow bg-body rounded" >
    <button type="button" class="btn m-1 border">
      <Icons iconName="trash-can-outline"/>
    </button>
    <button type="button" class="btn m-1 border">
      <Icons iconName="draw-pen"/>
    </button>
  </div>
</template>


<script>
import Icons from "@/components/utils/MdiIcons.vue";

export default {
  name: "HomeView",
  components: {
    Icons
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>