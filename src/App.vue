<template>
  <div id="app">
    <el-card class="box-card">
      <div slot="header" class="input">
        <input class="search" type="text" placeholder="Please enter login..." />
      </div>
      <div class="user">
        <ul class="list">
          <li class="item">
            <div class="img"></div>
            <div class="name">
              <span class="username">Deikun95</span>
            </div>
          </li>
          <li class="item">
            <div class="img"></div>
            <div class="name">
              <span class="username">Deikun95</span>
            </div>
          </li>
          <li class="item">
            <div class="img"></div>
            <div class="name">
              <span class="username">Deikun95</span>
            </div>
          </li>
          <li class="item">
            <div class="img"></div>
            <div class="name">
              <span class="username">Deikun95</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="pages">
        <el-pagination layout="prev, pager, next" :total="70"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

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
  margin-top: 50px;
}
.search {
  width: 400px;
  height: 50px;
  font-size: 30px;
  outline: none;
  border: 1px solid rgb(179, 179, 179);
}
.user {
  display: flex;
  justify-content: center;
  overflow-y: auto;
  height: 426px;
}
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
  &:last-child {
    margin-bottom: 0;
  }
}
.img {
  // display: flex;
  // justify-content: flex-start;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-image: url(./assets/user-photo.png);
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
.pages{
  margin-top: 20px;
}
</style>
