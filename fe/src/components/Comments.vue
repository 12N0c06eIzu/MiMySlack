<template>
  <div class="space">
    <Header title="コメント" />
    <InputForm 
    :inputId="this.$store.state.threadFunction.threadId"
    sendMode="S0004"
    />
    <div>
      <ul>
        <li v-for="value in this.$store.state.commentFunction.commentList.data" :key="value" class="row list-unstyled">
          <div>
            <p class="text-start col-9">
              ○： {{value.content}}
            </p>
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
  },
  mounted() {
    axios.get("http://localhost:3000/comments/all").then((res) => {
      this.result = res;
    });
  },
};
</script>