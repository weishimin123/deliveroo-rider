<template>
  <div class="earn-slider slider" :show="show">
    <div class="earning-header">
      <v-touch @tap="closeEarningSlider">
        <img src="../images/cancel.png" alt="" />
      </v-touch>
      <h1>Earnings</h1>
    </div>
    <div class="earning-content">
      <div class="summary">
        <div>
          <span>{{ totalEarnings }}</span>
          <span>Total earnings</span>
        </div>
        <div>
          <span>{{ orders }}</span>
          <span>Orders</span>
        </div>
      </div>
      <div class="statement">
        <div class="content">
          <span>Statements</span>
          <v-touch>
            <a href="">More info</a>
          </v-touch>
        </div>
        <div class="content">
          <span>Current balance</span>
          <span>€{{ balance }}</span>
        </div>
        <v-touch
          class="content"
          @tap="tapHanlder('payment')"
          @press="setPressedEle('Previous payments')"
          @pressup="openPaymentSlider"
          @panmove="clearPressedEle"
          :press="pressedElement == 'Previous payments'"
        >
          <span>Previous payments</span>
          <img src="../images/forward.png" alt="" />
        </v-touch>
      </div>
      <div class="activity">
        <div>
          <span>Activity</span>
        </div>
        <v-touch
          @tap="tapHanlder('activity')"
          @press="setPressedEle('All activity')"
          @pressup="openActivitySlider"
          @panmove="clearPressedEle"
          :press="pressedElement == 'All activity'"
        >
          <span>All activity</span>
          <img src="../images/forward.png" alt="" />
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    data() {
      return {}
    },
    name: "Earning",
    props: ["show", "pressedElement"],
    computed: {
      ...mapState({
        balance: (state) => state.earning.balance,
        orders: (state) => state.earning.orders,
        totalEarnings: (state) => state.earning.totalEarnings,
      }),
    },
    methods: {
      tapHanlder(type) {
        if (type == "payment") {
          console.log('tap triggered');
          this.setPressedEle("Previous payments")
          this.openPaymentSlider()
        } else if (type == "activity") {
          this.setPressedEle("All activity")
          this.openActivitySlider()
        }
      },
      closeEarningSlider() {
        this.$bus.$emit("closeEarning")
      },
      openActivitySlider() {
        this.$bus.$emit("openActivity")
      },
      openPaymentSlider() {
        this.$bus.$emit("openPayment")
      },
      setPressedEle(val) {
        this.$bus.$emit("setPressedEle", val)
      },
      clearPressedEle() {
        this.$bus.$emit("clearPressedEle")
      },
    },
  }
</script>

<style lang="less" scoped>
  .earn-slider {
    .earning-header {
      padding-left: 4vw;
      padding-top: 2vh;
      height: 10vh;
      margin-bottom: 2vh;

      h1 {
        line-height: 4vh;
        height: 4vh;
        font-size: 24px;
        font-weight: bolder;
        margin-top: 1.5vh;
      }

      img {
        width: 16px;
      }
    }

    .earning-content {
      img {
        width: 9px;
      }

      .summary {
        height: 13vh;
        background-color: rgb(44, 44, 46);
        margin-left: 4vw;
        margin-right: 4vw;
        border: 1px solid rgb(44, 44, 46);
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          span:first-child {
            color: rgb(0, 204, 188);
            font-size: 40px;
            font-weight: bolder;
          }

          span:last-child {
            font-size: 13px;
            color: rgb(158, 158, 165);
          }
        }
      }

      .statement {
        margin-top: 4.6vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding-left: 4vw;
          padding-right: 4vw;
          height: 7vh;
          border-bottom: 1px solid rgb(68, 68, 71);
          background-color: rgb(44, 44, 46);
        }

        .content[press] {
          background-color: rgb(68, 68, 71);
        }

        div:first-child {
          background-color: rgb(28, 28, 30);
          span {
            font-weight: bold;
          }
          div {
            a {
              font-weight: 300;
              font-size: 14px;
            }
          }
        }
      }

      .activity {
        margin-top: 1vh;
        height: 12vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 6vh;
          background-color: rgb(44, 44, 46);
          padding-left: 4vw;
          padding-right: 4vw;
          border-bottom: 1px solid rgb(68, 68, 71);
        }

        div[press] {
          background-color: rgb(68, 68, 71);
        }

        div:first-child {
          background-color: rgb(28, 28, 30);
        }
      }
    }
  }
</style>