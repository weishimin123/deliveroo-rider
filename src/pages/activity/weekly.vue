<template>
  <div class="weekly-slider slider" :show="show">
    <div class="header">
      <div class="outer">
        <v-touch @tap="backToActivitySlider">
          <img src="../images/backward.png" alt="" />
        </v-touch>
        <span>{{ fromDate }} - {{ toDate }}</span>
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
          <span>{{ totalOrders }}</span>
          <span>Orders</span>
        </div>
      </div>
      <div class="outer">
        <span>Activity</span>
        <span v-if="days > 1">{{ days }} days</span>
        <span v-else>{{ days }} day</span>
      </div>
    </div>
    <div class="content">
      <div class="outer" v-for="(detail, index) in details" :key="index">
        <div class="left">
          <span>{{ detail.date }}</span>
          <span v-if="getOrders(detail) > 1"
            >{{ getOrders(detail) }} orders</span
          >
          <span v-else>{{ getOrders(detail) }}} day</span>
        </div>
        <div class="right">
          <span>€{{ getOrderAmount(detail) }}</span>
          <v-touch>
            <img src="../images/forward.png" alt="" />
          </v-touch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import Decimal from "decimal.js"

  export default {
    name: "Weekly",
    data() {
      return {}
    },
    props: ["show"],
    computed: {
      ...mapState({
        activty: (state) => state.activity.selectedWeeklyActivity ,
      }),
      totalOrders() {
        let orders = 0
        this.details.forEach((element) => {
          orders += element.details.length
        })
        return orders
      },
      totalEarning() {
        let sum = new Decimal(0)
        this.details.forEach((element) => {
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
      details() {
        return this.activty.details || []
      },
      fromDate() {
        return this.activty.fromDate
      },
      toDate() {
        return this.activty.toDate
      },
      intValue() {
        return Math.floor(this.totalEarning)
      },
      floatValue() {
        return new Decimal(this.totalEarning)
          .sub(new Decimal(this.intValue))
          .mul(new Decimal(100))
          .toNumber()
      },
      days() {
        return this.details.length
      },
    },
    methods: {
      getOrders(detail) {
        return detail.details.length
      },
      getOrderAmount(detail) {
        let sum = new Decimal(0)
        detail.details.forEach((ele) => {
          sum = sum.add(new Decimal(ele.fee))
          if (ele.extra) {
            sum = sum.add(new Decimal(ele.extra))
          }
          if (ele.tip) {
            sum = sum.add(new Decimal(ele.tip))
          }
        })
        return sum.toNumber()
      },
      backToActivitySlider() {
        this.$bus.$emit('closeWeekly')
        this.$store.dispatch('clearSelectedWeekly')
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
      padding-left: 4vw;
      padding-right: 4vw;

      .outer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(68, 68, 71);
        height: 8.3vh;

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

      .ouer:last-child {
        border-bottom: 0;
      }
    }
  }
</style>