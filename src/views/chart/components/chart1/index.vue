<template>
  <div id="chart1" ref="chart1Ref"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
// 基于准备好的dom，初始化echarts实例
const chart1Ref = ref(null)
onMounted(() => {
  console.log(chart1Ref)
  const myChart = echarts.init(chart1Ref.value, 'dark')
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})
</script>
<style lang="scss">
#chart1 {
  width: 100%;
  height: 100%;
}
</style>
