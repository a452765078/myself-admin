<template>
  <div class="container" ref="containerRef">
    <el-row class="chart1">
      <el-col :span="18">
        <chart1></chart1>
      </el-col>
      <el-col :span="6">
        <chart3></chart3>
      </el-col>
    </el-row>
    <el-row class="chart2">
      <chart2></chart2>
    </el-row>
  </div>
  <button @click="handleTest">追加数据</button>
</template>
<script setup>
import chart1 from './components/chart1/index.vue'
import chart2 from './components/chart2/index.vue'
import chart3 from './components/chart3/index.vue'
import test from '../../views/test/index.vue'
// 以下几行为测试
import { createApp } from 'vue'
// const containerRef = ref(null)
const handleTest = () => {
  const instance = createApp(test).mount(document.createElement('div'))
  console.log('instance.$el', instance.$el)
  // containerRef.value.appendChild(instance.$el)
  document.body.appendChild(instance.$el)
}

console.log('chart1.$el =>', chart1)
</script>
<style lang="scss">
.container {
  width: 1200px;
  margin: 0 auto;
  .chart1 {
    height: 180px;
    background-color: #efefef;
  }
  .chart2 {
    height: 180px;
    background-color: #efefef;
  }
}
</style>
