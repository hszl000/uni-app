<template>
  <view class="home-list">
    <view
      v-for="item in data"
      :key="item"
      class="list-goodsItem"
      @click="handleDetail"
    >
      <van-image
        width="100%"
        height="200"
        :src="item.productImageUrl"
      />
      <view class="goodsItem-content">
        <view>
          <view>{{ item.productDescription }}</view>
          <view>{{ item.productPrice }}</view>
        </view>
        <view>
          <van-icon
            name="cart-o"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {uni} from '@dcloudio/uni-h5'
defineProps({
  data:{
    type:Array,
    default:()=>([])
  }
})
const handleDetail = ()=>{
  // alert(111)
  //在起始页面跳转到test.vue页面并传递参数
  uni.navigateTo({
    url: '/modules/detail/pages/index?id=1&name=uniapp'
  });

}
</script>

<style scoped lang="scss">
  .home-list{
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    .list-goodsItem{
      background: #ffffff;
      width: calc(50% - 12px);
      border-radius: 20px;
      margin-top: 10px;
      overflow: hidden;

        &:nth-child(2n){
            margin-left: 20px;
        }

      .goodsItem-content{
        display: flex;
        justify-content: space-between;
        padding: 12px;

      }
    }

  }
</style>