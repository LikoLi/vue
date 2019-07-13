<template>
  <div class="home">
    <div class="cards">
      <el-card class="about-me" shadow="hover">
        <div>
          <img src="https://www.lgstatic.com/i/image/M00/39/DF/Cgp3O1dn7SCAS2lRAAC7LNQtfsY170.jpg" width="200px" class="image">
          <p>Java·深圳</p>
          <p>吃饭睡觉谈恋爱</p>
        </div>
      </el-card>
      <el-card class="skill" shadow="hover">
        <el-tag v-for="tag in tags" :key="tag.name" hit="false" :type="info" :size="tag.size">
          {{tag.name}}
        </el-tag>
      </el-card>
    </div>

    <div class="content">
      <el-collapse v-model="activeCollapse" accordion>
        <el-collapse-item v-for="article in articles" :title="article.title" :name="article.id" :key="article.id">
          <div>{{article.desc}}</div>
          <el-button type="text" class="show-detail">查看详情</el-button>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      articles: [{
        id: '1',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }, {
        id: '2',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }, {
        id: '3',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }, {
        id: '4',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }, {
        id: '5',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }, {
        id: '6',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }, {
        id: '7',
        title: '游烨是猪, 哈哈哈哈哈！！！',
        desc: '游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！游烨是猪, 哈哈哈哈哈！！！'
      }],
      tags: [{
        name: 'Java',
        size: '-'
      }, {
        name: 'Vue',
        size: 'small'
      }, {
        name: 'DevOps',
        size: 'mini'
      }, {
        name: 'Spring-Boot',
        size: 'medium'
      }, {
        name: '金融',
        size: 'medium'
      }]
    }
  }
}
</script>

<style>
  .home {
    width: 1200px;
    margin: 20px auto;
  }

  .cards {
    width: 20%;
    float: left;
  }

  .el-card {
    margin-bottom: 10px;
  }

  .el-tag {
    margin: 2px 2px;
  }

  .content {
    width: 78%;
    float: right;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .about-me {
    text-align: center;
  }
  .show-detail {
    float: right;
    margin: 5px 30px;
  }
</style>
