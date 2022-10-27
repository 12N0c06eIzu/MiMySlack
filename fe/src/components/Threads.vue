<template>
  <div class="space">
    <Header title="スレッド" />
    <InputForm
    :inputId="this.$store.state.spaceFunction.spaceId"
    sendMode="S0003"
    />
    <div>
      <ul>
        <li v-for="value in this.$store.state.threadFunction.threadList.data" :key="value" class="row list-unstyled mt-1">
          <p class="text-start col-10">
            {{value.content}}
          </p>
          <button class="btn btn-light openBtn col-1 border" :value="value.id" @:click="openThread(value.id)">
            <icon class="mdi mdi-arrow-right-thick"></icon>
          </button>
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
import Header from "../components/Header.vue"
import InputForm from "../components/InputForm.vue"

export default {
  name: "HomeView",
  components: {
    Header,
    InputForm
  },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    openThread: function (btnValue) {
      this.$store.state.threadFunction.threadId = btnValue;
      // this.$store.state.spaceFunction.spaceId = btnValue;
      axios.get("http://localhost:3000/comments/searchComments?id=" + btnValue)
        .then((res) => {
          this.$store.state.commentFunction.commentList.data = res.data;
        });
    }
  },
  mounted() {
  },
};
</script>