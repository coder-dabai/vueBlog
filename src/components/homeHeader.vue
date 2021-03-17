<template>
    <div class="homeHeader">
        <div class="header-border"></div>
        <div class="welc">
            <slot name="text"><span>欢迎来到博客</span></slot>
        </div>
        <img src="@/assets/unlog.png" alt="" class="unlogin_png">
        <span class="plz">请先登录</span>
        <div class="function">
            <span :class="{currentPage:currentTag==0}" class="zhuye" @click="homeClick" >主页</span>|
            <span :class="{currentPage:currentTag==1}" class="fabiao" @click="blogPublish">发表文章</span>|
            <span :class="{currentPage:currentTag==2}" class="login" @click="loginClick">登录</span>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentTag:0
        }
    },
    methods: {
        homeClick(){
            this.$emit("contentClick")
            this.currentTag = 0
        },
        blogPublish(){
            this.$emit("publishClick")
            this.currentTag = 1
        },
        loginClick(){
            this.currentTag = 2
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="scss" scoped>
.homeHeader{
    position: relative;
    width: 100%;
    height: 300px;
    text-align: center;
    .header-border{
    position: absolute;
    height: 1px;
    width: 1000px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;

}
.welc{
    position: absolute;
    height: 50px;
    width: 200px;
    margin-top: 30px;
    left: 50%;
    transform: translateX(-50%);
}
.unlogin_png{
    position: absolute;
    width: 100px;
    height: 100px;
    margin-top: 50px;
    left: 50%;
    transform: translateX(-50%);
}
.plz{
    position: absolute;
    display: block;
    width: 200px;
    height: 40px;
    margin-top: 150px;
    left: 50%;
    transform: translateX(-50%);
}
.function{
    position: absolute;
    display: flex;
    width: 200px;
    height: 40px;
    justify-content: space-between;
    margin-top: 200px;
    left: 50%;
    transform: translateX(-50%);
    .zhuye,.fabiao,.login{
        &:hover{
            color: darkgoldenrod;
            cursor: pointer;
        }
    }
    
}
}
.currentPage{
    color: darkgoldenrod;
}
</style>