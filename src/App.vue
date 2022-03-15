<template>
  <div class="page">
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  background-image: url("https://wallpaperaccess.com/full/946034.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #262c3a;
}
.page {
  color: white;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 100px;
}
</style>
