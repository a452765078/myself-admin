<template>
  <div id="chart2" ref="targetRef"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getChartSheet } from '@/api/chart'
import { TableSheet } from '@antv/s2'
const sheetData = ref([])
const targetRef = ref([])
const getChartSheetData = async (id) => {
  const res = await getChartSheet(id)
  sheetData.value = res
  console.log('res', res)
}

onMounted(async () => {
  await getChartSheetData()
  let s2 = null
  const s2DataCfg = {
    fields: {
      columns: [
        'province',
        'city',
        'coverage',
        'receivable',
        'actual',
        'balance'
      ]
    },
    data: sheetData.value
  }
  const s2Options = {
    width: targetRef.value.clientWidth,
    height: targetRef.value.clientHeight,
    showSeriesNumber: true,
    // 条件渲染
    conditions: {
      background: [
        {
          field: 'balance',
          mapping(fieldValue) {
            return {
              fill: fieldValue > 0 ? '#f3fff3' : '#ffe7e7'
            }
          }
        },
        {
          field: 'actual',
          mapping(fieldValue) {
            return {
              fill: fieldValue > 10 ? '#cccccc' : '#ffe7e7'
            }
          }
        }
      ]
    }
  }
  console.log(s2DataCfg)
  // 生成S2实例
  s2 = new TableSheet(targetRef.value, s2DataCfg, s2Options)
  // 渲染视图
  s2.render(true)
})
</script>
<style lang="scss">
#chart2 {
  width: 100%;
  height: 100%;
}
</style>
