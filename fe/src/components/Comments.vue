<template>
  <div class="space">
    <Header title="コメント" />
    <InputForm
      :inputId="this.$store.state.threadFunction.threadId"
      sendMode="S0004"
    />
    <div>
      <ul>
        <li
          v-for="(value, index) in this.$store.state.commentFunction.commentList
            .data"
          :key="value"
          class="row list-unstyled pe-3 mt-1"
        >
          <div @:mouseover="showTooltip(index)" @:mouseleave="hiddenTooltip(index)" class="position-relative">
            <p class="text-start col-9 lh-base txt">○：{{ filterValue(value.content) }}</p>
            <div
              v-show="hoverFlag && index === showContentIndex"
              class="text-end"
            >
              <TooltipVue :dataId="value.id"/>
            </div>
          </div>
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
import "splitpanes/dist/splitpanes.css";
import Header from "../components/Header.vue";
import InputForm from "../components/InputForm.vue";
import TooltipVue from "./utils/Tooltip.vue";

export default {
  name: "CommentsView",
  components: {
    Header,
    InputForm,
    TooltipVue,
  },
  data() {
    return {
      result: "",
      hoverFlag: false,
      showContentIndex: null,
    };
  },
  methods: {
    filterValue: function(txt) {
      const regex = / /;
      return txt.replace(regex, '<br>');
    },
    /**
     * ツールチップを表示する。
     * @param {*} idx Hoverした要素のIndex
     */
    showTooltip: function (idx) {
      this.hoverFlag = true;
      this.showContentIndex = idx;
    },
    /**
     * ツールチップを非表示する。
     * @param {*} idx Hoverした要素のIndex
     */
     hiddenTooltip: function() {
      this.hoverFlag = false;
    }
  },
  mounted() {},
};
</script>

<style scoped>
.txt p {
  white-space: pre;
}
</style>