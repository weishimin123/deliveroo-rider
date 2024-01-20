<template>
  <div class="content">
    <div class="map">
      <v-touch @tap="sliderShow = false">
        <img src="./images/map-galway.png" />
      </v-touch>
      <v-touch @tap="sliderShow = true">
        <div class="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </v-touch>
    </div>
    <div class="main">
      <div class="main-header">
        <div class="direction-sign">
          <img v-show="direction == 'up'" src="./images/up-direction.png" />
          <img v-show="direction == 'down'" src="./images/down-direction.png" />
        </div>
        <div class="info">
          <h1>Ready to rider, {{ firstName }}?</h1>
          <a href="#">Change area</a>
          <button class="btn">Go online</button>
        </div>
        <div class="checklist">
          <h1>Complete your daily checklist</h1>
          <a class="warn-sign" href="#">
            <img src="./images/warning-sign.png" />
          </a>
          <a class="right-direction" href="#">
            <img src="./images/right-direction.png" />
          </a>
        </div>
      </div>
      <div class="main-content">
        <div class="fee">
          <div class="fee-header">
            <h1>Upcoming fee boosts</h1>
            <img src="./images/flash.png"/>
          </div>
          <div
            class="fee-content"
            v-for="feeInfo in feeInfoList"
            :key="feeInfo.date"
          >
            <h1 class="date">{{ feeInfo.date }}</h1>
            <ul>
              <li v-for="fee in feeInfo.feeList" :key="fee.timeRange">
                <h1>{{ fee.timeRange }}</h1>
                <span>{{ fee.detail }}</span>
                <img src="./images/right-direction-little.png">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slider" :show = "sliderShow">
      <div class='slider-header'>
        <h1 id="fullname">{{firstName}} {{lastName}}</h1>
        <h1 id="id">Rider ID #{{riderId}}</h1>
        <a href="#">
          <img src="./images/right-direction-slider.png" alt="">
        </a>
      </div>
      <div class="slider-content">
        <div class="topside">
          <div class="container">
              <h1>Planner</h1>
              <img src="./images/planner.png" alt="">
          </div>
          <div class="container">
                <h1>Earnings</h1>
                <img src="./images/earning.png" alt="">
          </div>
          <div class="container">
             <h1>Referrals</h1>
             <img src="./images/referral.png" alt="">
          </div>
        </div>
        <div class="downside">
          <h1>Setttings</h1>
          <h1>FAQs</h1>
        </div>
      </div>
      <div class="slider-footer">
        <a href="">App feedback</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        direction: "up",
           firstName: 'Ciaran',
           lastName : 'Staunton' ,
           riderId : '834026',
           sliderShow: false,
      }
    },

    computed: {
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
          },
          {
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
              },
            ],
          },
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

    .main {
      position: absolute;
      top: 76.5vh;
      border-top: 1px solid rgb(61, 61, 64);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: rgb(28, 28, 30);

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

          .right-direction {
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
         .fee { 
          background-color: rgb(28, 28, 30);
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding: 15px;

          .fee-header{
            position: relative;
            margin-bottom: 10px;
            img {
              position: absolute;
              top: 3px;
              left: 0px;
              width: 16px;
            }

            h1 {
              font-weight: bold;
              font-size: 16px;
              padding-left: 10%;
            }

          }
           .fee-content {
            .date {
                font-size: 14px;
                margin-top: 10px;
            }

            ul {
              li {
                list-style: none;
                border-bottom: 1px solid rgb(55, 55, 58);
                position: relative;
                padding-bottom: 10px;
                padding-top:10px;

                h1 {
                    font-size: 14px;
                    height: 14px;
                    font-weight: bold;
                }

                span {
                  color: rgb(152, 152, 159);
                  font-size: 12px;
                }

                img {
                  position: absolute;
                  width: 8px;
                  height: 14px;
                  top: calc(50%-7px);
                  right: 8px;
                }
              }
            }
           }
         }
      }
    }

    .slider {
      position: absolute;
      right: 133vw;
      top: 0vh;
      width: 0vw;
      background-color: rgb(44, 44, 46);
      transition: width .5s ease, right .5s ease;

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
          margin-bottom: .5vh;
        }

        #id {
          color: rgb(158, 158, 165);
          font-size: 15px;
        }

        img {
          position: absolute;
          width: 11px;
          right: 4vw;
          top: 1.5vh
        }
      }

      .slider-content {
        padding-left: 4vw;
        padding-right: 4vw;
        .topside {
          position: relative;
          height: 19vh;
          margin-top: 5vh;
          border-bottom: 1px solid rgb(68, 68, 71);

          .container {
            position: relative;

            h1 {
              padding-left: 10vw;
              margin-bottom: 3vh;
              font-size: 15px;
              height: 20px;
              line-height: 20px;
              font-weight: 300;
            
            }

            img {
              position: absolute;
              width: 18px;
              top: 0;
            }
          }

          .container:nth-child(2){
            img {
              width: 16px;
            }
          }
        }

        .downside {
          margin-top: 4vh;
          height: 8vh;
          h1 {
            font-size: 16px;
            height: 16px;
            line-height: 16px;
          }

          h1:first-child {
            margin-bottom: 3vh;
          }
        }
      }

      .slider-footer {
        margin-top: 42vh;
        padding-left: 4vw;
        height: 8vh;
        a {
          font-size: 14px;
        }
      }
    }

    .slider[show]{
      right:33vw;
      width: 67vw;
    }
  }
</style>