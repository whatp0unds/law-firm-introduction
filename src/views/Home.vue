<template>
  <div class="home">
    <div id="firm" class="block firm-pic-carousel">
      <el-carousel height="6rem">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image class="firm-pic" :src="picSrc(item)" :fit="'fill'"></el-image>
        </el-carousel-item>
      </el-carousel>
      <!-- <span class="demonstration">律所外观</span> -->
    </div>
    <el-divider id="expert-in" class="divider-icon"><i class="el-icon-collection"></i><span class="title">擅长领域</span></el-divider>
    <div class="block expert-in">
      <el-row style="flex-wrap: wrap;" :gutter="40" type="flex" justify="space-between">
        <el-col class="expert-card" v-for="(o, index) in expertIn" :key="index">
          <el-card :body-style="{ padding: '5px', minHeight: '450px' }">
            <el-image class="expert-pic" :src="o.url" :fit="'fill'"></el-image>
            <div style="padding: 14px;">
              <el-divider><span class="area-title">{{ o.area }}</span></el-divider>
              <span class="area-description">{{ o.description }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-divider id="lawyer" class="divider-icon"><i class="el-icon-user"></i><span class="title">律师简介</span></el-divider>
    <div class="lawyer">
      <el-row class="lawyer-card" v-for="(l, index) in lawyerList" :key="index" type="flex">
        <el-col class="lawyer-pic">
          <el-card :body-style="{ padding: '5px', width: '340px', height: '450px' }">
            <el-image :src="l.photo" :fit="'fill'"></el-image>
          </el-card>
        </el-col>
        <el-col class="lawyer-introduction">
          <span class="lawyer-name">{{ l.name }}<el-divider content-position="left"><i class="el-icon-edit"></i></el-divider></span>
          <p>{{ l.introduction }}</p>
        </el-col>
      </el-row>
    </div>
    <el-divider id="contact" class="divider-icon"><i class="el-icon-notebook-1"></i><span class="title">联系我们</span></el-divider>
    <div class="contact-info">
      <el-card class="contact-card" :body-style="{ padding: '30px' }">
        <div class="info-item"><i class="el-icon-mobile-phone"></i>手机：<span>{{ contact.phone }}</span></div>
        <div class="info-item"><i class="el-icon-phone-outline"></i>座机：<span>{{ contact.tel }}</span></div>
        <div class="info-item"><i class="el-icon-message"></i>邮箱：<span>{{ contact.email }}</span></div>
        <div class="info-item"><i class="el-icon-location-information"></i>地址：<span>{{ contact.address }}</span></div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
  .home .block {
    margin: auto;
    text-align: center;
  }
  .home > .el-divider--horizontal {
    margin: 50px 0 30px 0;
  }
  .area-title {
    font-size: 22px;
    color: #303133;
  }
  .area-description {
    position: relative;
    top: 10px;
    font-size: 16px;
    line-height: 30px;
  }
  .expert-card {
    margin-bottom: 30px;
    width: 375px;
  }
  .lawyer-card {
    flex-wrap: wrap;
  }
  .lawyer-name {
    font-size: 22px;
    font-weight: bold;
  }
  .lawyer-name .el-icon-edit {
    font-size: 20px;
    font-weight: 400;
  }
  .lawyer-pic {
    width: 340px;
  }
  .lawyer-introduction {
    padding: 10px 30px;
    width: calc(100% - 340px);
    min-width: 320px;
  }
  .lawyer-introduction > p {
    font-size: 18px;
    line-height: 30px;
    text-indent: 36px;
  }
  .contact-info {
    margin-bottom: 30px;
  }
  .contact-info .info-item:not(:last-child) {
    margin-bottom: 20px;
  }
  .contact-info .info-item,
  .contact-info .info-item i,
  .contact-info .info-item span {
    font-size: 18px;
  }
</style>

<script>
export default {
  data () {
    return {
      picSrc (item) {
        return require('@/assets/firm_pic' + item + '.jpg')
      },
      expertIn: [{
        area: '婚姻家庭案件',
        description: '协议离婚、诉讼离婚、财产分割、抚养争议、遗产继承、涉外离婚、军婚离婚、鉴于离婚',
        url: require('@/assets/expert_pic1.png')
      }, {
        area: '刑事案件',
        description: '经济犯罪、无罪辩护、涉黑犯罪、职务犯罪、人身暴力犯罪、刑事会见、取保候审、假释、减刑、监外执行、被害人及其家属维权',
        url: require('@/assets/expert_pic2.png')
      }, {
        area: '民事纠纷',
        description: '借贷纠纷、欠款清收、租赁纠纷、房产纠纷、保险理赔、交通事故、劳动纠纷、建筑工程纠纷',
        url: require('@/assets/expert_pic3.png')
      }, {
        area: '企业法律顾问',
        description: '公司治理、股权设计、劳动用工、合同拟定、日常经营、知识产权、薪酬、财税、社保事务、企业并购',
        url: require('@/assets/expert_pic4.png')
      }],
      lawyerList: [{
        name: '肖勇',
        introduction: '肖勇律师对知识产权诉讼，专利代理申请及维权，工伤保险、劳动保障、交通纠纷处理很有经验，对《合同法》、《婚姻法》、《物权法》、《劳动法》、《专利法》、《商标法》有较为深刻的研究，能够结合案件的具体情况提供有针对性的解决方案，擅长：起草、修改、审查各类合同，防范合同法律风险；处理各类婚姻问题，处理公司无形资产如专利、商标等法律事务；制作包括企业劳动合同签订、劳动管理及规章制度制订、工资结构设计等一整套法律运作方案等。',
        photo: ''
      }],
      contact: {
        phone: '13888123456',
        tel: '0871-12345678',
        email: 'xxxxx@123.com',
        address: '昆明锦业律师事务所'
      }
    }
  }
}
</script>
