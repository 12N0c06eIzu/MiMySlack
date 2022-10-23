<template>
    <div class="input-group">
        <input type="hidden" :value="inputId">
        <input type="text" class="form-control">
        <button class="btn btn-outline-secondary">OK</button>
        <br>
    </div>
</template>
  
  
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//   import axios from "axios";
// import { Splitpanes, Pane } from "splitpanes";
export default {
    name: "HomeView",
    props: {
        title: String,
        inputId: Number
    },
    components: {
    },
    data() {
        return {
            result: "",
        };
    },
    methods: {
    },
    mounted() {
    },
};
</script>