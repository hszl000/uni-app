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
    <view class="home-recommend">
      <view class="recommend-content">
        <view class="content-tag">
          新品上市
        </view>
        <view class="content-desc">
          Shrilmps T坹 夏季款
        </view>
        <view class="content-time">
          2021.6.13-8.13
        </view>
      </view>
      <view class="recommend-image">
        <van-image
          width="8rem"
          height="6rem"
          fit="cover"
          position="left"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </view>
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
    <List />
  </view>
</template>

<script setup>
import { ref } from "vue";
import { useHomeStore } from "modules/home/store";
import { showToast } from 'vant';
import List from "modules/home/components/List.vue";

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

  .home-recommend{
    background: yellow;
    padding: 17px 22px;
    border-radius: 20px;
    margin:0 12px;
    display: flex;
    justify-content: space-between;

    .content-tag{
      font-size: 24rpx;
      margin-bottom:9px;
    }
    .content-desc{
      font-weight: 800;
      margin-bottom:9px;

    }

    .content-time{
      font-size: 24rpx;
      font-weight: 600;

    }
  }
}

</style>
