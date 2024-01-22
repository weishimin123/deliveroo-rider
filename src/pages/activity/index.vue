<template>
  <div class="activity-slider slider" :show="show">
    <div class="outer">
      <v-touch @tap="closeActivitySlider">
        <img src="../images/backward.png" alt="" />
      </v-touch>
      <div class="inner">
        <v-touch
          @tap="activityType = 'weekly'"
          :selected="activityType == 'weekly'"
        >
          <span>Weekly</span>
        </v-touch>
        <v-touch
          @tap="activityType = 'monthly'"
          :selected="activityType == 'monthly'"
        >
          <span>Monthly</span>
        </v-touch>
      </div>
    </div>
    <div
      class="outer"
      v-show="activityType == 'weekly'"
      v-for="(activity,index) in weeklyActivities"
      :key="index"
    >
      <div class="left">
        <span>{{ activity.fromDate }} - {{ activity.toDate }}</span>
        <span>{{ getOrders(activity) }} orders</span>
      </div>
      <div class="right">
        <span>€{{ getTotalAmount(activity) }}</span>
        <v-touch @tap="openWeeklySlider(index)">
          <img src="../images/forward.png" alt="" />
        </v-touch>
      </div>
    </div>
    <div
      class="outer"
      v-show="activityType == 'monthly'"
      v-for="activity in mmonthlyActivities"
      :key="activity.month"
    >
      <div>
        <span>{{ activity.month }}</span>
        <span>{{ activity.orders }} orders</span>
      </div>
      <span>€{{ activity.totalAmount }}</span>
    </div>
    <div class="outer">
      <v-touch @tap="addMoreActivities">
        <a href="#">See more</a>
      </v-touch>
    </div>
  </div>
</template>

<script>
  import Decimal from "decimal.js"
  import { mapState } from "vuex"

  export default {
    name: "Activity",
    data() {
      return {
        activityType: "weekly",
        weeklySliderShow: false,
        selectedActivity: {},
      }
    },
    props: ["show"],
    computed: {
      ...mapState({
        weeklyActivities: (state) => state.activity.weeklyActivities,
        mmonthlyActivities: (state) => state.activity.mmonthlyActivities,
      }),
    },
    methods: {
      addMoreActivities() {},
      closeActivitySlider() {
        this.$bus.$emit("closeActivity")
      },
      getOrders(activity) {
        let orders = 0
        activity.details.forEach((element) => {
          orders += element.details.length
        })
        return orders
      },
      getTotalAmount(activity) {
        let sum = new Decimal(0)
        activity.details.forEach((element) => {
          element.details.forEach((orderDetail) => {
            sum = sum.add(new Decimal(orderDetail.fee))
            if (orderDetail.extra) {
              sum = sum.add(new Decimal(orderDetail.extra))
            }
            if (orderDetail.tip) {
              sum = sum.add(new Decimal(orderDetail.tip))
            }
          })
        })
        return sum.toNumber()
      },
      openWeeklySlider(index){
        this.$bus.$emit('openWeekly')
        this.$store.dispatch('selectWeekly',index)
      }
    },
  }
</script>

<style lang="less" scoped>
  .activity-slider {
    display: flex;
    flex-direction: column;
    background-color: rgb(28, 28, 30);
    overflow: scroll;

    .outer {
      height: 8.3vh;
      background-color: rgb(44, 44, 46);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgb(68, 68, 71);
      padding-left: 4vw;
      padding-right: 4vw;

      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        span {
          font-weight: normal;
        }

        span:last-child {
          font-size: 14px;
          color: rgb(158, 158, 165);
        }
      }

      .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img {
          margin-left: 4vw;
          width: 9px;
        }
      }
    }

    .outer:first-child {
      background-color: rgb(28, 28, 30);
      justify-content: flex-start;
      margin-bottom: 1.5vh;
      border-bottom: 0;

      .inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgb(49, 49, 54);
        border-radius: 5px;
        height: 3.5vh;
        padding: 1px 2px;

        div {
          border-radius: 5px;
          padding-left: 6px;
          padding-right: 6px;
          span {
            color: #fff;
            font-size: 14px;
            font-weight: normal;
          }
        }

        div[selected] {
          background-color: rgb(105, 105, 111);
        }
      }

      img {
        width: 18px;
        margin-right: 25vw;
      }
    }

    .outer:last-child {
      a {
        color: rgb(102, 224, 215);
      }
    }
  }
</style>