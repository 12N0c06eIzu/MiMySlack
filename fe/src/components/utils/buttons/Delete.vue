<template>
  <button type="button" class="btn m-1 border" @click="deleteBtn">
    <Icons iconName="trash-can-outline" />
  </button>
</template>


<script>
import Icons from "@/components/utils/MdiIcons.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Icons,
  },
  props: {
    dataId: Number,
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    deleteBtn: function () {
      var data = {
        // コンテンツのID
        id: this.dataId,
        // スレッドID
        tid: this.$store.state.threadFunction.threadId,
        // ログインユーザーのID
        uid: this.$store.state.authFunction.userId,
      };

      let url = "http://localhost:3000/comments/delete";
      axios.post(url, data).then(() => {
        axios.get("http://localhost:3000/comments/searchComments?id=" + this.$store.state.threadFunction.threadId)
        .then((res) => {
          this.$store.state.commentFunction.commentList.data = res.data;
        });
      });

      console.log(data);
    },
  },
  mounted() {},
};
</script>