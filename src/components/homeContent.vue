<template>
    <div class="block">
        <!--内容组件-->
  <el-timeline v-for="item in blogs" :key="item.id">
    <el-timeline-item :timestamp="item.created" placement="top">
      <el-card>
            <h4>
                    {{item.title}}
            </h4>
            <p>{{item.description}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <!--分页组件-->
  <el-pagination class="page"
  background
  layout="prev, pager, next"
  :current-page=currentPage
  :page-size=pageSize
  
  :total="total">
</el-pagination>
</div>
</template>

<script>
import {getHomeBlogs} from '@/network/home.js'   //引入封装好的home相关网络请求
export default {
    data(){
        return{
            blogs:{},   //博文
            currentPage:1,    //当前页
            total:0,        //总页数
            pageSize:5      //每页博文数量
        }
    },
    created(){
        getHomeBlogs().then(res=>{
            this.blogs = res.data.data.records
            this.currentPage = res.data.data.current
            this.total = res.data.data.total
            this.pageSize = res.data.data.size
        }).catch(err=>{
            console.log(err)
        })
    },
    methods: {
        // getTotalBlogs(){
        //     axios.get('/blogs.json').then(res => {
        //             console.log(res);
        //         }, err => {
        //             console.log(err);
        //         });
        // }
    }
}
</script>

<style lang="scss" scoped>
.block{
    width: 1000px;
    margin: 0 auto;
    position: relative;
    .page{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 50px;
    }
}
</style>