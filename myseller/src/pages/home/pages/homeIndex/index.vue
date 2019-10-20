<style lang="less" src="./vs.less" scoped></style>

<template>
  <div
   ref="homeindexctn"
    class="homeIndex-ctn"
    id="homeIndex-container"
  >
    <!-- 遮罩层 -->
    <div class="hic-mask"></div>
    <!-- 遮罩层__end -->
    <scrollY ref="scrolly1"  @change="scrollchange">
    <div ref="homeInnerCtn">
      <!-- 地址 -->
      <section
        class="address-stn"
        ref="addressStn"
      >
        <router-link
          to="/selectAddress"
          replace
          class="address-link"
        >
          <span class="iconfont address-icon1">&#xe62e;</span>
          <span class="address-txt">地址</span>
          <span class="iconfont address-icon2 ">&#xe623;</span>
        </router-link>
      </section>
      <!-- 地址__end -->

      <!-- 搜索模块 -->
      <section class="search-stn">
        <section
          class="search-inner-fixed"
          ref="searchctn"
        >
          <div class="search-inner">
            <span class="iconfont">&#xe620;</span>
            <span class="search-tips">搜索饿了么商家、商品名称</span>
          </div>
        </section>
        <section class="clone-search-inner"></section>
      </section>
      <!-- 搜索模块_end -->

      <!-- 轮播图模块 -->
      <bannerSlider  ref="bannerSlider1" :bannerList="imgList">
      </bannerSlider>
      <!--  轮播图模块_end -->

      <!-- 套餐模块 -->
      <section class="set-meal-stn">
        <a
          href=""
          class="set-meal-link clear"
        >
          <div class="sm-content">
            <div class="sm-tip1">品质套餐</div>
            <div class="sm-tip2">搭配齐全配得好</div>
            <div class="sm-tip3">立即抢购 >></div>
          </div>

          <section class="sm-img">
            <img
              src="img/setMeal.png"
              alt=""
            />
          </section>
        </a>
      </section>
      <!-- 套餐模块_end -->

      <!-- 推荐商家模块 -->
      <div
        class="rcment-ctn"
        ref="recommend-merchant"
      >
        <section class="rcm-title">推荐商家</section>
        <section class="recomend-merchangt-list">
          <section class="recommend-merchangt-cell" v-for="item in sellerList"  @click="goSellerDetails">
            <section class="rm-l">
              <img
                :src="item.restaurant.imgurl"
                class="rml-img"
              />
            </section>
            <section class="rm-r">
              <div class="rmr-ctn1">
                <div class="rmrc-pp">
                  <span>品牌</span>
                </div>
                <div class="rmrc-title ellipsis">{{item.restaurant.name}}</div>
                <div class="rmrcc-piao">票</div>
              </div>
              <div class="rmr-ctn2">
                <div class="rmrc2-start clear">
                  <span class="rmrcs2-start">
                    <span class="rmrcs2-start-gray">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" />
                    </span>
                    <span
                      class="rmrcs2-start-actived"
                      :style="{width: `${(item.restaurant.rating/5)*100}%`}"
                    >
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" />
                    </span>
                  </span>
                  <span>{{item.restaurant.rating}}</span>
                </div>
                <div class="rmrc2-tip">月售{{item.restaurant.recent_order_num}}单</div>
                <div class="rmrc2-fnzs">
                  <span>蜂鸟专送</span>
                </div>
              </div>
              <div class="rmr-ctn3">
                <div class="rmrc-dv1">
                  <span class="">¥{{item.restaurant.float_minimum_order_amount}}元起送</span>
                  <span v-if="item.restaurant.float_delivery_fee==0">免费配送</span>
                  <span class="">配送费¥{{item.restaurant.float_delivery_fee}}</span>
                </div>
                <div class="rmrc-dv2">
                  <span class="">{{parseInt(item.restaurant.longitude)}}km</span>
                  <span class="">{{item.restaurant.order_lead_time}}分钟</span>
                </div>
              </div>
              <div class="rmr-ctn4">
                <span>口碑人气好</span>
              </div>
            </section>
          </section>

        
        </section>
      </div>
      <!-- 推荐商家模块_end -->

      <!-- 下拉加载显示更多容器 -->
      <div class="load-more-ctn">
        <div class="lmc-loaded-tip" v-show="!hasData">
          <span>我是有底线的！</span>
        </div>
        <div class="lmc-loading-tip" v-show="hasData">
          <span class="iconfont helloloading">&#xe600;</span>
          <span>加载中...</span>
        </div>
      </div>
      <!-- 下拉加载显示更多容器__end -->
    </div>
    </scrollY>
  </div>
</template>

<script src = "./vm.js"></script>
