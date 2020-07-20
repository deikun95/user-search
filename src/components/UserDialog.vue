<template>
  <div class="dialog-card">
    <el-dialog :title="user.login" :visible="open" :show-close="false">
      <span class="close-button" @click="handleClose">x</span>
      <el-table :data="gridData">
        <el-table-column label="Profile">
          <a :href="`https://github.com/${user.login}`" target="_blank">Profile link</a>
        </el-table-column>
        <el-table-column label="Repositories">
          <a
            :href="`https://github.com/${user.login}?tab=repositories`"
            target="_blank"
          >Repositories link</a>
        </el-table-column>
        <el-table-column label="Gists">
          <a :href="`https://gist.github.com/${user.login}`" target="_blank">Gists link</a>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserDialog",
  props: {
    open: Boolean,
    user: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      gridData: [
        {
          profile: "profile"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["getUserRequest"]),
    handleClose() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.dialog-card {
  position: relative;
}
.close-button {
  position: absolute;
  display: block;
  top: 10px;
  right: 10px;
  font-size: 20px;
  z-index: 100;
  cursor: pointer;
}
</style>
