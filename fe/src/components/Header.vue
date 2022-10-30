<template>
    <div class="header">
        <p class="text-start ms-1">
            {{title}}
        </p>
    </div>
</template>
  
  
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//   import axios from "axios";
// import { Splitpanes, Pane } from "splitpanes";
export default {
    name: "HeaderView",
    props: {
        title: String
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