<template>
  <div class="desktop">
    <Navbar />
    <splitpanes
      class="default-theme"
      style="width: 100%"
      @changeWs="onChangeWs"
    >
      <pane max-size="20" min-size="20">
        <Space />
      </pane>
      <Pane min-size="30">
        <Thread />
      </Pane>
      <Pane max-size="50">
        <Comments />
      </Pane>
    </splitpanes>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

// コンポーネント呼出
import Navbar from "@/components/Navbar.vue";
import Space from "@/components/Spaces.vue";
import Thread from "@/components/Threads.vue";
import Comments from "@/components/Comments.vue";

export default {
  name: "HomeView",
  components: {
    Splitpanes,
    Pane,
    Navbar,
    Space,
    Thread,
    Comments,
  },
  data() {
    return {
      result: "",
      val: "",
      pWsId: "",
    };
  },
  provide() {
    return {
      pWsId: this.pWsId,
      providedMethod: this.method,
    };
  },
  methods: {
    onChangeWs: function (e) {
      console.log("onChangeWs");
      console.log(e);
      this.val = e;
    },
  },
  mounted() {
    axios.get("http://localhost:3000/workspaces/all").then((res) => {
      this.result = res;
    });
  },
};
</script>