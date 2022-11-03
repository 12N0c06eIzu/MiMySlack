<template>
  <div class="space">
    <Header title="スレッド" />
    <InputForm
      :inputId="this.$store.state.spaceFunction.spaceId"
      sendMode="S0003"
    />
    <div>
      <ul class="textList">
        <li
          v-for="value in this.$store.state.threadFunction.threadList.data"
          :key="value"
          class="row list-unstyled my-2"
        >
          <button
            class="btn btn-light openBtn px-3 "
            :value="value.id"
            @:click="openThread(value.id)"
          >
          {{value.content}}

            <!-- <Icons iconName="arrow-right-thick" /> -->
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
import Header from "../components/Header.vue";
import InputForm from "../components/InputForm.vue";

// import Icons from "@/components/utils/MdiIcons.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    InputForm,
    // Icons,
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
      axios
        .get(
          "http://localhost:3000/comments/searchComments?id=" +
            this.$store.state.threadFunction.threadId
        )
        .then((res) => {
          this.$store.state.commentFunction.commentList.data = res.data;
        });
    },
  },
  mounted() {},
};
</script>
<style>
.textList {
  padding-left: 0px;
}
</style>