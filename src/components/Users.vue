<template>
  <ul class="list">
      <Item v-for="user in getUsers" :key="user.id" :user="user" />
      <transition name="fade">
    <h2 class="empty-title" v-if="!getUsers.length">List is empty now or login is not found</h2>
     </transition>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import Item from "./Item";
export default {
  name: "Users",
  components: {
    Item
  },
  computed: {
    ...mapGetters(["getUsers"])
  }
};
</script>

<style lang="scss">
.empty-title {
  margin-top: 180px;
  line-height: 30px;
  width: 250px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>