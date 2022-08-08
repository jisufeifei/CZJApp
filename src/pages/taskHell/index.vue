<template>
    <view class="content">
        <scroll-list 
            ref="list" :option="option" @load="load" @refresh="refresh"
        >
            <view class="content-block header-recommend">
                <view class="block-title df">
                    <view class="title-icon"></view>
                    <view>为你推荐</view>
                </view>
                <view class="hot-pannel df">
                    <view class="hot-item">顾问</view>
                    <view class="hot-item">中介</view>
                    <view class="hot-item">市场</view>
                    <view class="hot-item">策划</view>
                    <view class="hot-item">其他销售</view>
                    <view class="hot-item">公关</view>
                </view>
            </view>
            <u-gap height="10" bgColor="#f8f8f8"></u-gap>
            <view class="content-block industry-type">
                <view class="block-title df">
                    <view class="title-icon"></view>
                    <view>行业分类</view>
                </view>
                <view class="swiper-block">
                    <swiper :indicator-dots="true" indicator-color="#e9e9e9" indicator-active-color="#FD8919">
                        <swiper-item class="swiper-line" v-for="(categoryGroup, index) in categoryList" :key="index">
                            <view class="swiper-item" v-for="(category, _index) in categoryGroup" :key="_index">
                                <image class="swiper-img" :src="category.image"></image>
                                {{category.name}}
                            </view>
                        </swiper-item>
                    </swiper>
                    <!-- <u-scroll-list indicatorActiveColor="#FD8919">
                        <view class="scroll-list">
                            <view class="swiper-line" v-for="(categoryGroup, index) in categoryList" :key="index">
                                <view class="swiper-item" v-for="(category, _index) in categoryGroup" :key="_index">
                                    <image class="swiper-img" :src="category.image"></image>
                                    {{category.name}}
                                </view>
                            </view>
                        </view>
                    </u-scroll-list> -->
                </view>
            </view>
            <u-gap height="10" bgColor="#f8f8f8"></u-gap>
            <view class="content-block">
                <view class="block-title df-sb">
                    <view class="df">
                        <view class="title-icon"></view>
                        <view>最新</view>
                    </view>
                    <view class="more-task">查看更多</view>
                </view>
                <view class="task-list">
                    <task-card v-for="(task, index) in taskLists" :key="index" :task="task"></task-card>
                </view>
            </view>
        </scroll-list>
        
    </view>
</template>
<style lang="scss" scoped>
    @import './index.scss';
