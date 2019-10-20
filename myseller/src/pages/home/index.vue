<style scoped lang="less" src="./vs.less"></style>

<template>
  <div
    class="app-entry-ctn"
    id="app-entry-container"
    ref="apEntry"
  >
    <div class="app-entry-rv-ctn">
      <router-view></router-view>
    </div>

    <!-- 尾部导航栏start -->
    <footer
      data-v-772ae792=""
      data-v-4ec60fb3=""
      id="footer-container"
      class="footer-ctn"
    >
      <section
        data-v-772ae792=""
        class="ui-row-flex"
      >
        <section
          data-v-772ae792=""
          class="ui-col ui-col fm-cell"
        >
          <a
            data-v-772ae792=""
            href="#/home/homeIndex"
            class="router-link-exact-active router-link-active"
          ><span
              data-v-772ae792=""
              class="iconfont"
            ></span>
            <span
              data-v-772ae792=""
              class="fm-tip"
            >首页</span></a>
        </section>
        <section
          data-v-772ae792=""
          class="ui-col ui-col fm-cell"
        >
          <a
            data-v-772ae792=""
            href="#/home/discovery"
            class=""
          ><span
              data-v-772ae792=""
              class="iconfont"
            ></span>
            <span
              data-v-772ae792=""
              class="fm-tip"
            >发现</span></a>
        </section>
        <section
          data-v-772ae792=""
          class="ui-col ui-col fm-cell"
        >
          <a
            data-v-772ae792=""
            href="#/home/orderForm"
            class=""
          ><span
              data-v-772ae792=""
              class="iconfont"
            ></span>
            <span
              data-v-772ae792=""
              class="fm-tip"
            >订单</span></a>
        </section>
        <section
          data-v-772ae792=""
          class="ui-col ui-col fm-cell"
        >
          <a
            data-v-772ae792=""
            href="#/home/userCenter"
            class=""
          ><span
              data-v-772ae792=""
              class="iconfont"
            ></span>
            <span
              data-v-772ae792=""
              class="fm-tip"
            >我的</span></a>
        </section>
      </section>
    </footer>
    <!-- 尾部导航栏end -->

  </div>
</template>

<script src = "./vm.js"></script>