<template>
  <div class="fee">
    <div class="fee-header">
      <h1>Upcoming fee boosts</h1>
      <img src="./images/flash.png" />
    </div>
    <div class="fee-content" v-for="feeInfo in feeInfoList" :key="feeInfo.date">
      <h1 class="date">{{ feeInfo.date }}</h1>
      <ul>
        <li v-for="fee in feeInfo.feeList" :key="fee.timeRange">
          <h1>{{ fee.timeRange }}</h1>
          <span>{{ fee.detail }}</span>
          <img src="./images/forward.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "Fee",
    computed: {
      ...mapState({
        feeInfoList: (state) => state.fee.feeInfoList,
      }),
    },
  }
</script>

<style lang="less" scoped>
  .fee {
    background-color: rgb(28, 28, 30);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;

    .fee-header {
      position: relative;
      margin-bottom: 10px;
      img {
        position: absolute;
        top: 3px;
        left: 0px;
        width: 16px;
      }

      h1 {
        font-weight: bold;
        font-size: 16px;
        padding-left: 10%;
      }
    }
    .fee-content {
      .date {
        font-size: 14px;
        margin-top: 10px;
      }

      ul {
        li {
          list-style: none;
          border-bottom: 1px solid rgb(55, 55, 58);
          position: relative;
          padding-bottom: 10px;
          padding-top: 10px;

          h1 {
            font-size: 14px;
            height: 14px;
            font-weight: bold;
          }

          span {
            color: rgb(152, 152, 159);
            font-size: 12px;
          }

          img {
            position: absolute;
            width: 8px;
            height: 14px;
            top: calc(50%-7px);
            right: 8px;
          }
        }
      }
    }
  }
</style>