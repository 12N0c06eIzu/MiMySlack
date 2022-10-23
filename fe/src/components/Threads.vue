<template>
  <div class="space">
    <div>
      <ul>
        <li v-for="value in this.$store.state.threadFunction.threadList.data" :key="value">
          <div>
            <button class="btn btn-light openBtn" :value="value.id" @:click="openThread(value.id)">
              {{value.content}} → </button>
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
    openThread: function (btnValue) {
      console.log(btnValue);
      // this.$store.state.spaceFunction.spaceId = btnValue;
      axios.get("http://localhost:3000/comments/searchComments?id=" + btnValue)
        .then((res) => {
          this.$store.state.commentFunction.commentList.data = res.data;
        });
    }
  },
  mounted() {
    // axios.get("http://localhost:3000/threads/all").then((res) => {
    //   this.result = res;
    // });
  },
};
</script>