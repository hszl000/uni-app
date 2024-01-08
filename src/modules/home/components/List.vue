<template>
  <view class="home-list">
    <view
      v-for="item in 8"
      :key="item"
      class="list-goodsItem"
    >
      <van-image
        width="100%"
        height="200"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <view class="goodsItem-content">
        <view>
          <view>猫</view>
          <view>￥23032</view>
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

<script setup></script>

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