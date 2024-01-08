<script setup>
import{onLoad} from '@dcloudio/uni-app'
import { ref } from "vue";
// 在index.vue页面接受参数
onLoad((option) =>{ //option为object类型，会序列化上个页面传递的参数
  console.log(option.id); //打印出上个页面传递的参数。
  console.log(option.name); //打印出上个页面传递的参数。
})
const sizeList = [
  {
    id:'001',
    size:'S'
  },{
    id:'002',
    size:'M'
  },{
    id:'003',
    size:'L'
  },{
    id:'004',
    size:'XL'
  },{
    id:'005',
    size:'XXL'
  },
]
const colorList = [
  {
    id:'001',
    color:'red'
  },{
    id:'002',
    color:'blue'
  },{
    id:'003',
    color:'pink'
  },{
    id:'004',
    color:'skyblue'
  },{
    id:'005',
    color:'green'
  },
]

const sizeActive = ref(sizeList[0].id)
const colorActive = ref(sizeList[0].id)
</script>

<template>
  <view>
    <view>Fruit T 恤</view>
    <view>
      <van-tabs
        v-model:active="sizeActive"
        type="card"
      >
        <van-tab
          v-for="item in sizeList"
          :key="item.id"
          :title="item.size"
          :name="item.id"
        />
      </van-tabs>
    </view>
    <view>
      <van-image
        width="100"
        height="100"
        :src="`@/static/home_${colorActive}.png`"
      />
      {{ colorActive }}
    </view>
    <view>
      <van-tabs
        v-model:active="colorActive"
        type="card"
      >
        <van-tab
          v-for="item in colorList"
          :key="item.id"
          :title="item.color"
          :name="item.id"
        />
      </van-tabs>
    </view>
  </view>
</template>

<style scoped></style>