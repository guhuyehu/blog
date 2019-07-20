<template>
<div class="new">
    <div class="nav">
      <p>{{ message }}</p>
    </div>
    <div class="from">
      <p>动漫名称：<input type="text" name="title" id="title" v-model="title"></p>
      <p>动漫作者：<input type="text" name="author" id="author" v-model="author"></p>
      动画详情：
      <div>
        <textarea name="details" id="" cols="50" rows="10" v-model="details"></textarea>
      </div>
      <button type="submit" @click="submitData">点击完成新增</button>
    </div>
  
</div>
</template>

<script>
import { log } from 'util';
import axios from 'axios'
export default {
  data() {
    return {
      message : '新增动漫',
      title:'',
      author:'',
      details:''
    };
  },
  methods: {
    submitData:  function(){
      axios({
        method: 'post',
        url: "http://localhost:7001/api/getlist",
        data: {
          title:this.title,
          author:this.author,
          details:this.details
        }
      }).then((res)=>{
          
        })
  },
  }
}
</script>

<style>
.nav{
position: fixed;
top: 0;
width: 100%;
height: 60px;
background-color: rgba(228, 187, 187, 0.9);
text-align: center;
border-bottom: 1px solid #ddd;
box-shadow: 0  1px rgba(0,0,0,.04);
}
.nav p {
  color:#555;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
}
.from {
   position: fixed;
   top: 80px;
   left: 50%;
   transform: translate(-50%)
}
.from p {
  margin: 2px;
  border: 1px
}
</style>
