<template>
  <div id="app">
    <el-row class="top-nav" type="flex" justify="space-between">
      <el-col :span="12"><div>您好，欢迎来到昆明锦业律师事务所!</div></el-col>
      <el-col class="top-info" :span="12">
          <span class="top-nav-content">联系律师</span>
          <el-divider direction="vertical"></el-divider>
          <span class="top-nav-content">微信</span>
          <el-divider direction="vertical"></el-divider>
          <span class="top-nav-content tel"><i class="el-icon-mobile-phone"></i> 13888123456</span>
      </el-col>
    </el-row>
    <el-container class="main">
      <el-header height="80px">
        <div class="title">昆明锦业律师事务所</div>
      </el-header>
      <el-menu :default-active="activeIndex" class="nav-bar" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">律所介绍</el-menu-item>
        <el-menu-item index="2">擅长领域</el-menu-item>
        <el-menu-item index="3">律师简介</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
      </el-menu>
      <el-container class="main-container">
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
    <el-backtop :bottom="70"></el-backtop>
  </div>
</template>

<style scoped>
  .top-nav {
    padding: 0 8%;
    background: #ecf5ff;
    height: 38px;
    width: 100%;
    clear: both;
    color: #444;
    line-height: 38px;
  }
  .top-nav * {
    font-size: 13px;
  }
  .top-info {
    text-align: right;
  }
  .top-nav-content {
    cursor: pointer;
  }
  .el-header .title {
    margin-left: calc(8% - 20px);
    font-size: 35px;
    font-weight: bold;
    line-height: 80px;
    color: #303133;
  }
  .nav-bar {
    padding: 0 8%;
    width: 100%;
    position: relative;
  }
  .main-container {
    /* 控制容器高度自适应
    *  减去 Head 38px, Title 80px, NavBar 61px, Foot 60px
    */
    min-height: calc(100vh - 239px);
  }
  .el-main {
    padding: 0 30px;
    height: main;
    overflow: hidden;
  }
  .el-footer {
    background-color: #545c64;
  }
</style>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      let aim
      switch (key) {
        case '1': aim = 'firm'; break
        case '2': aim = 'expert-in'; break
        case '3': aim = 'lawyer'; break
        case '4': aim = 'contact'; break
      }
      document.querySelector('#' + aim).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>
