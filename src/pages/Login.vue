<template>
  <div class="content">
    <div class="main">
      <v-touch @tap="movingUpOrDown" >
        <div class="topside" :shrink="isTyping">
          <a v-show="!isTyping">
            <img class="wenhao" ref="wenhao" src="images/wenhao.png" />
          </a>
          <h1>
            Welcome to <br />
            Deliveroo
          </h1>
          <img v-show="!isTyping" class="rider" src="images/rider.png" />
        </div>
      </v-touch>
      <div class="downside">
        <v-touch @tap="checkTyping">
          <div v-show="inputType == 'phone'" class="input">
            <h2 class="log">Log into your rider account</h2>
            <input type="tel" placeholder="Enter phone number or email"  v-model="phone"/>
            <v-touch @tap="phone=''">
               <a class="img" v-show="isTyping">
                <img class="cancel" src="images/cancel.png"/>
              </a>
            </v-touch>
            <h2 class="hint" v-show="isTyping">The phone number linked to your account</h2>
            <v-touch @tap="inputType = inputType == 'phone' ? 'email' : 'phone'">
              <a class="tip" v-show="isTyping">Use email instead?</a>
            </v-touch>
            <v-touch @tap="goContinue">
              <button class="btn" ref="btn">Continue</button>
            </v-touch>
          </div>
        </v-touch>
        <v-touch @tap="checkTyping">
          <div v-show="inputType == 'email'" class="input">
            <h2 class="log">Log into your rider account</h2>
            <input type="tel" placeholder="Enter phone number or email"  v-model="email"/>
            <v-touch @tap="email=''">
              <a class="img" v-show="isTyping">
                <img class="cancel" src="images/cancel.png"/>
              </a>
            </v-touch>
            <h2 class="hint" v-show="isTyping">The email linked to your account</h2>
            <v-touch @tap="inputType = inputType == 'phone' ? 'email' : 'phone'">
              <a class="tip" v-show="isTyping">Use phone number instead?</a>
            </v-touch>
            <v-touch @tap="goContinue">
              <button class="btn" ref="btn">Continue</button>
            </v-touch>
          </div>
        </v-touch>
        <a class="apply">Apply to be a rider</a>
      </div>
    </div>
    <v-touch @pandown="sliderDown" @panup="sliderUp">
      <div class="slider" :style="{height: sliderHeight+'vh', top: sliderTop+'vh'}">
        <h1>Help</h1>
        <v-touch @tap="isMovingUP = false">
          <a>
            <img class="x" src="images/x.jpg" />
          </a>
        </v-touch>
        <h2>I can't log in</h2>
        <v-touch @tap="goHelp">
          <a>
            <img class="bigger" src="images/bigger.jpg" />
          </a>
        </v-touch>
      </div>
    </v-touch>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle'
  
  export default {
    name: "Login",
    data() {
      return {
        isMovingUP: false,
        phone: null,
        email: null,
        inputType: "phone",
        isTyping: false,
        screenHeight : window.screen.height,
        sliderHeight:0,
        sliderTop: 100
      }
    },
    methods: {
      movingUpOrDown(event) {
        if (event.target == this.$refs.wenhao) {
          this.isMovingUP = true
        } else {
          this.isMovingUP = false
        }
        if(this.isTyping){
          this.isTyping = false
        }
      },
      checkTyping(event) {
        if(!this.isTyping) {
          this.isTyping = true
        }
      },
      goContinue() {
         if(!this.isTyping){
          this.isTyping = true
        } else {
          if(!this.phone || !this.email)
            console.log(this.$router);
            this.$router.push('/main')
        }
      },
      goHelp() {

      },
      sliderDown(e) {
      },
      sliderDown:throttle(function(e){
        let moveDistance = Math.ceil(e.deltaY/this.screenHeight * 100)
        if(this.sliderHeight - moveDistance <= 25){
          this.isMovingUP = false
          this.sliderHeight = 0
          this.sliderTop = 100
        }else {
          this.sliderHeight -= moveDistance
          this.sliderTop += moveDistance
        }
      }, 30),
      sliderUp(e){

      },
      sliderUp:throttle(function(e){
        if(this.isMovingUP){
          let deltaY = - e.deltaY
          let moveDistance = Math.ceil(deltaY/this.screenHeight * 100)
          this.sliderHeight = this.sliderHeight + moveDistance >= 95 ? 95 : this.sliderHeight + moveDistance 
          this.sliderTop =  this.sliderTop - moveDistance <= 5 ? 5 : this.sliderTop - moveDistance
        }
      }, 30),
    },
    watch:{
      isMovingUP(newVal) {
        if(newVal){
          this.sliderHeight = 95
          this.sliderTop = 5
        } else {
          this.sliderHeight = 0
          this.sliderTop = 100
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .content {
    position: relative;
    .main {
      z-index: -1;
      .topside {
        background-color: rgb(6, 127, 138);
        height: 76vh;
        position: relative;
        overflow: hidden;
        transition: height .5s;

        h1 {
          font-weight: bold;
          font-size: 20px;
          margin-top: 100px;
          margin-left: 16px;
        }

        .wenhao {
          position: absolute;
          right: 16px;
          top: 60px;
          width: 20px;
        }

        .rider {
          position: absolute;
          top: 135px;
          left: 113px;
          width: 160px;
        }
      }

      .topside[shrink] {
        height: 46vh;
      }

      .downside {
        height: 24vh;
        background-color: rgb(46, 51, 51);
        position: relative;

        .input {
          border: 2px solid rgb(67, 72, 72) transparent;
          border-radius: 5px;
          margin: 4vw;
          padding: 16px;
          background-color: rgb(67, 72, 72);
          box-sizing: border-box;
          width: 92vw;
          top: -5vh;
          position: absolute;

          .log {
            margin-bottom: 16px;
            font-weight: bold;
            font-size: 14px;
          }

          input {
            width: 100%;
            display: block;
            font-size: 14px;
          }

          .img {
            position: absolute;
            right: 5%;
            top: 25%
          }

          .cancel {
            width: 15px;
          }

          .hint,.tip {
            font-size: 13px;
          }

          .hint {
            color: rgb(88, 92, 92);
            margin-top: 10px;
          }

          .tip {
            display: block;
          }

          .btn {
            background-color: rgb(0, 204, 188);
            border-radius: 5px;
            font-weight: bold;
            font-size: 14px;
            width: 100%;
            text-align: center;
            padding: 16px;
            margin-top: 12px;
          }
        }

        .apply {
          position: absolute;
          width: 100%;
          font-size: 14px;
          text-align: center;
          bottom: 6vh;
        }
      }

      .downside::before {
        content: "";
        display: block;
        border-bottom: 5vh solid rgb(46, 51, 51);
        border-left: 100vw solid rgb(6, 127, 138);
      }
    }
    .slider {
      position: absolute;
      z-index: 2;
      width: 100vw;
      overflow: hidden;
      transition: height .5s ease, top .5s ease;
      background-color: rgb(250, 250, 250);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      h1 {
        color: rgb(45, 50, 53);
        text-align: center;
        font-weight: bolder;
        height: 25px;
        line-height: 25px;
        font-size: 16px;
        margin-top: 16px;
      }

      .x {
        width: 17px;
        top: -22px;
        left: 15px;
        position: relative;
      }

      h2 {
        color: rgb(39, 47, 45);
        font-size: 14px;
        padding: 10px;
        background-color: rgb(255, 255, 255);
        border-top: 1px solid rgb(238, 238, 238);
        border-bottom: 1px solid rgb(238, 238, 238);
        font-weight: 500;
      }

      .bigger {
        width: 10px;
        position: relative;
        top: -35px;
        left: 92vw;
      }
    }
  }
</style>