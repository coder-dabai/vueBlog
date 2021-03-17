<template>
  <div class="home">
    <homeHeader @contentClick="changeToContent" @publishClick="changeToPublish">
      <template #text>
          <span>欢迎来到dabai的博客</span>
      </template>
    </homeHeader>
    <component :is="comName"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/homeHeader.vue'
import homeContent from '@/components/homeContent.vue'
import blogPublish from '@/components/blogPublish'
console.log("首页")
export default {
  name: 'Home',
  components: {
    homeContent,
    homeHeader,
    blogPublish
  },
  data(){
    return{
      comName:"homeContent"
    }
  },
  methods: {
    changeToContent(){
      this.comName = "homeContent"
    },
    changeToPublish(){
      this.comName = "blogPublish"
    }
  },
}
</script>

<style lang="scss" scoped>

</style>