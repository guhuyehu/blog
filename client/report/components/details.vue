<template>
 <div class="details">
     <div class="header">
       <p>{{ getDate.title }}</p>
     </div>
     <div class="content">
       {{ getDate.details}}
     </div>
 </div>
</template>

<script>
// import { lookup } from 'dns';
import store from "../store/index"
 export default {
   data () {
     return {
       id:""
     }
   },
   computed:{
    getId: function(){
      return this.id
    },
    getDate:function(){

      return this.$store.getters.selectBlog
      }
   },
   components: {

   },
   created( ){
     this.id = Number(this.$route.query.id);
   },
   mounted() {
    this.$store.commit('selectBlogHandle', this.getId)
     
   }
 }
</script>

<style>
.header {
  position: fixed;
top: 0;
width: 100%;
height: 60px;
background-color: rgba(255,255,255,.9);
text-align: center;
border-bottom: 1px solid #ddd;
box-shadow: 0  1px rgba(0,0,0,.04);
}
.header p {
  color:#555;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
}
.content {
  position: fixed;
  top: 80px;
}
</style>
