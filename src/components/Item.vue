<template>
  <li class="item">
    <img :src="user.avatar_url" alt="" class="img">
    <div class="name">
      <span class="username">{{user.login}}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss">
.item {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 80px;
  border: 2px solid rgb(235, 235, 235);
  margin-bottom: 30px;
  border-radius: 50px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: rgba(235, 235, 235, 0.4);
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.img {
  display: flex;
  // justify-content: flex-start;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-image: url();
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.name {
  margin: auto;
}
.username {
  font-size: 20px;
}

</style>