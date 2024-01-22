<template>
  <div class="weekly-slider slider" :show="show">
    <div class="outer">
      <v-touch>
        <img src="../images/backward.png" alt="" />
      </v-touch>
      <span>{{ fromDate }} - {{ toDate }}</span>
    </div>
    <div class="outer">
      <div class="earn">
        <div>
          <span>€</span>
          <span>{{ intValue }}</span>
          <span>{{ floatValue }}</span>
        </div>
        <span>Total earnings</span>
      </div>
      <div class="order">
        <span>{{ totalOrders }}</span>
        <span>Orders</span>
      </div>
    </div>
    <div class="outer">
      <span>Activity</span>
      <span v-if="days > 1">{{ days }} days</span>
      <span v-else>{{ days }} day</span>
    </div>
    <div class="outer" v-for="(detail, index) in details" :key="index">
      <div class="left">
        <span>{{ detail.date }}</span>
        <span v-if="getOrders(detail) > 1">{{ getOrders(detail) }} orders</span>
        <span v-else>{{ getOrders(detail) }}} day</span>
      </div>
      <div class="right">
        <span>€{{ getOrderAmount(detail) }}</span>
        <v-touch>
          <img src="../images/forward.png" alt="">
        </v-touch>
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
        activty: (state) => state.activity.selectedWeeklyActivity,
      }),
      totalOrders() {
        let orders = 0
        this.activty.details.forEach((element) => {
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
        return this.activty.details
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
    },
  }
</script>

<style lang="less" scoped>
</style>