<template>
    <div class="navbar">
        <b-navbar>
            <b-navbar-brand href="/">MyMiniSlack</b-navbar-brand>
            <b-form-select v-model="selected" v-on:change="selectWs">
                <b-form-select-option v-for="value in result" :key="value.id" :value="value.id" v-model="selected">
                    {{value.Workspace.name}}
                </b-form-select-option>
            </b-form-select>
        </b-navbar>
    </div>
</template>


<script>
import axios from "axios";

export default {
    name: "HomeView",
    components: {
    },
    data() {
        return {
            selected: '',
            result: "",
            val: ""
        };
    },
    methods: {
        selectWs: function (e) {
            this.$store.state.workspaceFunction.workspaceId = e;
            axios.get("http://localhost:3000/spaces/searchSpaces?pk_wid=" + e)
                .then((res) => {
                    this.$store.state.spaceFunction.spaceList.data = res.data;
                });
        }
    },
    async mounted() {
        const target_id = this.$store.state.authFunction.userId;
        await axios.get("http://localhost:3000/auth/searchWs?id=" + target_id)
            .then((res) => {
                this.result = res.data;
            });
    },
};
</script>