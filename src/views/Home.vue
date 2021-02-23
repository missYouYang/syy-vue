<template>
    <!--主页-->
    <div>
        <div style="padding: 5px;margin-left: 500px">
            <a-space :size="size">
                <a-card title="总人数" :bordered="true" :head-style="{color:'#e8e218'}" :body-style="{color:'red'}">
                    <p>1670</p>
                </a-card>
                <a-card title="在线人数" :bordered="true" :head-style="{color:'#e8e218'}" :body-style="{color:'red'}" >
                    <p>500</p>
                </a-card>
                <a-card title="会员人数" :bordered="true" :head-style="{color:'#e8e218'}" :body-style="{color:'red'}">
                    <p>800</p>
                </a-card>
            </a-space>
        </div>
        <!--统计图-->
        <div>
            <div id="myChart" :style="{width: '1500px', height: '500px'}"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "home",
        mounted() {
            this.drawLine();
        },
        data(){
            return{
                size: 'middle',
            }
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1400, 1432, 1520, 1633, 1670],
                        type: 'line',
                        smooth: true
                    }]
                });
            }
        }
    }

</script>

<style scoped>

</style>
