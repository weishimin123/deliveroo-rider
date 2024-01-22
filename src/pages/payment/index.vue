<template>
  <div class="payment-slider slider" :show="show">
    <div class="outer">
      <v-touch @tap="closePaymentSlider">
        <img src="../images/backward.png" alt="" />
      </v-touch>
      <span>Previous payments</span>
    </div>
    <div class="outer">
      <span>Previous payments</span>
    </div>
    <div class="outer" v-for="payment in payments" :key="payment.invoiceNo">
      <div class="left">
        <span>{{ payment.fromDate }} - {{ payment.toDate }}</span>
        <span
          >{{ payment.invoiceNo }} ·
          {{ payment.paid ? "Paid" : "Unpaid" }}</span
        >
      </div>
      <div class="right">
        <span>€{{ payment.totalAmount }}</span>
        <v-touch>
          <img src="./images/forward.png" alt="" />
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: "Payment",
    props:['show'],
    computed:{
      ...mapState({
        payments: state => state.payment.payments
      })
    },
    methods: {
      closePaymentSlider(){
        this.$bus.$emit('closePayment')
      }
    }
  }
</script>

<style lang="less" scoped>
  .payment-slider {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    background-color: rgb(44, 44, 46);

    .outer {
      height: 8.4vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgb(68, 68, 71);
      margin-left: 4vw;
      padding-right: 4vw;
      padding-bottom: 1.5vh;
      padding-top: 1.5vh;

      img {
        width: 9px;
      }

      .left {
        display: flex;
        flex-direction: column;

        span {
          font-weight: normal;
        }

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
        justify-content: space-around;
        align-items: center;
        width: 25%;

        img {
          margin-top: 0.7vh;
        }
      }
    }

    .outer:first-child,
    .outer:nth-child(2) {
      background-color: rgb(28, 28, 30);
      margin-left: 0;
      padding-left: 4vw;
      span {
        font-weight: bold;
      }
    }

    .outer:first-child {
      justify-content: flex-start;
      border-bottom: 0;
      img {
        width: 18px;
        margin-right: 25vw;
      }

      span {
        font-size: 16px;
      }
    }

    .outer:nth-child(2) {
      span {
        font-size: 18px;
      }
    }
  }
</style>