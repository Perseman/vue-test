<style scoped lang="less" src="./vs.less"></style>

<template>
  <div
    id="login-container"
    class="login-ctn"
  >

    <!-- <div class="ztdv">
      字体字体字体
    </div> -->

    <div class="logo"></div>
    <div class="tabc-container">
      <div class="ui-row tabc-title">
        <div class="ui-col ui-col-100"><span class="tab-hvsp">短信登录</span></div>
      </div>
      <div class="tab-content">
        <div class="note-ctn">
          <section class="form-ipt ">
            <input
              type="text"
              placeholder="手机号"
              class="iphon-num"
              v-model="phoneNum"
            >
            <span
              class="validate-code-dv"
              @click="getValidateCode"
            >
              <span
                class="btn-validate-code"
                :class="{'get-vcstatus':!isSendCode}"
              >{{checkedTip}}</span>
            </span>
          </section>
          <section class="form-ipt">
            <input
              type="text"
              placeholder="验证码"
              class="check-num"
              v-model="checkedNum"
            ></section>
        </div>
        <div
          class="count-ctn"
          style="display: none;"
        >
          <section class="form-ipt"><input
              type="text"
              placeholder="账号"
              class="count-ipt"
            ></section>
          <section class="form-ipt"><input
              type="password"
              placeholder="密码"
              class="pwd-ipt"
            ></section>
        </div>
      </div>
    </div>
    <div class="warn-tip">温馨提示:未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意！
      <a href="">用户服务协议</a></div>
    <div class="btn-login"><button
        class="ui-btn-lg ui-btn-primary"
        @click="loginfn"
      >登录</button></div>
    <div class="about-us">
      关于我们
    </div>
  </div>
</template>

<script src = "./vm.js"></script>