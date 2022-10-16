<template>
  <div class="space">
    <div>
      <ul v-for="value in result.data" :key="value">
        <li v-for="item in value" :key="item">
          <p>{{ item.id }} : {{ item.content }}</p>
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
  mounted() {
    axios.get("http://localhost:3000/threads/all").then((res) => {
      this.result = res;
    });
  },
};
</script>