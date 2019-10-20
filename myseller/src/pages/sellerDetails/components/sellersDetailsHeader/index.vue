<style lang="less" src="./vs.less" scoped></style>  

<template>
  <div class="sellersDetailsHeader-ctn">

    <!-- 头部模块 -->
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img
            width="64"
            height="64"
            :src="sellerInfo.seller.avatar"
          />
        </div>

        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{sellerInfo.seller.name}}</span>
          </div>
          <div class="description">
            蜂鸟专送/{{sellerInfo.seller.deliveryTime}}分钟送达
          </div>
          <div class="support">
            <span class="icon decrease"></span>
            <span
              class="text"
              v-if="sellerInfo.seller.supports.length>0"
            >{{sellerInfo.seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="support-count">
          <span class="count">{{sellerInfo.seller.supports.length}}个</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
      <div
        class="bulletin-wrapper"
        @click="showDetailsFn"
      >
        <span class="bulletin-title"></span>
        <span class="bulletin-text">{{sellerInfo.seller.bulletin}}</span>
        <i class="iconfont icon-right"></i>
      </div>
      <div class="background">
        <div class="background-iner"></div>
        <img
          width="100%"
          height="100%"
          :src="sellerInfo.seller.avatar"
        />
      </div>

      <transition name="pageFade2">
        <div
          class="detail"
          v-show="isShowDetails"
        >
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{sellerInfo.seller.name}}</h1>
              <div class="star-wrapper">
                <div class="star star-48">
                  <span class="star-item on"></span><span class="star-item on"></span><span class="star-item on"></span><span class="star-item on"></span><span class="star-item off"></span>
                </div>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul class="supports">
                <li
                  class="support-item"
                  v-for="item in sellerInfo.seller.supports"
                >
                  <span
                    class="icon"
                    :class="supportCssList[item.type]"
                  ></span>
                  <span class="text">{{item.description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="bulletin">
                <p class="content">
                  {{sellerInfo.seller.bulletin}}
                </p>
              </div>
            </div>
          </div>
          <div
            class="detail-close"
            @click="hideDetails"
          ><i class="iconfont icon-close"></i></div>
        </div>
      </transition>
    </div>

    <!-- 头部模块__end -->
  </div>
</template>

<script src = "./vm.js"></script>
