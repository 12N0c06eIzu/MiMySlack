<template>
<div class="navbar">
    <b-navbar>
        <b-navbar-brand href="/">MyMiniSlack</b-navbar-brand>
        <b-form-select v-model="selected">
            <b-form-select-option v-for="value in result.data" :key="value.id" :value="value.id">{{value.name}}</b-form-select-option>
        </b-form-select>
    </b-navbar>
    <!-- {{result.data}} -->
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
        };
    },
    mounted() {
        axios.get("http://localhost:3000/workspaces/all").then((res) => {
        this.result = res.data;
        });
    },
};
</script>