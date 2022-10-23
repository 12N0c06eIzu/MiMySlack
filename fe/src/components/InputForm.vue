<template>
    <div class="input-group px-3 pb-3">
        <input type="hidden" :value="inputId">
        <input type="hidden" :value="sendMode">
        <input type="text" class="form-control" v-model="text">
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
        sendMode: String
    },
    components: {
    },
    data() {
        return {
            text: ""
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
            if ( this.text == "" ) {
                console.log("テキストが空のため不正です。")
                return "error";
            }
            // let url = "";
            switch (this.sendMode) {
                case "S0001":
                    console.log(this.sendMode);
                    break;

                case "S0002":
                    console.log(this.sendMode);
                    break;

                case "S0003":
                    console.log(this.sendMode);
                    break;

                case "S0004":
                    axios.post("http://localhost:3000/comments/create",{
                        tid: this.inputId,
                        uid: this.$store.state.authFunction.userId,
                        content: this.text
                    })
                        .then((res) => {
                            console.log(res.data);
                        });

                    console.log(this.sendMode);
                    break;

                default:
                    console.log("送信処理分岐の対象外");
            }
        }
    },
    mounted() {
    },
};
</script>