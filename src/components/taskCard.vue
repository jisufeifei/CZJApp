<template>
    <view class="card">
        <view class="task-card">
            <view class="header df-sb fb">
                <view class="df header-title fb">
                    <view class="task-title hideWord">{{task.recruitTitle}}</view>
                    <view class="success-tag task-tag">{{statusName}}</view>
                </view>
                <view class="task-price">
                    {{daySalary}}{{closingTypeText}}
                </view>
            </view>
            <view class="task-content df-sb fb">
                <view class="task-category category-tag">
                    顾问{{task.secondIndustryName}}
                </view>
                <view class="task-date">
                    {{task.startDate}}
                </view>
            </view>
            <view class="task-company df">
                <i class="iconfont icon-gongsi"></i>
                <view>
                    {{task.companyName}}
                </view>
            </view>
        </view>
        <u-line></u-line>
    </view>
</template>
<style lang="scss" scoped>
.card{
    .task-card{
        padding: 15px;
        .header{
            height: 40px;
        }
        .task-title{
            font-family: PingFangSC-Medium;
            font-size: 20px;
            max-width: 150px;
            color: #000;
        }
        .task-price{
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #fd8919;
        }
        .task-date{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666;
            text-align: right !important;
        }
        .task-content{
            margin: 20px 0;
        }
        .task-company{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666;
            vertical-align: middle;
            line-height: 22px;
            .iconfont{
                font-size: 18px;
                margin-right: 6px;
            }
        }
    }
}
</style>
<script>
export default {
    name: 'task-card',
    data(){
        return {}
    },
    props: ['task'],
    computed: {
        statusName() {
            return '进行中'
        },
        daySalary(){
            return this.toMoney(this.task.daySalary)
        },
        closingTypeText(){
            if(this.task.closingType === 1){
                return '元/日'
            }
            if(this.task.closingType === 2){
                return '元/月'
            }
            if(this.task.closingType === 3){
                return '元'
            }
            return '元'
        },
    },
    options: {
        // 微信小程序中 options 选项
        multipleSlots: true, //  在组件定义时的选项中启动多slot支持，默认启用
        styleIsolation: "isolated",  //  启动样式隔离。当使用页面自定义组件，希望父组件影响子组件样式时可能需要配置。具体配置选项参见：微信小程序自定义组件的样式
        addGlobalClass: true, //  表示页面样式将影响到自定义组件，但自定义组件中指定的样式不会影响页面。这个选项等价于设置 styleIsolation: apply-shared
        virtualHost: true,  //  将自定义节点设置成虚拟的，更加接近Vue组件的表现。我们不希望自定义组件的这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定
    },
    methods: {}
}
</script>