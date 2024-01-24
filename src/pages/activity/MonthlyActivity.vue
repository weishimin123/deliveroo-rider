<template>
  <div class="weekly-slider slider" :show="show">
    <div class="header">
      <div class="outer">
        <v-touch @tap="closeMonthlySlider">
          <img src="../images/backward.png" alt="" />
        </v-touch>
        <span>{{ monthlyActivity.month }}</span>
      </div>
      <div class="outer">
        <div class="left">
          <div>
            <span>€</span>
            <span>{{ intValue }}</span>
            <span>{{ floatValue }}</span>
          </div>
          <span>Total earnings</span>
        </div>
        <div class="right">
          <span>{{ monthlyOrders }}</span>
          <span>Orders</span>
        </div>
      </div>
      <div class="outer">
        <span>Activity</span>
        <span v-if="monthlyActivityDays > 1">{{ monthlyActivityDays }} days</span>
        <span v-else>{{ monthlyActivityDays }} day</span>
      </div>
    </div>
    <div class="content">
      <v-touch
        class="outer"
        v-for="(dayActivity, index) in monthlyDayActivities"
        :key="index"
        @tap="
          setPressedElement(dayActivity.date)
          selectDailyActivity(index)
        "
        @press="setPressedElement(dayActivity.date)"
        @panmove="clearPressedElement"
        @pressup="
          clearPressedElement()
          selectDailyActivity(index)
        "
        :press="pressedElement == dayActivity.date"
      >
        <div class="left">
          <span>{{ dayActivity.date }}</span>
          <span v-if="getOrders(dayActivity) > 1"
            >{{ getOrders(dayActivity) }} orders</span
          >
          <span v-else>{{ getOrders(dayActivity) }} day</span>
        </div>
        <div class="right">
          <span>€{{ getOrderAmount(dayActivity) }}</span>
          <img src="../images/forward.png" alt="" />
        </div>
      </v-touch>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex"
  import Decimal from "decimal.js"

  export default {
    name: "MonthlyActivity",
    data() {
      return {}
    },
    props: ["show", "pressedElement"],
    computed: {
      ...mapState({
        monthlyActivity: (state) => state.activity.monthlyActivity,
      }),
      ...mapGetters([
        "monthlyOrders",
        "monthlyActivityDays",
        "monthlyEarnings",
        "monthlyDayActivities"
      ]),
      intValue() {
        return Math.floor(this.monthlyEarnings.toNumber())
      },
      floatValue() {
        return this.monthlyEarnings
          .sub(new Decimal(this.intValue))
          .mul(new Decimal(100))
          .toNumber()
      },
    },
    methods: {
      getOrders(dayActivity) {
        return dayActivity.orders.length
      },
      getOrderAmount(dayActivity) {
        let sum = new Decimal(0)
        for (const order of dayActivity.orders) {
          sum = sum.add(new Decimal(order.fee))
          if (order.extra) {
            sum = sum.add(new Decimal(order.extra))
          }
          if (order.tip) {
            sum = sum.add(new Decimal(order.tip))
          }
        }
        return sum.toNumber()
      },
      closeMonthlySlider() {
        this.$bus.$emit("closeMonthly")
        this.$store.dispatch("clearMonthly")
      },
      selectDailyActivity(index) {
        this.$store.dispatch("selectDaily", index)
        this.$bus.$emit("openDaily")
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
  .weekly-slider {
    .header {
      img {
        width: 18px;
      }

      .outer {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 4vw;
        height: 8.3vh;
      }

      .outer:first-child {
        span {
          width: 80%;
          text-align: center;
        }
      }

      .outer:nth-child(2) {
        background-color: rgb(49, 49, 54);
        border: 1px solid rgb(68, 68, 71);
        border-radius: 5px;
        margin-left: 4vw;
        margin-right: 4vw;
        justify-content: space-around;
        height: 14vh;

        .left {
          display: flex;
          flex-direction: column;

          div {
            display: flex;
            flex-direction: row;

            span {
              color: rgb(0, 204, 188);
              font-weight: bolder;
              font-size: 30px;
            }

            span:first-child,
            span:last-child {
              font-size: 15px;
            }
          }

          span {
            color: rgb(158, 158, 165);
            font-size: 14px;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          span:first-child {
            color: rgb(0, 204, 188);
            font-weight: bolder;
            font-size: 30px;
          }

          span:last-child {
            color: rgb(158, 158, 165);
            font-size: 14px;
          }
        }
      }

      .outer:nth-child(3) {
        height: 6.3vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;

        span:last-child {
          color: rgb(158, 158, 165);
          font-size: 14px;
        }
      }
    }

    .content {
      background-color: rgb(49, 49, 54);
      border-top: 1px solid rgb(68, 68, 71);
      border-bottom: 1px solid rgb(68, 68, 71);

      .outer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(68, 68, 71);
        height: 8.3vh;
        padding-right: 4vw;
        padding-left: 4vw;

        span {
          font-weight: 350;
          font-size: 14px;
        }

        .left {
          display: flex;
          flex-direction: column;

          span:last-child {
            font-size: 13px;
            color: rgb(158, 158, 165);
          }
        }

        .right {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 20%;

          img {
            width: 9px;
          }
        }
      }

      .outer[press] {
        background-color: rgb(68, 68, 71);
      }

      .ouer:last-child {
        border-bottom: 0;
      }
    }
  }
</style>