/* eslint-disable */
<template>
  <div>
    <button @click="getTeacupData">Get Teacup Data</button>
    <div>
      <span class="quote">{{ randomQuote }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Teacup",
  data() {
    return {
      teacupDataList: []
    };
  },
  computed: {
    randomQuote() {
      const rand = Math.floor(Math.random() * this.teacupDataList.length);
      return this.teacupDataList[rand] ? this.teacupDataList[rand].quote : "";
    }
  },

  methods: {
    getTeacupData() {
      axios.get("./teacupProph.json").then(response => {
     console.log(response.data)
     this.teacupDataList = response.data;
      }).catch(err=>{
        console.log(err)
      });
    }
  }
};
</script>
<style scoped>
.quote {
  margin: 10px 10px;
}
.teacup-data {
  padding: 5%;
  border: solid #363636 1px;
}
button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
</style>