</style>
<script>
import taskCard from '../../components/taskCard.vue';
import scrollList from '../../components/scroll-list/scroll-list.vue'
export default {
    name: 'task-hell',
    components: {
        "task-card": taskCard,
        "scroll-list": scrollList
    },
    data() {
        return {
            option: {
                size: 5,
                auto: true
            },
            categoryList: [
                [
                    {
                        id: "1",
                        leaf: false,
                        name: "销售 | 市场",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_1@2x.png`,
                        children: [
                            {
                                id: "13",
                                leaf: true,
                                name: "销售",
                                parentId: "1",
                            }
                        ]
                    },
                    {
                        id: "2",
                        leaf: false,
                        name: "技工 | 制造",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_2@2x.png`,
                        children: [
                            {
                                id: "20",
                                leaf: true,
                                name: "房屋装修",
                                parentId: "2",
                            }
                        ]
                    },
                    {
                        id: "3",
                        leaf: false,
                        name: "生活 | 教育",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_3@2x.png`,
                        children: [
                            {
                                id: "33",
                                leaf: true,
                                name: "保姆",
                                parentId: "3",
                            }
                        ]
                    },
                    {
                        id: "4",
                        leaf: false,
                        name: "人力 | 行政",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_4@2x.png`,
                        children: [
                            {
                                id: "45",
                                leaf: true,
                                name: "后勤",
                                parentId: "4",
                            }
                        ]
                    },
                    
                ],
                [
                    {
                        id: "5",
                        leaf: false,
                        name: "采购 | 客服",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_5@2x.png`,
                        children: [
                            {
                                id: "55",
                                leaf: true,
                                name: "客服",
                                parentId: "5",
                            }
                        ]
                    },
                    {
                        id: "6",
                        leaf: false,
                        name: "餐饮 | 零售",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_6@2x.png`,
                        children: [
                            {
                                id: "59",
                                leaf: true,
                                name: "收银",
                                parentId: "6",
                            }
                        ]
                    },
                    {
                        id: "7",
                        leaf: false,
                        name: "财会 | 金融",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_7@2x.png`,
                        children: [
                            {
                                id: "66",
                                leaf: true,
                                name: "会计",
                                parentId: "7",
                            }
                        ]
                    },
                    {
                        id: "8",
                        leaf: false,
                        name: "法律 | 出版",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_8@2x.png`,
                        children: [
                            {
                                id: "79",
                                leaf: true,
                                name: "律师",
                                parentId: "8",
                            }
                        ]
                    },
                    
                ],
                [
                    {
                        id: "9",
                        leaf: false,
                        name: "广告 | 设计",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_9@2x.png`,
                        children: [
                            {
                                id: "88",
                                leaf: true,
                                name: "后勤",
                                parentId: "9",
                            }
                        ]
                    },
                    {
                        id: "10",
                        leaf: false,
                        name: "影视 | 表演",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_10@2x.png`,
                        children: [
                            {
                                id: "95",
                                leaf: true,
                                name: "摄影",
                                parentId: "10",
                            }
                        ]
                    },
                    {
                        id: "11",
                        leaf: false,
                        name: "通信 | 开发",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_11@2x.png`,
                        children: [
                            {
                                id: "108",
                                leaf: true,
                                name: "开发",
                                parentId: "11",
                            }
                        ]
                    },
                    {
                        id: "12",
                        leaf: false,
                        name: "服装 | 化工",
                        parentId: "0",
                        image: `https://ossfile.wealthwiser.cn/material/icons/icon_12@2x.png`,
                        children: [
                            {
                                id: "118",
                                leaf: true,
                                name: "剪裁",
                                parentId: "12",
                            }
                        ]
                    },
                ]
            ],
            list: [],
            taskLists: [
                {
                    id: '1',
                    recruitTitle: '任务1',
                    daySalary: '5555',
                    taskStatus: 0,
                    secondIndustryName: '顾问',
                    startDate: '2022-02-20',
                    closingType: 2,
                    companyName: '财智君***企业'
                },
                {
                    id: '2',
                    recruitTitle: '任务2',
                    daySalary: '123456',
                    taskStatus: 1,
                    secondIndustryName: '顾问',
                    startDate: '2022-02-20',
                    closingType: 2,
                    companyName: '财智君***企业'
                },
                {
                    id: '3',
                    recruitTitle: '任务3',
                    daySalary: '123456',
                    taskStatus: 1,
                    secondIndustryName: '顾问',
                    startDate: '2022-02-20',
                    closingType: 2,
                    companyName: '财智君***企业'
                },
                {
                    id: '4',
                    recruitTitle: '任务4',
                    daySalary: '123456',
                    taskStatus: 1,
                    secondIndustryName: '顾问',
                    startDate: '2022-02-20',
                    closingType: 2,
                    companyName: '财智君***企业'
                },
                {
                    id: '5',
                    recruitTitle: '任务5',
                    daySalary: '123456',
                    taskStatus: 1,
                    secondIndustryName: '顾问',
                    startDate: '2022-02-20',
                    closingType: 2,
                    companyName: '财智君***企业'
                },
            ]
        }
    },
    onLoad() {
		console.log('这是“任务大厅”页面');
        this._freshing = false;
            setTimeout(() => {
                this.triggered = true;
            }, 1000)
	},
    methods: {
        // 加载数据
        load(paging) {
            setTimeout(() => {
                let list = [];
                for (var i = 0; i < paging.size; i++) {
                    list.push(i);
                }
                this.list = [...this.list, ...list];
                // 加载成功  参数对象{list: 当前列表,total: 数据总长度(后端查询的total)}
                this.$refs.list.loadSuccess({ list: this.list, total: 50 });
                // 加载失败
                // this.$refs.list.loadFail()
            }, this.$u.random(100, 1000));
        },
        // 刷新刷剧
        refresh(paging) {
            setTimeout(() => {
                let list = [];
                for (var i = 0; i < paging.size; i++) {
                    list.push(i);
                }
                this.list = list;
                // 刷新成功  参数对象{list: 当前列表,total: 数据总长度(后端查询的total)}
                this.$refs.list.refreshSuccess({ list: this.list, total: 50 });
                // 刷新失败
                // this.$refs.list.refreshFail()
            }, this.$u.random(100, 1000));
        }
    },
    // onPullDownRefresh() {
	// 	console.log('refresh');
	// 	setTimeout(function () {
	// 		uni.stopPullDownRefresh();
	// 	}, 1000);
	// }
}
</script>