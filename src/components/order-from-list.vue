<script setup>
defineProps({
  data:{
    type:Array,
    default:()=>([])
  }
})

const statusMap = {
  0:{
    text:"未发货",
    color:'red',
  },
  1:{
    text:"已发货",
    color:'green',
  }
}
</script>

<template>
  <template v-if="data.length">
    <van-card
      v-for="item in data"
      :key="item.id"
      :price="item.price"
      :title="item.title"
      :thumb="item.thumb"
    >
      <template #desc>
        <view class="detail">
          <view>
            <text>
              尺寸：{{ item.size }}
            </text>
            <text>
              颜色：{{ item.color }}
            </text>
          </view>
          <view class="detail-status">
            <text :style="{color:statusMap[item.status].color}">
              {{ statusMap[item.status].text }}
            </text>
          </view>
        </view>
      </template>
    </van-card>
  </template>
  <template v-else>
    暂无数据
  </template>
</template>

<style scoped lang="scss">
  .detail{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    // .detail-fs{
    //   // font-size: 28rpx;
    // }
  }
</style>