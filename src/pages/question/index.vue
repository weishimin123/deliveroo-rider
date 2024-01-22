<template>
  <div class="question-slider slider" :show="show">
    <div class="header">
      <v-touch @tap="closeQuestionSlider">
        <img class="img-x" src="../images/cancel.png" />
      </v-touch>
      <h1>FAQs</h1>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="Search"
        @input="inputChange"
        @blur="inputBlur"
        v-model="searchKeyword"
      />
      <img class="img-search" src="./images/search.png" alt="" />
    </div>
    <div class="content">
      <ul>
        <li
          v-for="(question, index) in questions"
          :key="index"
          :hide="question.hide"
        >
          <span>{{ question.content }}</span>
          <v-touch>
            <img src="./images/forward.png" alt="" />
          </v-touch>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import throttle from "lodash/throttle"
  import { mapState } from "vuex"
  export default {
    name: "Question",
    data() {
      return {
        searchKeyword: "",
      }
    },
    props: ["show"],
    computed: {
      ...mapState({
        questions: (state) => state.question.questions,
      }),
    },
    methods: {
      inputChange(e) {},
      inputChange: throttle(function (e) {
        this.reset()
        for (let question of this.questions) {
          if (question.content.indexOf(this.searchKeyword) == -1) {
            question.hide = true
          }
        }
      }, 500),
      inputBlur() {
        this.searchKeyword = ""
        this.reset()
      },
      
      reset(){
        for(let question of this.questions){
          question.hide = false
        }
      },
      closeQuestionSlider() {
        this.$bus.$emit("closeQuestion")
      },
    },
  }
</script>

<style lang="less" scoped>
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
        margin-top: 0.8vh;
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
</style>