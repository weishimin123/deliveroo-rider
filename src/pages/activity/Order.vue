<template>
  <div class="slider order-slider">
    <div class="header">
      <v-touch @tap="closeOrder">
        <img src="../images/backward.png" alt="" />
      </v-touch>
      <span>Order</span>
    </div>
    <div class="content" v-for="(orderDetail, index) in order.orderDetails"
      :key="index">
      <span>{{ order.shop }}</span>
      <div class="outer">
        <span class="time">{{ orderDetail.start }} - {{ orderDetail.complete }}</span>
        <div class="place">
          <img src="./images/place.png" alt="" />
          <span>{{ order.place }}</span>
        </div>
        <div class="order">
          <img src="./images/order.png" alt="" />
          <span>{{ orderDetail.orderNo }}</span>
        </div>
      </div>
    </div>
    <div class="fee">
      <div v-if="order.fee">
        <span>Order Fee</span>
        <span>€{{ order.fee }}</span>
      </div>
      <div v-if="order.extra" class="extra">
        <span>Extra Fees</span>
        <span>€{{ order.extra }}</span>
      </div>
      <div v-if="order.tip" class="tip">
        <span>Tip</span>
        <span>€{{ order.tip }}</span>
      </div>
    </div>
    <div class="total">
      <span>€{{ orderFee }}</span>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex"
  export default {
    name: "Order",
    computed: {
      ...mapState({
        order: (state) => state.activity.order,
      }),
      ...mapGetters(["orderFee"]),
    },
    methods: {
      closeOrder() {
        this.$bus.$emit("closeOrder")
        this.$store.dispatch("clearOrder")
      },
    },
  }
</script>

<style lang="less" scoped>
  .order-slider {
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 4vw;
      padding-right: 4vw;
      height: 6.3vh;

      img {
        width: 18px;
      }

      span {
        width: 88%;
        text-align: center;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgb(44, 44, 46);
      border-bottom: 1px solid rgb(68, 68, 71);
      height: 9vh;
      padding-left: 4vw;

      .outer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;

        span {
          font-size: 14px;
          color: rgb(158, 158, 165);
        }

        img {
          width: 14px;
        }
      }
    }

    .fee {
      display: flex;
      flex-direction: column;
      padding-left: 4vw;
      padding-right: 4vw;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 5vh;

        span:last-child {
          font-size: 14px;
          color: rgb(158, 158, 165);
        }
      }

      .extra {
        height: 3vh;
      }

      .tip {
        height: 3vh;
      }

      div:last-child {
        border-bottom: 1px solid rgb(68, 68, 71);
      }
    }

    .total {
      padding-right: 4vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      height: 6vh;

      span {
        font-weight: bold;
      }
    }
  }
</style>