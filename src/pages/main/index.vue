<template>
  <div class="content">
    <div class="map">
      <v-touch @tap="infoSliderShow = false; feeShow = false;">
        <img src="./images/main/map-galway.png" />
      </v-touch>
      <v-touch @tap="infoSliderShow = true">
        <div class="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </v-touch>
    </div>
    <div class="main" :fullShow = "feeShow">
      <div class="main-header">
        <div class="direction-sign">
          <v-touch @tap="feeShow = true">
            <img v-show="!feeShow" src="./images/main/up.png" />
          </v-touch>
          <v-touch @tap="feeShow = false">
            <img v-show="feeShow"  src="./images/main/down.png" />
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
            <img src="./images/main/sign.png" />
          </a>
          <a class="forward" href="#">
            <img src="./images/main/forward.png" />
          </a>
        </div>
      </div>
      <div class="main-content">
        <div class="fee">
          <div class="fee-header">
            <h1>Upcoming fee boosts</h1>
            <img src="./images/main/flash.png"/>
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
                <img src="./images/fee/forward.png">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="info-slider" :show = "infoSliderShow">
      <div class='slider-header'>
        <h1 id="fullname">{{firstName}} {{lastName}}</h1>
        <h1 id="id">Rider ID #{{riderId}}</h1>
        <v-touch @tap="infoSliderShow=false; profileSliderShow = true">
          <a href="#">
            <img src="./images/info/forward.png">
          </a>
        </v-touch>
      </div>
      <div class="slider-content">
        <div class="topside">
          <v-touch @press="pressedElement = 'Planner'"   @pressup="pressedElement = ''">
            <div class="container" :press="pressedElement == 'Planner'">
              <h1>Planner</h1>
              <img src="./images/info/planner.png" alt="">
            </div>
          </v-touch>
          <v-touch 
          @press="pressedElement = 'Earnings'"  
          @tap="pressedElement = 'Earnings';infoSliderShow=false;earnSliderShow=true"
          @panmove="pressedElement=''"
          @pressup="infoSliderShow=false;earnSliderShow = true">
            <div class="container" :press="pressedElement == 'Earnings'">
              <h1>Earnings</h1>
              <img src="./images/info/earning.png" alt="">
            </div>
          </v-touch>
          <v-touch @press="pressedElement = 'Referrals'"  @pressup="pressedElement = ''">
            <div class="container" :press="pressedElement == 'Referrals'">
              <h1>Referrals</h1>
              <img src="./images/info/referral.png" alt="">
            </div>
          </v-touch>
        </div>
        <div class="downside">
          <v-touch 
          @press="pressedElement = 'Setttings'"  
          @pressup="infoSliderShow=false;settingSliderShow=true" 
          @panmove="pressedElement = ''"
          @tap="pressedElement = 'Setttings';infoSliderShow= false; settingSliderShow = true"
          >
            <h1 :press = "pressedElement == 'Setttings'">Setttings</h1>
          </v-touch>
          <v-touch 
          @press="pressedElement = 'FAQs'"  
          @pressup="infoSliderShow=false;questionSliderShow = true" 
          @panmove="pressedElement = ''"
          @tap="pressedElement = 'FAQs';infoSliderShow = false; questionSliderShow = true">
            <h1 :press = "pressedElement == 'FAQs'">FAQs</h1>
          </v-touch>
        </div>
      </div>
      <div class="slider-footer">
        <a href="">App feedback</a>
      </div>
    </div>
    <div class="profile-slider slider" :show = "profileSliderShow">
      <div class="profile-header">
        <v-touch @tap="profileSliderShow=false">
          <img src="./images/cancel.png" alt="">
        </v-touch>
        <h1>Profile</h1>
      </div>
      <div class="profile-content">
        <div class="account">
          <h1>{{firstName}} {{lastName}}</h1>
          <h1>{{email}}</h1>
          <h1>{{phone}}</h1>
          <img src="./images/profile/uniform.png" alt="">
          <a href="">Change details or emergency contact info</a>
        </div>
        <div class="vehicle">
          <h1>{{accountType}}</h1>
          <img src="./images/profile/ebike.png" alt="">
          <a href="">View vehicle details</a>
        </div>
      </div>
    </div>
    <div class="earn-slider slider" :show="earnSliderShow">
      <div class="earning-header">
        <v-touch @tap="earnSliderShow = false">
          <img src="./images/cancel.png" alt="">
        </v-touch>
        <h1>Earnings</h1>
      </div>
      <div class="earning-content">
        <div class="summary">
          <div>
            <span>{{totalEarnings}}</span>
            <span>Total earnings</span>
          </div>
          <div>
            <span>{{orders}}</span>
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
            <span>€{{balance}}</span>
          </div>
          <v-touch class="content"  
            @tap="pressedElement = 'Previous payments';paymentSliderShow=true"
            @press="pressedElement = 'Previous payments'"
            @pressup="pressedElement='';paymentSliderShow=true"
            @panmove="pressedElement=''"
            :press="pressedElement == 'Previous payments'">
            <span>Previous payments</span>
            <img src="./images/earn/forward.png" alt="">
          </v-touch>
        </div>
        <div class="activity">
          <div>
            <span>Activity</span>
          </div>
            <v-touch 
              @tap="activitySliderShow=true"
              @press="pressedElement = 'All activity'"
              @pressup="pressedElement = '';activitySliderShow = true"
              @panmove="pressedElement = ''"
              :press="pressedElement == 'All activity'">
              <span>All activity</span>
              <img src="./images/earn/forward.png" alt="">
            </v-touch>
        </div>
      </div>
    </div>
    <div class="question-slider slider" :show="questionSliderShow">
      <div class="header">
        <v-touch @tap="questionSliderShow = false">
          <img class="img-x" src="./images/cancel.png">
        </v-touch>
        <h1>FAQs</h1>
      </div>
      <div class="search">
        <input type="text" placeholder="Search" @input="inputChange" @blur="inputBlur" v-model="searchKeyword">
        <img class="img-search" src="./images/question/search.png" alt="">
      </div>
      <div class="content">
        <ul>
          <li v-for="(question,index) in questions" :key="index" :hide="question.hide">
            <span>{{question.content}}</span>
            <v-touch>
              <img src="./images/question/forward.png" alt="">
            </v-touch>
          </li>
        </ul>
      </div>
    </div>
    <div class="setting-slider slider" :show="settingSliderShow">
      <div class="outer">
        <v-touch @tap="settingSliderShow = false">
          <img class="img-x" src="./images/cancel.png" alt="">
        </v-touch>
        <span>Settings</span>
        <img id="img-bike" src="./images/setting/bike.png" alt="">
      </div>
      <div class="outer">
        <div class="inner">
          <img class="img-setting" src="./images/setting/map2.png" alt="">
          <span>Map Settings</span>
        </div>
        <v-touch>
          <img class="img-forward" src="./images/setting/forward.png" alt="">
        </v-touch>
      </div>
      <div class="outer">
        <div class="inner">
          <img class="img-setting" src="./images/setting/map1.png" alt="">
          <span>Open in Maps</span>
        </div>
        <v-touch>
          <img class="img-forward" src="./images/setting/forward.png" alt="">
        </v-touch>
      </div>
      <div class="outer">
        <div class="inner">
          <img class="img-setting" src="./images/setting/calendar.png" alt="">
          <span>Sync to calendar</span>
        </div>
        <v-touch>
          <img class="img-forward" src="./images/setting/forward.png" alt="">
        </v-touch>
      </div>
      <div class="outer">
        <div class="inner">
          <img class="img-setting" src="./images/setting/trash.png" alt="">
          <span>Delete account</span>
        </div>
        <v-touch>
          <img class="img-forward" src="./images/setting/forward.png" alt="">
        </v-touch>
      </div>
      <div class="outer">
        <v-touch>
          <a href="">Log out</a>
        </v-touch>
      </div>
      <div class="outer">
        <span>Version {{version}}</span>
      </div>
    </div>
    <div class="payment-slider slider" :show="paymentSliderShow">
      <div class="outer">
        <v-touch @tap="paymentSliderShow=false">        
          <img src="./images/backward.png" alt="">
        </v-touch>
        <span>Previous payments</span>
      </div>
      <div class="outer">
        <span>Previous payments</span>
      </div>
      <div class="outer" v-for="payment in payments" :key="payment.invoiceNo">
        <div class="left">
          <span>{{payment.fromDate}} - {{payment.toDate}}</span>
          <span>{{payment.invoiceNo}} · {{payment.paid ? 'Paid' : 'Unpaid'}}</span>
        </div>
        <div class="right">
          <span>€{{payment.totalAmount}}</span>
          <v-touch>
            <img src="./images/payment/forward.png" alt="">
          </v-touch>
        </div>
      </div>
    </div>
    <div class="activity-slider slider" :show="activitySliderShow">
      <div class="outer">
        <v-touch @tap="activitySliderShow = false;">
          <img src="./images/backward.png" alt="">
        </v-touch>
        <div class="inner">
          <v-touch @tap="activityType = 'weekly'">
            <span :selected="activityType == 'weekly'">Weekly</span>
          </v-touch>
          <v-touch @tap="activityType = 'monthly'">
            <span :selected="activityType == 'monthly'">Monthly</span>
          </v-touch>
        </div>
      </div>
      <div class="outer" v-show="activityType=='weekly'" 
        v-for="activity in weeklyActivities" :key="activity.fromDate">
        <div>
          <span>{{activity.fromDate}} - {{activity.toDate}}</span>
          <span>{{activity.orders}} orders</span>
        </div>
        <span>€{{activity.totalAmount}}</span>
      </div>
      <div class="outer" v-show=" activityType == 'monthly'" 
        v-for="activity in mmonthlyActivities" :key="activity.month">
        <div>
          <span>{{activity.month}}</span>
          <span>{{activity.orders}} orders</span>
        </div>
        <span>€{{activity.totalAmount}}</span>
      </div>
      <div class="outer">
        <v-touch @tap = "addMoreActivities">
          <a href="#">See more</a>
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle'
  export default {
    name: "Main",
    data() {
      return {
           firstName: 'Funeng',
           lastName : 'Wang' ,
           email:'funengwang95@gamil.com',
           phone: '+353838590816',
           riderId : '834026',
           accountType:'Electric bike',
           balance: '0.00',
           totalEarnings : 0,
           orders: 0,
           version:'24.01.11',

           feeShow: false,
           infoSliderShow: false,
           profileSliderShow : false,
           earnSliderShow: false,
           questionSliderShow: false,
           settingSliderShow: false,
           paymentSliderShow: false,
           activitySliderShow : false,
           activityType : 'weekly',
           pressedElement: '',
           searchKeyword: '',
           questions : [
            {content:'Free rider insurance', hide: false},
            {content:'How do I change my vehicle type?', hide: false},
            {content:'How do I update my account details?', hide: false},
            {content:'How do I buy more kit?', hide: false},
            {content:'What should I do if there\'s something wrong with my fees?', hide: false},
            {content:'How do I log into the app?', hide: false},
            {content:'Referrals', hide: false},
            {content:'Rider privacy policy', hide: false},
            {content:'A customer who looks under 25 doesn\'t have ID for an order containing alcohol. What should I do?', hide: false},
            {content:'If there\'s an emergency while I\'m on an order, what should I do?', hide: false},
            {content:'What should I do if my vehicle breaks down or my equipment stops working?', hide: false},
            {content:'What should I do if I\'m having app issues?', hide: false},
            {content:'What are the core kit items?', hide: false},
            {content:'When will I receive my fees?', hide: false}
            ],
          payments:[{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 19,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 18,
            paid: true,
            totalAmount:60.59
          },
          {
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 17,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 16,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 15,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 14,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 13,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 12,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 11,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 10,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 9,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 8,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 7,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 6,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 5,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 4,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 3,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 2,
            paid: true,
            totalAmount:60.59
          },{
            fromDate:'20 Nov',
            toDate:'20 Nov',
            invoiceNo: 1,
            paid: true,
            totalAmount:60.59
          }],
          weeklyActivities: [{
            fromDate:'15 Jan',
            toDate:'21 Jan',
            orders: 0,
            totalAmount: 0
          },{
            fromDate:'8 Jan',
            toDate:'14 Jan',
            orders: 0,
            totalAmount: 0
          },{
            fromDate:'1 Jan',
            toDate:'7 Jan',
            orders: 0,
            totalAmount: 0
          },{
            fromDate:'25 Dec',
            toDate:'31 Dec',
            orders: 0,
            totalAmount: 0
          },{
            fromDate:'18 Dec',
            toDate:'24 Dec',
            orders: 0,
            totalAmount: 0
          },{
            fromDate:'11 Dec',
            toDate:'17 Dec',
            orders: 0,
            totalAmount: 0
          }],
          mmonthlyActivities: [{
            month:'Jan',
            orders: 0,
            totalAmount: 0
          },{
            month:'Dec',
            orders: 0,
            totalAmount: 0
          },{
            month:'Nov',
            orders: 37,
            totalAmount: 241.78
          },{
            month:'Oct',
            orders: 0,
            totalAmount: 0
          },{
            month:'Sep',
            orders: 8,
            totalAmount: 66.28
          },{
            month:'Aug',
            orders: 257,
            totalAmount: 1607.28
          }]
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
    methods:{
     inputChange(e) {},
     inputChange:throttle(function(e) {
        this.reset()
        for(let question of this.questions){
          if(question.content.indexOf(this.searchKeyword) == -1){
            question.hide = true
          }
        }
      }, 500),
      inputBlur(){
        this.searchKeyword = ''
        this.reset()
      },
      reset(){
        for(let question of this.questions){
          question.hide = false
        }
      },
      addMoreActivities(){

      }
    },
    watch:{
      earnSliderShow(newVal){
        if(!newVal){
          this.pressedElement = ''
        }
      },
      questionSliderShow(newVal) {
        if(!newVal) {
          this.pressedElement = ''
        }
      },
      settingSliderShow(newVal) {
        if(!newVal) {
          this.pressedElement = ''
        }
      },
      paymentSliderShow(newVal) {
        if(!newVal) {
          this.pressedElement = ''
        }
      },
      activitySliderShow(newVal){
        if(!newVal) {
          this.pressedElement = ''
        }
      }
    }
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
      transition: top .5s ease;
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

    .main[fullShow] {
      top:15vh;
      height: 85vh;
    }

    .info-slider {
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
        padding-right: 4vw;
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

          .container[press] {
            background-color: rgb(68, 68, 71);
          }

          .container:nth-child(2){
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

          h1[press] {
            background-color: rgb(68, 68, 71);
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

    .info-slider[show]{
      right:33vw;
      width: 67vw;
    }

    .slider {
      position: absolute;
      top: 100vh;
      height: 0vh;
      width: 100vw;
      background-color: rgb(28, 28, 30);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      transition: top .5s ease, height .5s ease;
      overflow: hidden;
    }

    .slider[show]{
      top: 5vh;
      height: 95vh;
    }

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

    .earn-slider {
      .earning-header {
        padding-left: 4vw;
        padding-top: 2vh;
        height: 10vh;
        margin-bottom: 2vh;

        h1{
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

          div{
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

    .question-slider {
      overflow: scroll;
      .header {
        height: 4.3vh;
        position: relative;
        padding-top: 2vh;
        border-bottom: 1px solid rgb(49, 49, 53);

        img {
          position: absolute;
          top: 2vh;
          left: 2vw;
        }

        h1 {
          text-align: center;
        }
      }

      .search {
        background-color: green;
        height: 4.3vh;
        margin-bottom: 1vh;
        margin-top: 1vh;
        margin-left: 2vw;
        margin-right: 2vw;
        border: 1px solid rgb(49, 49, 53);
        background-color: rgb(49, 49, 53);
        border-radius: 10px;
        position: relative;
    
        img {
          position: absolute;
          top: calc(50% - 8.5px);
          left: 2vw;
          width: 17px;
        }

        input {
          display: block;
          width: 80%;
          margin-top: .8vh;
          margin-left: 10vw;
        }
      }

      .content {
        ul {
          display: flex;
          flex-direction: column;

          li {
            background-color: rgb(44, 44, 46);
            border-bottom: 1px solid rgb(68, 68, 71);
            padding-left: 4vw;
            padding-right: 4vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 5.5vh;

            span {
              font-size: 14px;
              font-weight: normal;
            }

            img {
              width: 9px;
            }
          }

          li[hide] {
            display: none;
          }
        }
      }
    }

    .setting-slider {
      display: flex;
      flex-direction: column;
      padding-top: 2vh;

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
      }

      .outer:nth-child(2){
        margin-bottom: 0;
        border-bottom: 0;
        .inner {
              img {
            width: 18px;
          }
        }
      }

      .outer:nth-child(4){
        .inner {
          img {
            width: 18px;
          }
        }
      }

      .outer:nth-child(6) {
        a {
          color: rgb( 102, 224, 215);
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
            margin-top: .7vh;
          }
        }
      }

      .outer:first-child,
      .outer:nth-child(2){
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
        img{
          width: 18px;
          margin-right: 25vw;
        }

        span {
          font-size: 16px;
        }
      }

      .outer:nth-child(2){
        span {
          font-size: 18px;
        }
      }
    }

    .activity-slider {
      display: flex;
      flex-direction: column;
      background-color: rgb(28, 28, 30);
      overflow: scroll;

      .outer {
        height: 8.3vh;
        background-color: rgb(44, 44, 46);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(68, 68, 71);
        padding-left: 4vw;
        padding-right: 4vw;

        div{
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          span {
            font-weight: normal;
          }

          span:last-child {
            font-size: 14px;
            color: rgb(158, 158, 165);
          }
        }
      }

      .outer:first-child {
        background-color: rgb(28, 28, 30);
        justify-content: flex-start;
        margin-bottom: 1.5vh;
        border-bottom: 0;

        .inner {
          display: flex;
          flex-direction: row;
          background-color: rgb(49, 49, 54);
          border-radius: 5px;
          height: 3.5vh;
          padding: 2px;
          
          span {
            color: #fff;
            font-size: 14px;
            line-height: 3.5vh;
            font-weight: normal;
            border-radius: 5px;
            padding-left: 10px;
            padding-right: 10px;
          }

          span[selected] {
            background-color: rgb(105, 105, 111);
          }
        }

        img {
          width: 18px;
          margin-right: 25vw;
        }
      }

      .outer:last-child {
        a {
          color: rgb(102, 224, 215);
        }
      }
    }

    .img-x {
      width: 16px;
    }
  }
</style>