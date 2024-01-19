<template>
  <div class="content">
    <!-- <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
		</map> -->

    <h2 style="color: black">{{ key }}</h2>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        id: 0, // 使用 marker点击事件 需要填写id
        title: "map",
        latitude: 39.909,
        longitude: 116.39742,
        covers: [
          {
            latitude: 39.909,
            longitude: 116.39742,
            iconPath: "../../../static/location.png",
          },
          {
            latitude: 39.9,
            longitude: 116.39,
            iconPath: "../../../static/location.png",
          },
        ],
      }
    },
    computed: {
      key() {
        return this.$route.query.key
      },
    },
    mounted() {
      // console.log(this.$route.query)
    },
    onLoad(routeData) {
      console.log("onLoad", routeData)
    },
  }
</script>

<style lang="less" scoped>
  .content {
    #area {
      width: 60vw;
      height: 60vh;
      background-color: pink;
    }

    #view {
      width: 30vw;
      height: 30vh;
      border: 1px solid black;
      background-color: skyblue;
    }
  }
</style>