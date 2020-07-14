<template>
  <div id="app">
    <el-card class="box-card">
      <div slot="header" class="input">
        <Search />
      </div>
      <div class="user">
        <Users />
      </div>
      <transition name="slide-fade">
        <div v-if="getUsers.length" class="pages">
          <el-pagination layout="prev, pager, next" :total="70"></el-pagination>
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
import Search from "./components/Search";
import Users from "./components/Users";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Users,
    Search
  },
  computed: {
    ...mapGetters(["getUsers"])
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
li {
  list-style-type: none;
}

.input:before,
.input:after {
  display: table;
  content: "";
}
.input:after {
  clear: both;
}

.box-card {
  width: 480px;
  height: 597px;
  margin-top: 50px;
}

.user {
  display: flex;
  justify-content: center;
  overflow-y: auto;
  height: 426px;
  transform: height 1s;
}

.pages {
  margin-top: 20px;
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>
