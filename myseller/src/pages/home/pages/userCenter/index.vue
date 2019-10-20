<style lang="less" src="./vs.less" scoped></style>

<template>
  <div
    class="userCenter-ctn"
    id="userCenter-container"
  >
    用户中心

    <img :src="userInfo.avatar"
    alt=""
    srcset="">
    <div>用户名:{{userInfo.username}}</div>
    <div>手机号:{{userInfo.mobile}}</div>
   
  </div>
</template>

<script src = "./vm.js"></script>
