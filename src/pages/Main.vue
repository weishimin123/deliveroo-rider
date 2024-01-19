<template>
  <div class="content">
    <div class="map">
      <img src="images/ireland/map-galway.png" />
      <div class="nav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="content">
      <div class="header">
        <div class="direction-sign">
          <img v-show="direction == 'up'" src="images/up-direction.png" />
          <img v-show="direction == 'down'" src="images/down-direction.png" />
        </div>
        <div class="info">
          <h1>Ready to rider, {{ userName }}?</h1>
          <a href="#">Change area</a>
          <button class="btn">Go online</button>
        </div>
        <div class="checklist">
          <h1>Complete your daily checklist</h1>
          <a class="warn-sign" href="#">
            <img src="images/warning-sign.png" />
          </a>
          <a class="right-direction" href="#">
            <img src="images/right-direction.png" />
          </a>
        </div>
      </div>
      <div class="footer">
        <div class="fee">
          <div class="fee-header">
            <img src="" alt="" />
            <h1>Upcoming fee boosts</h1>
          </div>
          <div class="fee-content" v-for="feeInfo in feeInfoList" :key="feeInfo.date">
            <h1>{{feeInfo.date}}</h1>
            <ul>
              <li v-for="fee in feeInfo.feeList" :key="fee.timeRange">
                <h1>{{fee.timeRange}}</h1>
                <span>{{fee.detail}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slider">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        direction: "up",
      }
    },

    computed: {
      userName() {
        // return this.$router.query.userName
        return "Ciaran"
      },
      feeInfoList() {
        return [
          {
            date: "SATURDAY 20 JANUARY",
            feeList: [
              {
                timeRange: "01:00-02:00",
                detail: "1.2x extra per order",
              },
              {
                timeRange: "01:00-03:00",
                detail: "1.4x extra per order",
              },
              {
                timeRange: "03:00-04:00",
                detail: "1.2x extra per order",
              },
              {
                timeRange: "04:00-05:00",
                detail: "1.3x extra per order",
              },
              {
                timeRange: "08:00-10:00",
                detail: "1.2x extra per order",
              },
              {
                timeRange: "11:00-12:00",
                detail: "1.3x extra per order",
              },
              {
                timeRange: "14:00-16:00",
                detail: "1.3x extra per order",
              },
              {
                timeRange: "15:00-16:00",
                detail: "1.3x extra per order",
              },
              {
                timeRange: "16:00-18:00",
                detail: "1.2x extra per order",
              },
            ],
          }, {
            date: "SUNDAY 21 JANUARY",
            feeList: [
              {
                timeRange: "09:00-11:00",
                detail: "1.2x extra per order",
              },
              {
                timeRange: "14:00-17:00",
                detail: "1.3x extra per order",
              },
               {
                timeRange: "15:00-17:00",
                detail: "1.3x extra per order",
              },
               {
                timeRange: "17:00-19:00",
                detail: "1.2x extra per order",
              }
            ],
          }
        ]
      },
    },
    mounted() {},
    onLoad(routeData) {},
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

    .content {
      position: absolute;
      top: 77vh;
      border-top: 1px solid rgb(61, 61, 64);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: rgb(28, 28, 30);

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

        .right-direction {
          position: absolute;
          right: 10px;
          top: 8px;
          img {
            width: 11px;
          }
        }
      }

      .footer {
        background-color: rgb(0, 0, 0);
        margin-top: 15px;
        .fee {
          width: 80%;

          .fee-header {

          }

          .fee-content {

          }
        }
      }
    }
  }
</style>