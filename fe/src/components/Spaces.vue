<template>
  <div class="space">
    <div>
      <!-- <ul v-for="value in result.data" :key="value"> -->
        <!-- <li v-for="item in value" :key="item"> -->
            <!-- {{item}} -->
          <!-- <p>{{ item.id }} : {{ item.name }}</p> -->
        <!-- </li> -->
      <!-- </ul> -->
      <ul>
        <li v-for="(value) in this.$store.state.spaceFunction.spaceList.data" :key="value">
          id {{ value.id }} 
          name {{ value.name}}
          <!-- {{value["data"]}} -->
        </li>
      </ul>
      <!-- {{ $store.state.spaceFunction.spaceList }} -->
      <!-- gege -->
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from "axios";
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
    searchSpaces: function(){
      console.log("exec searchSpaces");
    },
  },
  mounted() {
    // axios.get("http://localhost:3000/spaces/all").then((res) => {
    //   this.result = res;
    // });
  },
  watch: {
    pWsId: "searchSpaces"
  }
};
</script>