<style lang="less" src="./vs.less" scoped></style>  

<template>
  <div class="shopcart-ctn">
    <!-- 购物车导航栏 -->
    <div class="shopcart">

      <div class="content" @click="showGoodList">
        <div class="content-left">
          <div class="logo-wrapper">

            <!-- 购物车图标 -->
            <!--高亮的状态： <div class="logo highlight"> -->
            <div class="logo"  :class="{'highlight':hasShopGoods}">
              <!-- 高亮状态：<i class="iconfont icon-Shoppingcart highlight"></i> -->
              <i class="iconfont icon-Shoppingcart" :class="{'highlight':hasShopGoods}"></i>
            </div>
            <!-- 购物车图标__end -->

            <!-- 当前购物车商品数据量 -->
            <div
              class="num"
              v-show="hasShopGoods"
            >{{getShopCatCount}}</div>
            <!-- 当前购物车商品数据量__end -->
          </div>

          <!-- 购物车需付金额 -->
          <!--高亮状态 <div class="price highlight">￥0</div> -->
          <div
            class="price"
             :class="{'highlight':hasShopGoods}"
          >￥{{needPay}}</div>
          <!-- 购物车需付金额__end -->

          <!-- 配送费 -->
          <div class="desc">另需配送费￥{{sellerInfo.seller.deliveryPrice}}元</div>
          <!-- 配送费__end -->

        </div>

        <!--起送费 -->
        <div class="content-right">
          <!-- <div class="pay not-enough"> -->
          <!-- <div class="pay enough"> -->
          <div class="pay" :class="[{'enough':needChaMoneyStr.flag},{'not-enough':!needChaMoneyStr.flag}]">
            {{needChaMoneyStr.tip}}
          </div>
        </div>
        <!-- 起送费__end -->

      </div>

      <!-- 购物车列表 -->
      <transition name="pageFade2">
        <div
          ref="shopcartlistdom"
          class="shopcart-list"
          v-show="goodListShow"
        >
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearfood()">清空</span>
          </div>
          <div class="list-content">
            <scrollY ref="scrolly1">
              <ul ref="shopListul">
                <li class="food" v-for="item in shopData"> 
                  <span class="name">{{item.name}}</span>
                  <div class="price"><span>￥{{item.price}}</span></div>
                  <div class="cartcontrol-wrapper">
                    <div class="cartcontrol">
                      <div class="cart-decrease" @click="decfood(item)">
                        <span class="iconfont icon-iconset0187"></span>
                      </div>
                      <div class="cart-count ">{{item.count}}</div>
                      <div class="cart-add" @click="addfood(item)">
                        <span class="iconfont icon-jia"></span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </scrollY>
          </div>
        </div>
      </transition>
      <!-- 购物车列表__end -->

    </div>
    <!-- 购物车导航栏__end -->

    <!-- 遮罩层 -->
    <div
      class="list-mask"
      v-show="goodListShow"
      @click="hideGoodList"
    ></div>
    <!-- 遮罩层__end -->

  </div>
</template>

<script src = "./vm.js"></script>
