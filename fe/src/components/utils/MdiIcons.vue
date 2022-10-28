<template>
    <icon :class="mdiFonts(iconName)"></icon>
</template>

<script>

export default {
    name: "HomeView",
    props: {
        iconName: String
    },
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
        mdiFonts: function(str){
            return "mdi mdi-" + str 
        }
    },
    mounted() {
    },
};
</script>