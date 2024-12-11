<script setup lang="ts">
import type { EChartsOption, EChartsType } from 'echarts/types/dist/shared'
import type { VNodeRef } from 'vue'
import { reactiveComputed, useAsyncState } from '@vueuse/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { init, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { computed, shallowRef, watch } from 'vue'

export interface CallData {
  title: string
  timestampByStatus: number[]
}

export interface TimelineData {
  title: string
  calls: CallData[]
}

const p = defineProps<{
  getData: () => Promise<TimelineData>
}>()

use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  TooltipComponent,
])

const PADDING_X = '40px'
const PADDING_Y = '40px'
const AXIS_LINE = {
  show: true,
  lineStyle: {
    color: '#ccc',
  },
}
const STATUSES = ['Call', 'Execution', 'Resolve']

const dataFetcher = useAsyncState(p.getData, { title: '', calls: [] })
const data = reactiveComputed(() => dataFetcher.state.value)

const options = computed<EChartsOption>(() => ({
  title: {
    text: data.title,
  },
  grid: {
    top: PADDING_Y,
    right: PADDING_X,
    bottom: PADDING_Y,
    left: '80px',
  },
  tooltip: {
    trigger: 'item',
    // formatter: (params) => {
    //   return `${params.name}: ${params.value[0]} ms`
    // },
  },
  xAxis: {
    type: 'value',
    axisLine: AXIS_LINE,
    axisLabel: {
      formatter: '{value} ms',
    },
  },
  yAxis: {
    type: 'category',
    data: STATUSES,
    axisTick: {
      alignWithLabel: true,
    },
    axisLine: AXIS_LINE,
    axisLabel: {
      color: '#fff',
    },
  },
  series: data.calls.map(call => ({
    type: 'line',
    symbolSize: 8,
    data: call.timestampByStatus.map((timestamp, status) => [timestamp, status]), // Convert to array of arrays
  })),
}))

const chartRef = shallowRef<VNodeRef | null>(null)
const instance = shallowRef<EChartsType | null>(null)

watch(chartRef, () => {
  if (!chartRef.value)
    return

  instance.value = init(chartRef.value, 'dark')
}, { immediate: true })

watch(options, () => {
  instance.value?.setOption(options.value)
})
</script>

<template>
  <div class="docs-tl">
    <div ref="chartRef" class="docs-tl__chart" />
    <button
      class="docs-tl__btn"
      :disabled="dataFetcher.isLoading.value"
      @click="dataFetcher.execute()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20" />
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
$border-radius: 8px;

.docs-tl {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #0008;
  border-radius: $border-radius;
  margin: 12px 0 ;
  // overflow: hidden;
  display: grid;
  grid-template-rows: max-content 1fr;

  &__chart {
    position: absolute;
    width: 100%;
    height: 100%;
    & canvas {
      border-radius: $border-radius;
    }
  }
  &__btn{
    display: flex;
    position: absolute;
    right: 0;
    margin: 4px;
    padding: 4px;
    border-radius: 50%;

    &:hover:not(:disabled) {
      background-color: #fff2;
    }
    &:disabled {
      opacity: .6;
    }
  }
}
</style>
