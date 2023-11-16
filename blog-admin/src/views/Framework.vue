<template>
    <div class="layout">
      <el-container >
        <el-header class="header">Header</el-header>
        <el-container class="container">
          <el-aside  width='200px' class="left-aside">
            <div>
              <el-button class="post-btn">发布</el-button>
            </div>
            <div class="menu-panel">
              <ul>
                <li v-for="(item, index) in menuList" :key="index">
                  <span :class="['iconfont',menu.icon]"></span>
                  <span>{{ item.title }}</span>
                  <ul>
                      <li v-for="(subItem, subIndex) in item.children" :key="subIndex">
                        <span>{{ subItem.title }}</span>
                      </li>
                  </ul>
                </li>
              </ul>
            </div>
          </el-aside>
          <el-main class="right-main">Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const menuList = ref([
{
  title: '博客',
  icon: 'icon-content',
  open: true,
  children: [
    {
      title: '博客管理', 
      path: '/blog/list'
    },
    {
      title: '分类管理',
      path: '/blog/category'
    },

  ],
},
{
  title: '专题',
  icon: 'icon-topic',
  open: true,
  children: [
  {
    title: '专题管理',
    path: '/topic/list'}
  ]
},
{
  title: '设置',
  icon: 'icon-setting',
  open: true,
  children: [
    {
      title: '个人信息设置',
      path: '/setting/my'
    },
    {
      title: '博客成员',
      path: '/setting/member'
    },
    {
      title: '系统设置',
      path: '/setting/system'
    },
  ]
},
{
  title: '回收站',
  icon: 'icon-recycle',
  open: true,
  children: [
    {
      title: '回收站',
      path: '/recycle/list'
    }
  ]
}
])

</script>

  
<style lang="scss">
.layout {
  .header{
    border-bottom: 1px solid #ddd;
  }
  .container{ 
    padding-top: 10px;
    background: #f0f6f7;
    height: calc(100vh - 60px);

    .left-aside{
      padding: 0px 15px;
      width: 250px;
      .post-btn{
         background-color: orange;
         color: #fff;
         height: 40px;
         width: 100%;
      }
      .menu-panel{
        ul, li{
          list-style: none;
          padding: 0;
          margin: 0;
        }
      }
    }
    .right-main{
      background: #fff;
    }
  }
}
</style>
  