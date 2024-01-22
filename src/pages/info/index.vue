<template>
  <div class="info-slider" :show="show">
    <div class="slider-header">
      <h1 id="fullname">{{ firstName }} {{ lastName }}</h1>
      <h1 id="id">Rider ID #{{ riderId }}</h1>
      <v-touch
        @tap="
          closeInfoSlider()
          openProfileSlider()
        "
      >
        <a href="#">
          <img src="./images/forward.png" />
        </a>
      </v-touch>
    </div>
    <div class="slider-content">
      <div class="topside">
        <v-touch
          class="container"
          :press="pressedElement == 'Planner'"
          @press="setPressedEle('Planner')"
          @pressup="clearPressedEle"
          @panmove="clearPressedEle"
        >
          <h1>Planner</h1>
          <img src="./images/planner.png" alt="" />
        </v-touch>
        <v-touch
          class="container"
          :press="pressedElement == 'Earnings'"
          @press="setPressedEle('Earnings')"
          @tap="
            setPressedEle('Earnings')
            closeInfoSlider()
            openEarnSlider()
          "
          @panmove="clearPressedEle"
          @pressup="
            clearPressedEle()
            closeInfoSlider()
            openEarnSlider()
          "
        >
          <h1>Earnings</h1>
          <img src="./images/earning.png" alt="" />
        </v-touch>
        <v-touch
          class="container"
          :press="pressedElement == 'Referrals'"
          @press="setPressedEle('Referrals')"
          @pressup="clearPressedEle"
          @panmove="clearPressedEle"
        >
          <h1>Referrals</h1>
          <img src="./images/referral.png" alt="" />
        </v-touch>
      </div>
      <div class="downside">
        <v-touch
          class="container"
          @press="setPressedEle('Setttings')"
          @pressup="
            clearPressedEle()
            closeInfoSlider()
            openSettingSlider()
          "
          @panmove="clearPressedEle"
          @tap="
            setPressedEle('Setttings')
            closeInfoSlider()
            openSettingSlider()
          "
          :press="pressedElement == 'Setttings'"
        >
          <h1>Setttings</h1>
        </v-touch>
        <v-touch
          class="container"
          @press="setPressedEle('FAQs')"
          @pressup="
            closeInfoSlider()
            openQuestionSlider()
          "
          @panmove="clearPressedEle"
          @tap="
            setPressedEle('FAQs')
            closeInfoSlider()
            openQuestionSlider()
          "
          :press="pressedElement == 'FAQs'"
        >
          <h1>FAQs</h1>
        </v-touch>
      </div>
    </div>
    <div class="slider-footer">
      <a href="">App feedback</a>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "Info",
    props: ["show", "pressedElement"],
    computed: {
      ...mapState({
        firstName: (state) => state.profile.firstName,
        lastName: (state) => state.profile.lastName,
        riderId: (state) => state.profile.riderId,
      }),
    },
    methods: {
      openProfileSlider() {
        this.$bus.$emit("openProfile")
      },
      closeInfoSlider() {
        this.$bus.$emit("closeInfo")
      },
      setPressedEle(val) {
        this.$bus.$emit("setPressedEle", val)
      },
      clearPressedEle() {
        this.$bus.$emit("clearPressedEle")
      },
      openEarnSlider() {
        this.$bus.$emit("openEarn")
      },
      openSettingSlider() {
        this.$bus.$emit("openSetting")
      },
      openQuestionSlider() {
        this.$bus.$emit("openQuestion")
      },
    },
  }
</script>

<style lang="less" scoped>
  .info-slider {
    position: absolute;
    right: 133vw;
    top: 0vh;
    width: 0vw;
    background-color: rgb(44, 44, 46);
    transition: width 0.5s ease, right 0.5s ease;

    .slider-header {
      height: 5vh;
      padding-left: 4vw;
      position: relative;
      margin-top: 8vh;

      h1 {
        font-size: 16px;
        height: 16px;
      }

      #fullname {
        font-weight: bold;
        margin-bottom: 0.5vh;
      }

      #id {
        color: rgb(158, 158, 165);
        font-size: 15px;
      }

      img {
        position: absolute;
        width: 11px;
        right: 4vw;
        top: 1.5vh;
      }
    }

    .slider-content {
      padding-right: 4vw;

      .container[press] {
        background-color: rgb(68, 68, 71);
      }

      .topside {
        position: relative;
        height: 19vh;
        margin-top: 5vh;
        border-bottom: 1px solid rgb(68, 68, 71);

        .container {
          position: relative;

          h1 {
            height: 5.5vh;
            line-height: 5.5vh;
            font-size: 16px;
            padding-left: 12vw;
            font-weight: 300;
          }

          img {
            position: absolute;
            width: 18px;
            top: calc(50% - 10px);
            left: 4vw;
          }
        }

        .container:nth-child(2) {
          img {
            width: 16px;
          }
        }
      }

      .downside {
        margin-top: 2vh;

        h1 {
          font-size: 16px;
          height: 5vh;
          line-height: 5vh;
          padding-left: 4vw;
        }
      }
    }

    .slider-footer {
      margin-top: 43vh;
      padding-left: 4vw;
      height: 8vh;
      a {
        font-size: 14px;
      }
    }
  }

  .info-slider[show] {
    right: 33vw;
    width: 67vw;
  }
</style>