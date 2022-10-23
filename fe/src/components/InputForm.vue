<template>
  <div class="input-group px-3 pb-3">
    <input type="hidden" :value="inputId" />
    <input type="hidden" :value="sendMode" />
    <input type="text" class="form-control" v-model="text" />
    <button class="btn btn-outline-secondary" @:click="send">OK</button>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
// import { Splitpanes, Pane } from "splitpanes";
export default {
  name: "HomeView",
  props: {
    title: String,
    inputId: Number,
    sendMode: String,
  },
  components: {},
  data() {
    return {
      text: "",
    };
  },
  methods: {
    send: function () {
      console.log("送信モード: " + this.sendMode);
      console.log("送信先ID: " + this.inputId);
      console.log("送信メッセージ: " + this.text);
      if (this.inputId <= 0) {
        console.log("送信先のIDが0のため不正です。");
        return "error";
      }
      if (this.text == "") {
        console.log("テキストが空のため不正です。");
        return "error";
      }
      let url = "";
      let route = [];
      // URLだけ調節するようにする方がコードがシンプルになりそう。
      switch (this.sendMode) {
        case "S0001":
          console.log(this.sendMode);
          break;

        case "S0002":
          console.log(this.sendMode);
          break;

        case "S0003":
          url = "http://localhost:3000/threads/";
          route.push("create", "searchThreads?id=");
          console.log(this.sendMode);
          break;

        case "S0004":
          url = "http://localhost:3000/comments/";
          route.push("create", "searchComments?id=");
          console.log(this.sendMode);
          break;

        default:
          console.log("送信処理分岐の対象外");
          break;
      }
      // URLを動的に変更
      axios
        .post(url + route[0], {
          // parentID
          pid: this.inputId,
          // childId
          cid: this.$store.state.authFunction.userId,
          // content
          content: this.text,
        })
        .then((res) => {
          console.log(res.data);
          axios.get(url + route[1] + this.inputId).then((res) => {
            switch (this.sendMode) {
              case "S0001":
                break;
              case "S0002":
                break;
              case "S0003":
                this.$store.state.threadFunction.threadList.data = res.data;
                break;
              case "S0004":
                this.$store.state.commentFunction.commentList.data = res.data;
                break;
              default:
                break;
            }
            // 入力値を初期化
            this.text = "";
          });
        });
    },
  },
  mounted() {},
};
</script>