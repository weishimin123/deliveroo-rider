<template>
  <div class="weeklyDetailSlider slider" :show="show">
    <div class="outer">
      <v-touch @tap="closeWeeklyDetailSlider">
        <img src="../images/backward.png" alt="" />
      </v-touch>
      <span>{{ dayActivity.day }},{{ dayActivity.date }}</span>
    </div>
    <div class="outer">
      <div class="top">
        <div class="left">
          <div class="inner">
            <span>€</span>
            <span>{{ intPart }}</span>
            <span>{{ floatPart }}</span>
          </div>
          <span>Total earnings</span>
        </div>
        <div class="right">
          <span>{{ dailyOrders }}</span>
          <span>Orders</span>
        </div>
      </div>
      <div class="down">
        <div>
          <span>Order fees&nbsp;</span>
          <span>€{{ dailyFees }}</span>
        </div>
        <div v-if="dailyExtraFees > 0">
          <span> &nbsp;· Extra fees&nbsp;</span>
          <span>€{{ dailyExtraFees }}</span>
        </div>
        <div v-if="dailyTips > 0">
          <span> &nbsp;. Tips&nbsp;</span>
          <span>€{{ dailyTips }}</span>
        </div>
      </div>
    </div>
    <div class="content" v-for="place in dailyPlaces" :key="place">
      <div class="header">
        <span>Previous activity</span>
        <span>{{ getStartTime(place) }} -- {{ getCompleteTime(place) }}</span>
      </div>
      <v-touch
        class="container"
        v-for="(order, index) in findOrdersByPlace(place)"
        :key="index"
        @press="setPressElement(order.shop + order.fee)"
        @pressup="clearPressedElement"
        @panmove="clearPressedElement"
        @tap="
          setPressElement(order.shop + order.fee)
          openOrderSlider(order)
        "
        :press="pressedElement == order.shop + order.fee"
      >
        <div class="left">
          <span>{{ order.shop }}</span>
          <div class="footer">
            <span>{{ getOrderCompleteTime(order) }}</span>
            <span v-if="getOrders(order) > 1"
              >&nbsp;· {{ getOrders(order) }} orders</span
            >
          </div>
        </div>
        <div class="right">
          <span>€{{ getOrderFee(order) }}</span>
          <img src="../images/forward.png" alt="" />
        </div>
      </v-touch>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex"
  import { Decimal } from "decimal.js"

  export default {
    name: "DailyActivity",
    props: ["show", "pressedElement"],
    computed: {
      ...mapState({
        dayActivity: (state) => state.activity.dayActivity,
      }),
      ...mapGetters([
        "dailyOrders",
        "dailyTips",
        "dailyExtraFees",
        "dailyFees",
        "dailyEarnings",
        "dailyPlaces",
      ]),
      intPart() {
        return Math.floor(this.dailyEarnings)
      },
      floatPart() {
        return new Decimal(this.dailyEarnings)
          .sub(new Decimal(this.intPart))
          .mul(new Decimal(100))
          .toNumber()
      },
    },
    methods: {
      getStartTime(place) {
        if (!place) return ""
        const orders = this.findOrdersByPlace(place)
        if (!orders || orders.length == 0) return ""
        if (orders.length == 1) {
          return orders[0].orderDetails[0].start
        } else {
          let start = orders[0].orderDetails[0].start
          for (const order of orders) {
            for (const orderDetail of order.orderDetails) {
              const splits = orderDetail.start.split(":")
              if (splits[0] < start.split(":")[0]) {
                start = orderDetail.start
              } else if (splits[1] < start.split(":")[1]) {
                start = orderDetail.start
              }
            }
          }
          return start
        }
      },
      getCompleteTime(place) {
        if (!place) return ""
        const orders = this.findOrdersByPlace(place)
        if (!orders || orders.length == 0) return ""
        if (orders.length == 1) {
          return orders[0].orderDetails[0].complete
        } else {
          let complete = orders[0].orderDetails[0].complete
          for (const order of orders) {
            for (const orderDetail of order.orderDetails) {
              const splits = orderDetail.complete.split(":")
              if (splits[0] > complete.split(":")[0]) {
                complete = orderDetail.complete
              } else if (splits[1] > complete.split(":")[1]) {
                complete = orderDetail.complete
              }
            }
          }
          return complete
        }
      },

      getOrderFee(order) {
        if (!order) return ""
        let result = new Decimal(0)
        result = result.add(new Decimal(order.fee))
        if (order.extra) {
          result = result.add(new Decimal(order.extra))
        }
        if (order.tip) {
          result = result.add(new Decimal(order.tip))
        }
        return result.toNumber()
      },
      getOrderCompleteTime(order) {
        if (!order) return ""
        const details = order.orderDetails
        return details.length == 1 ? details[0].complete : details[1].complete
      },
      getOrders(order) {
        if (!order) return ""
        return order.orderDetails.length
      },
      closeWeeklyDetailSlider() {
        this.$bus.$emit("closeDayActivity")
        this.$store.dispatch("clearDayActivity")
      },
      findOrdersByPlace(place) {
        if (!place) return []
        let result = this.dayActivity.orders.filter((ele) => ele.place == place)
        return result
      },
      setPressElement(data) {
        this.$bus.$emit("setPressedEle", data)
      },
      clearPressedElement() {
        this.$bus.$emit("clearPressedEle")
      },
      openOrderSlider(data) {
        this.$store.dispatch('selectOrder',data)
        this.$bus.$emit('openOrder')
      }
    },
  }
</script>

<style lang="less" scoped>
  .weeklyDetailSlider {
    overflow: scroll;

    .outer:first-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 4vw;
      padding-right: 4vw;
      height: 8vh;

      img {
        width: 18px;
      }

      span {
        width: 100%;
        font-weight: bold;
        text-align: center;
      }
    }

    .outer:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: rgb(49, 49, 54);
      margin-left: 4vw;
      margin-right: 4vw;
      border-radius: 5px;
      height: 19vh;
      padding-left: 3vw;
      padding-right: 3vw;

      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        border-bottom: 1px solid rgb(68, 68, 71);

        .left {
          display: flex;
          flex-direction: column;

          .inner {
            display: flex;
            flex-direction: row;

            span {
              color: rgb(0, 204, 188);
              font-weight: bolder;
              font-size: 30px;
            }

            span:first-child {
              font-size: 15px;
            }

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

      .down {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        div {
          span:first-child {
            color: rgb(158, 158, 165);
            font-size: 14px;
          }

          span:last-child {
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 10vh;
        padding-left: 4vw;

        span:first-child {
          font-weight: bolder;
        }

        span:last-child {
          font-size: 14px;
          font-weight: normal;
          color: rgb(158, 158, 165);
        }
      }

      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(49, 49, 54);
        padding-left: 4vw;
        padding-right: 4vw;
        height: 8.4vh;

        .left {
          display: flex;
          flex-direction: column;

          .footer {
            span {
              font-size: 14px;
              font-weight: normal;
              color: rgb(158, 158, 165);
            }
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

      .container[press] {
        background-color: rgb(68, 68, 71);
      }
    }
  }
</style>