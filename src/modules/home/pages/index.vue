<template>
  <view class="zyt-home">
    <view class="home-search">
      <van-search
        v-model="value"
        disabled
        background="#F8F8F8"
        shape="round"
        placeholder="请输入搜索关键词"
      />
      <van-icon
        class="home-right"
        name="weapp-nav"
      />
    </view>

    <van-tabs
      v-model:active="active"
      background="#F8F8F8"
    >
      <van-tab
        v-for="index in 8"
        :key="index"
        :title="'标签 ' + index"
      />
    </van-tabs>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { useHomeStore } from "modules/home/store";
import { showToast } from 'vant';

const homeStore = useHomeStore()

const title = ref("朱丫头")

const setName = () => {
  homeStore.setName("丁林")
}

const test = () => {
  showToast("测试信息")
}
//
const active = ref(0);
</script>

<style scoped lang="scss">
.zyt-home {
  .home-search{
    display: flex;
    align-items: center;
    padding-right: 12px;

    .van-search{
      flex: 1;

      :deep(.van-search__content){
        background: #FFFFFF;
      }
    }

    .home-right{
      background: #FFFFFF;
      padding: 9px;
      border-radius: 50%;
    }
  }

  :deep(){
    .van-tabs{

      .van-tab{
        background: #FFFFFF;
        border-radius: 28rpx;

        &+.van-tab{
          margin-left: 20rpx;
        }
      }
    }
  }
}

</style>
