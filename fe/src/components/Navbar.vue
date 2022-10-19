<template>
<div class="navbar">
    <b-navbar>
        <b-navbar-brand href="/">MyMiniSlack</b-navbar-brand>
        <b-form-select v-model="selected" v-on:change="selectWs">
            <b-form-select-option
             v-for="value in result.data"
             :key="value.id" 
             :value="value.id">
                {{value.name}}
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
        selected: null,
        result: "",
        val: ""
        };
    },
    methods: {
        selectWs: function(e) {
            axios.get("http://localhost:3000/spaces/searchSpaces?pk_wid="+ e)
                .then((res) => {
                    this.$store.state.spaceFunction.spaceList.data = res.data;
                });
        }
    },
    mounted() {
        // const target_id = $store.state.authFunction.userId
        axios.get("http://localhost:3000/workspaces/all" )
            .then((res) => {
                this.result = res.data;
            });
    },
};
</script>