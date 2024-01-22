<template>
  <div class="profile-slider slider" :show="show">
    <div class="profile-header">
      <v-touch @tap="closeProfileSlider">
        <img src="../images/cancel.png" />
      </v-touch>
      <h1>Profile</h1>
    </div>
    <div class="profile-content">
      <div class="account">
        <h1>{{ firstName }} {{ lastName }}</h1>
        <h1>{{ email }}</h1>
        <h1>{{ phone }}</h1>
        <img src="./images/uniform.png" alt="" />
        <a href="">Change details or emergency contact info</a>
      </div>
      <div class="vehicle">
        <h1>{{ accountType }}</h1>
        <img src="./images/ebike.png" alt="" />
        <a href="">View vehicle details</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "Profile",
    props: ["show"],
    computed: {
      ...mapState({
        firstName: (state) => state.profile.firstName,
        lastName: (state) => state.profile.lastName,
        email: (state) => state.profile.email,
        phone: (state) => state.profile.phone,
        accountType: (state) => state.profile.accountType,
      }),
    },
    methods: {
      closeProfileSlider() {
        this.$bus.$emit("closeProfile")
      },
    },
  }
</script>

<style lang="less" scope>
  .profile-slider {
    .profile-header {
      height: 14vh;
      padding-left: 3vw;

      h1 {
        font-weight: bolder;
        font-size: 30px;
      }

      img {
        top: 2vh;
        left: 2vw;
        width: 16px;
        margin-top: 2vh;
        margin-bottom: 2vh;
      }
    }

    .profile-content {
      a {
        color: rgb(102, 224, 215);
        font-size: 14px;
      }
      .account {
        background-color: rgb(44, 44, 46);
        height: 16.6vh;
        padding-left: 3vw;
        padding-right: 3vw;
        padding-top: 2vh;
        position: relative;
        border-top: 1px solid rgb(68, 68, 71);
        border-bottom: 1px solid rgb(68, 68, 71);

        h1 {
          color: rgb(158, 158, 165);
          font-size: 16px;
        }

        h1:first-child {
          color: #fff;
        }

        a {
          margin-top: 3vh;
          padding-top: 1vh;
          border-top: 1px solid rgb(68, 68, 71);
          display: block;
        }

        img {
          position: absolute;
          width: 56px;
          right: 2vw;
          top: 4vh;
        }
      }

      .vehicle {
        background-color: rgb(44, 44, 46);
        margin-top: 2vh;
        height: 14.2vh;
        position: relative;
        padding: 2vh;
        border-top: 1px solid rgb(68, 68, 71);
        border-bottom: 1px solid rgb(68, 68, 71);

        a {
          display: block;
          margin-top: 8vh;
          padding-top: 1vh;
          border-top: 1px solid rgb(68, 68, 71);
        }

        img {
          position: absolute;
          width: 59px;
          right: 2vw;
          top: 2vh;
        }
      }
    }
  }
</style>