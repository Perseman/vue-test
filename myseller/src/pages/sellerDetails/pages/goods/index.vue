<style scoped lang="less" src="./vs.less"></style>

<template>
  <div
    class="goods-ctn"
    id="goods-container"
  >
    <div class="mask-ctn" v-show="false">
    </div>

    <div class="goods">
        <!-- 商品类型列表 -->
        <div class="menu-wrapper">   
            <scrollY ref="scrollY1">
                <ul>
                    <li class="menu-item" :class="{current:(item.name==goodsTypeList[0].name)}"   v-for="item in goodsTypeList" @click="selGoodsTypefn(item.id)">
                        <span class="text border-1px">                                              
                            <span class="icon"   :class="[goodsTypeCssList[item.type]]"    v-if="item.type!=-1"></span>
                            {{item.name}}
                        </span> 
                    </li>
                </ul>
            </scrollY>    
        </div>

        <!-- 商品列表 -->
        <div class="foods-wrapper">
            <scrollY ref="scrollY2">
                <ul>
                    <li class="food-list">
                        <h1 class="title">{{goodsTitle}}</h1>
                    
                    <ul>
                    <li class="food-item border-1px"   v-for="item2 in goodsList" >
                        <div class="icon">
                            <img width="57" height="57" :src="item2.image">
                        </div>
                        <div class="content">
                            <h2 class="name">{{item2.name}}</h2>
                            <p class="desc">{{item2.description}}</p>
                            <div class="extra">
                                <span class="count">月售{{item2.sellCount}}份</span>
                                <span>好评率{{item2.rating}}%</span>
                            </div>
                            <div class="price"><span class="now">￥{{item2.price}}</span>
                                
                            <!-- 旧价格 -->
                            <span
                                class="old"
                                v-if="parseInt(item2.oldPrice)>0"
                            >￥{{item2.oldPrice}}</span>
                            <!-- 旧价格__end -->
                            </div>
                        </div>

                        <!-- 购物车按钮 -->
                        <div class="shop-btn-dv" @click="addGoodsToShopCat(item2)"> 
                            <i class="iconfont icon-Shoppingcart"></i>
                        </div>
                    </li>
                    </ul>
                    </li>
                </ul>
            </scrollY>

        </div>
    </div>
  </div>
</template>

<script src = "./vm.js"></script>