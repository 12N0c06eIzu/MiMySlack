<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p>{{ result.data }}</p> -->
    <ul v-for="value in result.data" :key="value">
      <li v-for="item in value" :key="item">
        <!-- <p>{{item}}</p> -->
        <p>
          {{ item.id }} : {{item.name}}
        </p>
      </li>
    </ul>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data(){
    return{
      result: ""
    }
  },
  mounted() {
  axios
  .get("http://localhost:3000/workspaces/all")
  .then(res => {
    this.result = res
  })
},
}
</script>