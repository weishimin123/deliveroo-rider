<template>
  <div class="setting-slider slider" :show="show">
    <div class="outer">
      <v-touch @tap="closeSettingSlider">
        <img class="img-x" src="../images/cancel.png" alt="" />
      </v-touch>
      <span>Settings</span>
      <img id="img-bike" src="./images/bike.png" alt="" />
    </div>
    <div class="outer">
      <div class="inner">
        <img class="img-setting" src="./images/map2.png" alt="" />
        <span>Map Settings</span>
      </div>
      <v-touch>
        <img class="img-forward" src="./images/forward.png" alt="" />
      </v-touch>
    </div>
    <div class="outer">
      <div class="inner">
        <img class="img-setting" src="./images/map1.png" alt="" />
        <span>Open in Maps</span>
      </div>
      <v-touch>
        <img class="img-forward" src="./images/forward.png" alt="" />
      </v-touch>
    </div>
    <div class="outer">
      <div class="inner">
        <img class="img-setting" src="./images/calendar.png" alt="" />
        <span>Sync to calendar</span>
      </div>
      <v-touch>
        <img class="img-forward" src="./images/forward.png" alt="" />
      </v-touch>
    </div>
    <div class="outer">
      <div class="inner">
        <img class="img-setting" src="./images/trash.png" alt="" />
        <span>Delete account</span>
      </div>
      <v-touch>
        <img class="img-forward" src="./images/forward.png" alt="" />
      </v-touch>
    </div>
    <div class="outer">
      <v-touch>
        <a href="">Log out</a>
      </v-touch>
    </div>
    <div class="outer">
      <span>Version {{ version }}</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "Setting",
    props: ["show"],
    computed: {
      ...mapState({
        version: (state) => state.setting.version,
      }),
    },
    methods: {
      closeSettingSlider() {
        this.$bus.$emit("closeSetting")
      },
    },
  }
</script>

<style lang="less" scoped>
  .setting-slider {
    display: flex;
    flex-direction: column;

    #img-bike {
      width: 22px;
    }

    .img-setting {
      width: 20px;
    }

    .img-forward {
      height: 14px;
    }

    .outer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: rgb(44, 44, 46);
      border-top: 1px solid rgb(68, 68, 71);
      border-bottom: 1px solid rgb(68, 68, 71);
      height: 5vh;
      margin-bottom: 4vh;
      padding-left: 4vw;
      padding-right: 4vw;

      .inner {
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
          margin-left: 5vw;
          font-weight: 300;
        }
      }
    }

    .outer:first-child {
      justify-content: space-between;
      background-color: rgb(28, 28, 30);
      border-top: 0;
      border-bottom: 0;
      margin-top: 2vh;
    }

    .outer:nth-child(2) {
      margin-bottom: 0;
      border-bottom: 0;
      .inner {
        img {
          width: 18px;
        }
      }
    }

    .outer:nth-child(4) {
      .inner {
        img {
          width: 18px;
        }
      }
    }

    .outer:nth-child(6) {
      a {
        color: rgb(102, 224, 215);
        font-weight: 300;
      }
    }

    .outer:last-child {
      background-color: rgb(28, 28, 30);
      border-top: 0;
      border-bottom: 0;
      span {
        color: rgb(152, 152, 159);
        font-weight: 300;
      }
    }
  }
</style>