<template>
  <div
    class="position-absolute top-0 end-0 me-5 shadow bg-body rounded" >
    <Delete :dataId="dataId"/>
    <button type="button" class="btn m-1 border">
      <Icons iconName="draw-pen"/>
    </button>
  </div>
</template>


<script>
import axios from 'axios';
import Icons from "@/components/utils/MdiIcons.vue";
import Delete from '@/components/utils/buttons/Delete.vue';

export default {
  name: "TooltipView",
  components: {
    Icons,
    Delete
  },
  props: {
      dataId: Number
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
      deleteBtn: function(){
          var data = {
              // コンテンツのID
              id: this.dataId,
              //
              tid: this.$store.state.threadFunction.threadId,
              // ログインユーザーのID
              uid: this.$store.state.authFunction.userId
          }

          let url = "http://localhost:3000/comments/delete";
          axios.post(url, data).then(() => {
              console.log("delete")
              
          })

          console.log(data);
      }
  },
  mounted() {},
};
</script>