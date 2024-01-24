<template>
  <div class="activity-slider slider" :show="show">
    <div class="outer header">
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
    <v-touch
      class="outer content"
      v-show="activityType == 'weekly'"
      v-for="(weeklyActivity, index) in weeklyActivities"
      :key="weeklyActivity.month"
      @tap="
        setPressedElement(weeklyActivity.fromDate)
        openWeeklySlider(index)
      "
      @press="setPressedElement(weeklyActivity.fromDate)"
      @pressup="clearPressedElement"
      @panmove="clearPressedElement"
      :press="pressedElement == weeklyActivity.fromDate"
    >
      <div class="left">
        <span>{{ weeklyActivity.fromDate }} - {{ weeklyActivity.toDate }}</span>
        <span>{{ getOrders(weeklyActivity) }} orders</span>
      </div>
      <div class="right">
        <span>€{{ getTotalAmount(weeklyActivity) }}</span>
        <img src="../images/forward.png" alt="" />
      </div>
    </v-touch>
    <v-touch
      class="outer content"
      v-show="activityType == 'monthly'"
      v-for="(monthlyActivity, index) in monthlyActivities"
      :key="index"
      @tap="
        setPressedElement(monthlyActivity.month)
        openMonthlySlider(index)
      "
      @press="setPressedElement(monthlyActivity.month)"
      @pressup="clearPressedElement"
      @panmove="clearPressedElement"
      :press="pressedElement == monthlyActivity.month"
    >
      <div class="left">
        <span>{{ monthlyActivity.month }}</span>
        <span>{{ getMonthlyOrders(monthlyActivity) }} orders</span>
      </div>
      <div class="right">
        <span>€{{ getMonthlyEarning(monthlyActivity) }}</span>
        <img src="../images/forward.png" alt="" />
      </div>
    </v-touch>
    <div class="outer footer">
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
      }
    },
    props: ["show", "pressedElement"],
    computed: {
      ...mapState({
        weeklyActivities: (state) => state.activity.weeklyActivities,
        monthlyActivities: (state) => state.activity.monthlyActivities,
      }),
    },
    methods: {
      addMoreActivities() {},
      closeActivitySlider() {
        this.$bus.$emit("closeActivity")
      },
      getOrders(weeklyActivity) {
        let orders = 0
        for (const dayActivity of weeklyActivity.dayActivities) {
          orders += dayActivity.orders.length
        }
        return orders
      },
      getTotalAmount(weeklyActivity) {
        let sum = new Decimal(0)
        for (const dayActivity of weeklyActivity.dayActivities) {
          for (const order of dayActivity.orders) {
            sum = sum.add(new Decimal(order.fee))
            if (order.extra) {
              sum = sum.add(new Decimal(order.extra))
            }
            if (order.tip) {
              sum = sum.add(new Decimal(order.tip))
            }
          }
        }
        return sum.toNumber()
      },
      getMonthlyOrders(monthlyActivity) {
        if (!monthlyActivity) return 0
        let sum = 0
        for (const dayActivity of monthlyActivity.dayActivities) {
          for (const order of dayActivity.orders) {
            sum += 1
          }
        }
        return sum
      },
      getMonthlyEarning(monthlyActivity) {
        if (!monthlyActivity) return 0
        let sum = new Decimal(0)
        for (const dayActivity of monthlyActivity.dayActivities) {
          for (const order of dayActivity.orders) {
            if (order.fee) sum = sum.add(new Decimal(order.fee))
            if (order.extra) sum = sum.add(new Decimal(order.extra))
            if (order.tip) sum = sum.add(new Decimal(order.tip))
          }
        }
        return sum.toNumber()
      },
      openWeeklySlider(index) {
        this.$bus.$emit("openWeekly")
        this.$store.dispatch("selectWeekly", index)
      },
      openMonthlySlider(index) {
        this.$bus.$emit("openMonthly")
        this.$store.dispatch("selectMonthly", index)
      },
      setPressedElement(data) {
        this.$bus.$emit("setPressedEle", data)
      },
      clearPressedElement() {
        this.$bus.$emit("clearPressedEle")
      },
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

        span:first-child {
          font-size: 16px;
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

    .header {
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

    .footer {
      a {
        color: rgb(102, 224, 215);
      }
    }

    .content[press] {
      background-color: rgb(68, 68, 71);
    }
  }
</style>