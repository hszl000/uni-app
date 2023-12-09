<template>
  <view class="zyt-mine">
    <view class="user">
      <view class="user-pic">
        <van-image
          round
          width="5rem"
          height="5rem"
          class="user-filter"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <text class="user-name">
          zyt朱丫头
        </text>
      </view>
      <!-- <view class="user-detail"></view> -->
      <van-grid :border="false">
        <van-grid-item
          v-for="(item,index) in gridList"
          :key="index"
          v-bind="item"
        />
      </van-grid>
    </view>
    <view>
      近期购买
      <order-form-list :data="list" />
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import orderFormList from "comps/order-from-list.vue";
const gridList = [
  {
    icon:'todo-list',
    text:'我的订单'
  },
  {
    icon:'records',
    text:'我的评价'
  },
  {
    icon:'goods-collect',
    text:'收藏商品'
  },
  {
    icon:'card',
    text:'我的钱包'
  }
]

const list = ref([
  {
    id:'001',
    price:"8990.9",
    title:"ipad-air5",
    thumb:"https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
    size:"10.9",
    color:'深空灰',
    status:0
  },
  {
    id:'002',
    price:"100.00",
    title:"耳机",
    thumb:"https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg",
    size:"10.9",
    color:'深空灰',
    status:1
  }
])
</script>

<style scoped lang="scss">
.zyt-mine{
  padding: 0 12px;

  .user{
    border-radius: 28px;
    background: #ffffff;
    overflow: hidden;
    .user-pic{
      padding: 30px;
      border-radius: 28px;
      position: relative;
      display: flex;//左右对齐
      flex-direction: column;//上下布局
      align-items: center;

      &::before{
        content: "";
        background: url(../../../static/logo.png) no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        filter: blur(2px);//模糊背景图片
        top: 0;
        left: 0;
        border-radius: 28px;

      }

      .user-name{
        color: red;
        position: relative;
      }
    }
  }
}
</style>