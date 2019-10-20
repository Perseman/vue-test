<style scoped lang="less" src="./vs.less"></style>

<template>
  <div
    class="sellerDetails-ctn"
    id="sellerDetails-container"
  >
    <!-- 导入头部组件 -->
    <sellersDetailsHeader></sellersDetailsHeader>
    <!-- 导入头部组件 -->

    <!-- 导航模块 -->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/sellerDetails/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link
          to="/sellerDetails/ratings"
          class=""
        >评论</router-link>
      </div>
      <div class="tab-item">
        <router-link
          to="/sellerDetails/sellers"
          class=""
        >商家</router-link>
      </div>
    </div>
    <!-- 导航模块__end -->

    <!-- 子视图 -->
    <div class="app-entry-rv-ctn">
      <router-view></router-view>
    </div>
    <!-- 子视图__end -->

    <!-- 购物车组件 -->
    <shopcart></shopcart>
    <!-- 购物车组件__end -->

  </div>
</template>

<script src = "./vm.js"></script>