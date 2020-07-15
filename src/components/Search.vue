<template>
  <div class="wrapper">
    <input
      v-model="query"
      @input="debouncedSearch"
      class="search"
      type="text"
      placeholder="Please enter login..."
    />
    <el-select @change="sortHandler" v-model="value" placeholder="Select">
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
          value: "down",
          label: "Descending"
        },
        {
          value: "up",
          label: "Ascending"
        }
      ],
      value: "Sort by"
    };
  },
  name: "Search",
  methods: {
    ...mapActions(["getUsersRequest", "setSearch", "setInfo"]),
    debouncedSearch: debounce(function() {
      this.getUsersRequest({ name: this.query });
      this.setSearch({ query: this.query });
    }, 200),
    sortHandler() {
      this.setInfo({ value: this.value, name: this.query });
    }
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