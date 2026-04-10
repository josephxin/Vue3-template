<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <!-- 统计卡片 -->
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon user-icon">
              <el-icon><User /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">8,846</div>
              <div class="stat-label">用户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon order-icon">
              <el-icon><ShoppingCart /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">12,356</div>
              <div class="stat-label">订单数量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon revenue-icon">
              <el-icon><Money /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">¥ 256,890</div>
              <div class="stat-label">总收入</div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon growth-icon">
              <el-icon><TrendCharts /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">+12.5%</div>
              <div class="stat-label">增长率</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表区域 -->
    <el-row :gutter="20" class="mt-20">
      <el-col :xs="24" :lg="16">
        <el-card>
          <template #header>
            <span>访问量趋势</span>
          </template>
          <div ref="chart1" style="height: 300px;"></div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :lg="8">
        <el-card>
          <template #header>
            <span>用户分布</span>
          </template>
          <div ref="chart2" style="height: 300px;"></div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 表格区域 -->
    <el-row :gutter="20" class="mt-20">
      <el-col :span="24">
        <el-card>
          <template #header>
            <span>最新订单</span>
            <el-button type="primary" size="small" class="float-right">查看更多</el-button>
          </template>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="订单ID" width="100" />
            <el-table-column prop="customer" label="客户名称" />
            <el-table-column prop="amount" label="金额" width="120" />
            <el-table-column prop="status" label="状态" width="100">
              <template #default="{ row }">
                <el-tag :type="getStatusType(row.status)">{{ row.status }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="180" />
            <el-table-column label="操作" width="120">
              <template #default>
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import {
  User,
  ShoppingCart,
  Money,
  TrendCharts
} from '@element-plus/icons-vue'

const chart1 = ref<HTMLElement>()
const chart2 = ref<HTMLElement>()

const tableData = ref([
  {
    id: '10001',
    customer: '张三',
    amount: '¥ 1,200.00',
    status: '已完成',
    createTime: '2024-01-15 10:30:00'
  },
  {
    id: '10002',
    customer: '李四',
    amount: '¥ 800.00',
    status: '进行中',
    createTime: '2024-01-15 09:15:00'
  },
  {
    id: '10003',
    customer: '王五',
    amount: '¥ 2,500.00',
    status: '待支付',
    createTime: '2024-01-14 16:45:00'
  }
])

const getStatusType = (status: string) => {
  const statusMap: Record<string, string> = {
    '已完成': 'success',
    '进行中': 'warning',
    '待支付': 'danger'
  }
  return statusMap[status] || 'info'
}

onMounted(() => {
  if (chart1.value) {
    const myChart1 = echarts.init(chart1.value)
    myChart1.setOption({
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '访问量',
          type: 'line',
          data: [120, 200, 150, 80, 70, 110, 130],
          smooth: true
        }
      ]
    })
  }

  if (chart2.value) {
    const myChart2 = echarts.init(chart2.value)
    myChart2.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center'
      },
      series: [
        {
          name: '用户分布',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '北京' },
            { value: 735, name: '上海' },
            { value: 580, name: '广州' },
            { value: 484, name: '深圳' },
            { value: 300, name: '其他' }
          ]
        }
      ]
    })
  }
})
</script>

<style scoped lang="scss">
.dashboard-container {
  padding: 0;
}

.stat-card {
  margin-bottom: 20px;
  
  .stat-content {
    display: flex;
    align-items: center;
    
    .stat-icon {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      
      .el-icon {
        font-size: 28px;
        color: #fff;
      }
      
      &.user-icon {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      
      &.order-icon {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }
      
      &.revenue-icon {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }
      
      &.growth-icon {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }
    }
    
    .stat-info {
      flex: 1;
      
      .stat-value {
        font-size: 24px;
        font-weight: bold;
        color: #303133;
        margin-bottom: 4px;
      }
      
      .stat-label {
        font-size: 14px;
        color: #909399;
      }
    }
  }
}

.mt-20 {
  margin-top: 20px;
}

.float-right {
  float: right;
}
</style>