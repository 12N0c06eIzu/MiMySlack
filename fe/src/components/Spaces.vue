<template>
  <div class="space">
    <Header title="スペース" />
    <InputForm 
    :inputId="this.$store.state.workspaceFunction.workspaceId"
    sendMode="S0002"
    />
    <div>
      <ul class="textList">
        <li v-for="(value) in this.$store.state.spaceFunction.spaceList.data" :key="value" class="row list-unstyled my-2">
          <!-- <p class="text-start col-8">
            {{value.name}}
          </p> -->
          <button class="btn btn-light openBtn" :value="value.id" @:click="openSpace(value.id)">
            {{value.name}}

            <!-- <Icons iconName="arrow-right-thick"/> -->
          </button>
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
// import Icons from "@/components/utils/MdiIcons.vue";


export default {
  name: "HomeView",
  components: {
    Header,
    InputForm,
    // Icons
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
<style>
.textList {
  padding-left: 0px;
}
</style>