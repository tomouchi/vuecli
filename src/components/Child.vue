<template>
  <section>
  <p>
    For a guide and recipes on how to configure / customize this project,<br>
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
  </p>
  <div>{{abc}}</div>
  </section>
</template>
<script>
import axios from "axios";
import mock from "fetch-mock";
mock.once("https://api.doorkeeper.jp/", {
  eee: 333
});
export default {
  name: "Child",
  data: function() {
    return {
      abc: ""
    };
  },
  created: function() {
    axios
      .get("https://api.doorkeeper.jp/")
      .then(response => (this.abc = response));
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
