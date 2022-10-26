<template>
  <div class="space">
    <Header title="スペース" />
    <InputForm 
    :inputId="this.$store.state.workspaceFunction.workspaceId"
    sendMode="S0002"
    />
    <div>
      <ul>
        <li v-for="(value) in this.$store.state.spaceFunction.spaceList.data" :key="value" class="row list-unstyled mt-1">
          <p class="text-start col-9">
            {{value.name}}
          </p>
          <button class="btn btn-light openBtn col-2 border" :value="value.id" @:click="openSpace(value.id)"> → </button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from "axios";
// import { Splitpanes, Pane } from "splitpanes";
import axios from "axios";

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
    searchSpaces: function () {
      console.log("exec searchSpaces");
    },
    openSpace: function (btnValue) {
      this.$store.state.spaceFunction.spaceId = btnValue;
      axios.get("http://localhost:3000/threads/searchThreads?id=" + btnValue)
        .then((res) => {
          this.$store.state.threadFunction.threadList.data = res.data;
        });
    }
  },
  mounted() {
  },
  watch: {
    pWsId: "searchSpaces"
  }
};
</script>