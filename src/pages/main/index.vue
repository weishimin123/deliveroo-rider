<template>
  <div class="content">
    <div class="map">
      <v-touch
        @tap="
          infoSliderShow = false
          feeShow = false
        "
      >
        <img src="./images/map-galway.png" />
      </v-touch>
      <v-touch @tap="infoSliderShow = true">
        <div class="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </v-touch>
    </div>
    <div class="main" :fullShow="feeShow">
      <div class="main-header">
        <div class="direction-sign">
          <v-touch @tap="feeShow = true">
            <img v-show="!feeShow" src="./images/up.png" />
          </v-touch>
          <v-touch @tap="feeShow = false">
            <img v-show="feeShow" src="./images/down.png" />
          </v-touch>
        </div>
        <div class="info">
          <h1>Ready to rider, {{ firstName }}?</h1>
          <v-touch>
            <a href="#">Change area</a>
          </v-touch>
          <v-touch>
            <button class="btn">Go online</button>
          </v-touch>
        </div>
        <div class="checklist">
          <h1>Complete your daily checklist</h1>
          <a class="warn-sign" href="#">
            <img src="./images/sign.png" />
          </a>
          <a class="forward" href="#">
            <img src="./images/forward.png" />
          </a>
        </div>
      </div>
      <div class="main-content">
        <Fee></Fee>
      </div>
    </div>
    <Info :show="infoSliderShow" :pressedElement="pressedElement"></Info>
    <Profile :show="profileSliderShow"></Profile>
    <Earning :show="earnSliderShow" :pressedElement="pressedElement"></Earning>
    <Question :show="questionSliderShow"></Question>
    <Setting :show="settingSliderShow"></Setting>
    <Payment :show="paymentSliderShow"></Payment>
    <Activity :show="activitySliderShow"></Activity>
    <Weekly :show="weeklySliderShow"></Weekly>
    <weeklyDetail :show="weeklyDetailSliderShow"></weeklyDetail>
  </div>
</template>

<script>
  import Activity from "@/pages/activity"
  import Payment from "@/pages/payment"
  import Setting from "@/pages/setting"
  import Question from "@/pages/question"
  import Earning from "@/pages/earn"
  import Profile from "@/pages/profile"
  import Info from "@/pages/info"
  import Fee from "@/pages/fee"
  import Weekly from "@/pages/activity/weekly"
  import weeklyDetail from "@/pages/activity/weeklyDetail"
  import { mapState } from "vuex"

  export default {
    name: "Main",
    data() {
      return {
        feeShow: false,
        infoSliderShow: false,
        profileSliderShow: false,
        earnSliderShow: false,
        questionSliderShow: false,
        settingSliderShow: false,
        paymentSliderShow: false,
        activitySliderShow: false,
        weeklySliderShow: false,
        weeklyDetailSliderShow: true,
        pressedElement: "",
      }
    },
    components: {
      Activity,
      Payment,
      Setting,
      Question,
      Earning,
      Profile,
      Fee,
      Info,
      Weekly,
      weeklyDetail
    },
    computed: {
      ...mapState({
        firstName: (state) => state.profile.firstName,
        lastName: (state) => state.profile.lastName,
        riderId: (state) => state.profile.riderId,
      }),
    },
    watch: {
      earnSliderShow(newVal) {
        if (!newVal) {
          this.pressedElement = ""
        }
      },
      questionSliderShow(newVal) {
        if (!newVal) {
          this.pressedElement = ""
        }
      },
      settingSliderShow(newVal) {
        if (!newVal) {
          this.pressedElement = ""
        }
      },
      paymentSliderShow(newVal) {
        if (!newVal) {
          this.pressedElement = ""
        }
      },
      activitySliderShow(newVal) {
        if (!newVal) {
          this.pressedElement = ""
        }
      },
    },
    mounted() {
      this.$bus.$on("closeActivity", () => {
        this.activitySliderShow = false
      })
      this.$bus.$on("closePayment", () => {
        this.paymentSliderShow = false
      })
      this.$bus.$on("closeSetting", () => {
        this.settingSliderShow = false
      })
      this.$bus.$on("closeQuestion", () => {
        this.questionSliderShow = false
      })
      this.$bus.$on("closeEarning", () => {
        this.earnSliderShow = false
      })
      this.$bus.$on("closeProfile", () => {
        this.profileSliderShow = false
      })
      this.$bus.$on("closeInfo", () => {
        this.infoSliderShow = false
      })
      this.$bus.$on("closeWeekly", () => {
        this.weeklySliderShow = false
      })

      this.$bus.$on("openActivity", () => {
        this.activitySliderShow = true
      })
      this.$bus.$on("openPayment", () => {
        this.paymentSliderShow = true
      })
      this.$bus.$on("openProfile", () => {
        this.profileSliderShow = true
      })
      this.$bus.$on("openEarn", () => {
        this.earnSliderShow = true
      })
      this.$bus.$on("openSetting", () => {
        this.settingSliderShow = true
      })
      this.$bus.$on("openQuestion", () => {
        this.questionSliderShow = true
      })
      this.$bus.$on("openWeekly", () => {
        this.weeklySliderShow = true
      })

      this.$bus.$on("setPressedEle", (val) => {
        this.pressedElement = val
      })
      this.$bus.$on("clearPressedEle", () => {
        this.pressedElement = ""
      })
    },
  }
</script>

<style lang="less" scoped>
  .content {
    position: relative;

    .map {
      height: 77vh;
      background-color: rgb(23, 38, 60);
      position: relative;
      img {
        width: 100vw;
      }

      .nav {
        position: absolute;
        height: 55px;
        width: 55px;
        background-color: rgb(28, 28, 30);
        border-radius: 50%;
        top: 55px;
        left: 16px;
        border: 1px solid rgb(61, 61, 64);

        span {
          height: 4px;
          width: 50%;
          display: block;
          background-color: rgb(0, 204, 188);
          position: absolute;
          left: 13px;
        }

        span:first-child {
          top: 15px;
        }

        span:nth-child(2) {
          top: 27px;
        }

        span:last-child {
          bottom: 13px;
        }
      }
    }

    .main {
      position: absolute;
      top: 76.5vh;
      height: 23.5vh;
      border-top: 1px solid rgb(61, 61, 64);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: rgb(28, 28, 30);
      transition: top 0.5s ease, height 0.5s ease;
      overflow: scroll;
      .main-header {
        .direction-sign {
          width: 100vw;
          text-align: center;
          image {
            width: 38px;
          }
        }

        .info {
          position: relative;
          padding-left: 15px;
          border-bottom: 1px solid rgb(61, 61, 64);
          padding-bottom: 10px;
          h1 {
            font-weight: bold;
            font-size: 16px;
          }

          a {
            font-size: 12px;
          }

          .btn {
            position: absolute;
            right: 10px;
            top: 0px;
            width: 30%;
            padding: 10px;
            color: rgb(171, 173, 173);
            background-color: rgb(73, 73, 75);
            border-radius: 10px;
          }
        }

        .checklist {
          position: relative;
          padding: 8px;
          border-bottom: 1px solid rgb(61, 61, 64);

          h1 {
            font-size: 14px;
            margin-left: 45px;
          }

          .warn-sign {
            position: absolute;
            top: 8px;
            left: 15px;
            img {
              width: 20px;
            }
          }

          .forward {
            position: absolute;
            right: 10px;
            top: 8px;
            img {
              width: 11px;
            }
          }
        }
      }

      .main-content {
        background-color: rgb(0, 0, 0);
        padding: 20px;
      }
    }

    .main[fullShow] {
      top: 15vh;
      height: 85vh;
    }
  }
</style>