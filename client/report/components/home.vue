<template>
  <shell>
    <template slot="header">
      <div class="homeHeader">
        <router-link :to="'/mine'">
          <a href="#">
            <img src="../images/logo.jpg" alt="logo" class="logo" />
          </a>
        </router-link>
        <div class="title">
          <a href="#">{{ message }}</a>
        </div>
      </div>
    </template>
    <template slot="nav">
      <div class="nav">
        <ul>
          <li>
            <router-link :to="'/'">首页</router-link>
          </li>
          <li>
            <router-link :to="'/new'">新增博客</router-link>
          </li>
          <li>
            <router-link :to="'/friend'">留言板</router-link>
          </li>
          <li>
            <router-link :to="'/mine'">我的信息</router-link>
          </li>
        </ul>
      </div>
    </template>
    <template slot="content">
      <div class="content">
        <ul>
          <li v-for="i in list" :key="i.id">
            <router-link :to="{ path: '/details',query: { id : i.id}}">
              <p class="title">{{ i.title }}</p>
            </router-link>
            <p class="author">{{ i.author }}</p>
          </li>
        </ul>
        <img src="../images/loading.gif" alt class="loading" v-show="show" />
      </div>
    </template>
    <template slot="footer">
      <button @click="showMore">加载更多</button>
      <div class="footer"></div>
    </template>
  </shell>
</template>

<script>
import axios from "axios";
import shell from "./shell";
import store from "../store/index";
import { constants } from "crypto";
import { log } from "util";
export default {
  components: {
    shell
  },
  data() {
    return {
      message: "王智宇的博客",
      show: false
    };
  },
  computed: {
    list: function() {
      return this.$store.state.datalist;
    }
  },
  mounted() {
    this.$store.dispatch("getJSdata");
  },
  methods: {
    showMore() {
      // console.log("+++++++++");
      console.log(this.$store.state.page);
      console.log(this.$store.state.lastid);
      if (this.$store.state.page <this.$store.state.lastid) {
        this.$store.commit("changePage", this.$store.state.page + 1);
        // console.log(this.$store.state.page)
        this.$store.dispatch("getJSdata").then(() => {});
      } else {
        console.log("++++++++++++++++++++++++++");
        alert("老子是底线的");
      }
    }
  }
};
</script>

<style>
.homeHeader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px rgba(0, 0, 0, 0.04);
  /* z-index: 9999; */
}
.homeHeader .logo {
  width: 55px;
  height: 45px;
  border-radius: 50%;
  margin: 10px auto;
  float: left;
}
.homeHeader .title {
  color: #555;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
}
.homeHeader .title :hover {
  color: skyblue;
  font-size: 40px;
}
.nav {
  height: 50px;
  width: 1000px;
  margin: auto;
}
.nav ul li {
  float: left;
  width: 200px;
  line-height: 50px;
  text-align: center;
  background-color: rgb(241, 161, 175);
  border: 2px solid skyblue;
}
.nav ul li :hover {
  color: red;
}
.content {
  /* border: 1px  blueviolet; */
  width: 100%;
}
.content ul li {
  border: 1px solid blueviolet;
  margin: 2px;
}
.content .loading {
  /* display: none; */
  width: 100px;
  height: 100px;
  opacity: 0.3;
}
</style>
