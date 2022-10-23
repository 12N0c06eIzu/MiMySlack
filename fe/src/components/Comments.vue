<template>
  <div class="space">
    <div>
      <ul>
        <li v-for="value in this.$store.state.commentFunction.commentList.data" :key="value">
          <div>
            <button class="btn btn-light openBtn" :value="value.id">
              {{value.content}}</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
// import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "HomeView",
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
    axios.get("http://localhost:3000/comments/all").then((res) => {
      this.result = res;
    });
  },
};
</script>