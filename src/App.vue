<template>
  <div id="app">
    <el-card class="box-card">
      <div slot="header" class="input">
        <UserSearch />
      </div>
      <div class="user">
        <UserList />
      </div>
      <transition name="slide-fade">
        <div v-if="getUsers !== undefined" class="pages">
          <el-pagination
            @current-change="pageHandler"
            :current-page="getPageNumber"
            :pager-count="7"
            layout="prev, pager, next"
            :total="getTotalCount/3"
          ></el-pagination>
        </div>
      </transition>
    </el-card>
  </div>
</template>

<script>
import UserSearch from "./components/UserSearch";
import UserList from "./components/UserList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  components: {
    UserList,
    UserSearch
  },
  computed: {
    ...mapGetters(["getUsers", "getTotalCount", "getPageNumber", "getSearch"])
  },
  methods: {
    ...mapActions(["getPageValue"]),
    pageHandler(pageNumber) {
      this.getPageValue({ number: pageNumber, name: this.getSearch });
    }
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
  background-color: rgba(194, 220, 228, 0.849);
  height: 100vh;
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
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>
