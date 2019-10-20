<style lang="less" src="./vs.less" scoped></style>  

<template>

  <!-- 轮播图模块 -->
  <div
    class="slider-mobile-ctn"
    :id="sliderId"
  >
    <!-- 默认背景图片设置 -->
    <div class="sbc-defalut-bg">
      <img
        src="./img/banner_v2/default.jpg"
        class="sbc-defalut-img"
      />
    </div>
    <!-- 默认背景图片设置__end -->

    <div class="sbc-imglist">
      <ul class="sbcil-ul">
        <li
          class="sbcil-li"
          v-for="item in bannerList"
        >
          <img :src="item" />
        </li>
        <!-- <li class="sbcil-li">
          <img src="./img/banner_v2/01.jpg" />
        </li>
        <li class="sbcil-li">
          <img src="./img/banner_v2/02.jpg" />
        </li>
        <li class="sbcil-li">
          <img src="./img/banner_v2/03.jpg" />
        </li>
        <li class="sbcil-li">
          <img src="./img/banner_v2/04.jpg" />
        </li> -->
      </ul>
    </div>

    <div class="des-imglist">
      <ul class="sbcdil-ul">
        <li class="sbcdilul-li sbcdilul-li-act"></li>
        <li class="sbcdilul-li"></li>
        <li class="sbcdilul-li"></li>
        <li class="sbcdilul-li"></li>
      </ul>
    </div>
    <!-- 性能优化：遮罩层 -->
    <div class="slider-layer"></div>
    <!-- 性能优化：遮罩层__end -->

  </div>

  <!--  轮播图模块_end -->
  </transition>
</template>

<script src = "./vm.js"></script>
