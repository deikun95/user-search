<template>
  <div class="wrapper">
    <input
      v-model="query"
      @input="debouncedSearch"
      class="search"
      type="text"
      placeholder="Please enter login..."
    />
    <el-select v-model="value" placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      query: "",
      options: [
        {
          value: "По убыванию",
          label: "По убыванию"
        },
        {
          value: "По возрастанию",
          label: "По возрастанию"
        }
      ],
      value: "По убыванию"
    };
  },
  name: "Search",
  methods: {
    ...mapActions(["getUsersRequest"]),
    debouncedSearch: debounce(function() {
      this.getUsersRequest(this.query);
    }, 200)
  }
};
</script>npm i axios -S

<style lang="scss">
.search {
  width: 252px;
  height: 38px;
  font-size: 20px;
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-right: 20px;
  padding-left: 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus {
    border-color: #409eff;
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>