<template>
    <view class="page-content content">
        <view class="header">
			<view class="user-info df-sb">
				<view class="header-avatar">
					<view class="avatar-box">
						<u-avatar size="70" :src="avatarSrc"></u-avatar>
						<view class="realName-status df">
							<view class="status-code">未实名</view>
							<i class="status-right iconfont icon-xiangyou1"></i>
						</view>
					</view>
					<view class="user-name hideWord">小赵</view>
				</view>
				<view class="header-tools df">
					<i class="setUp-tool tools iconfont icon-Setup" @click="goModify"></i>
					<i class="message-tool tools iconfont icon-xiaoxi"></i>
				</view>
			</view>
		</view>
		<view class="inConme-info">
			<view class="card-wrap">
				<view class="card-num df-sb">
					<view class="num-text base-color">0.00</view>
					<view class="icon-box">
						<i class="iconfont icon-qianbao warp-color"></i>
					</view>
				</view>
				<view class="card-text df-sb">
					<view class="">最近收入</view>
					<view class="">我的卡包</view>
				</view>
			</view>
			<u-divider class="small-divider"></u-divider>
			<view class="amount df-sb">
				<view class="df small-text">
					<view>累计收入：</view>
					<view class="base-color">0.00</view>
				</view>
				<view class="df small-text">
					<view>累计笔数：</view>
					<view class="base-color">0</view>
				</view>
				<view class="df small-text">
					详情
					<i class="iconfont icon-xiangyou1"></i>
				</view>
			</view>
		</view>
		<view class="task-box">
			<view class="task-title df-sb">
				<view class="df">
					<view class="my-task">我的任务</view>
					<view class="hire-share df">
						<view class="hire-status hire-bg base-color">
							<i class="iconfont icon-flag base-color"></i>
							招募
						</view>
						<view class="share-status share-bg share-color">
							分享任务
						</view>
					</view>
				</view>
				<view class="more-task">
					更多任务
					<i class="iconfont icon-xiangxia2"></i>
				</view>
			</view>
			<view class="task-info">
				<view class="task-content df-sb">
					<view class="content-name hideWord">
						<i class="iconfont icon-renwuguanli base-color"></i>
						任务名称aaaaaaaaaaaa
					</view>
					<view class="content-count">{{money}}</view>
				</view>
				<u-divider class="small-divider"></u-divider>
				<view class="reward-header df-sb">
					<view>当天悬赏</view>
					<view class="base-color">记录</view>
				</view>
				<u-scroll-list indicatorActiveColor="#FD8919">
					<view class="scroll-list reward-list">
						<view class="reward">
							<view class="reward-title df-sb">
								<view class="font333 reward-name hideWord">悬赏名称</view>
								<view class="red-color">+100.00元</view>
							</view>
							<view class="reward-time-status df-sb">
								<view class="time">倒计时：365天24小时60秒</view>
								<view class="stay-tag">待提交</view>
								<!-- <view class="check-tag">审核中</view>
								<view class="success-tag">已完成</view> -->
							</view>
						</view>
						<view class="reward"></view>
						<view class="reward"></view>
					</view>
				</u-scroll-list>
				<u-divider class="small-divider"></u-divider>
				<view class="group-type df">
					<view class="footer-type footer">
						<image class="footer-img" src="https://ossfile.wealthwiser.cn/material/img/type.png"></image>
						家电维修
					</view>
					<view class="footer-group ml14 footer">
						<image class="footer-img" src="https://ossfile.wealthwiser.cn/material/img/group.png"></image>
						分组1
					</view>
					<view class="footer-name ml14 footer">
						<image class="footer-img" src="https://ossfile.wealthwiser.cn/material/img/name.png"></image>
						组名1
					</view>
				</view>
			</view>
			<view class="no-task"></view>
		</view>
    </view>
</template>
<style lang="scss" scoped>
	@import './index.scss';
</style>
<script>
export default {
    data(){
        return {
			avatarSrc: 'https://czjdev.workdodo.com/czj/privateFile/defaultlogo.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0MzU1NTkxMDgyODE5NTg1IiwiaWF0IjoxNjQ4NzgzMjUyLCJleHAiOjE2NDkzODgwNTJ9.rF1rBrvRzflGYldJyQZxhDa5A5DR0VWpL6KA0RX9Q2h6AeSm9TARIrzF5FR4OHvVuOiLorvxhnT6rynrahgXww&authId=1484355591082819585'
		}
    },
    onLoad() {
            // this.getData();
		},
	computed: {
		money(){
			return this.toMoney('119999')
		},
	},
    methods: {
        getData(){
				this.$store.dispatch('getMenu',{page: 1}).then(res=>{
					// console.log(res)
				}).catch(err=>{
					// console.log(err)
				})
				// console.log((appManage.getMenu)(1))
				// (appManage.getMenu)(1).then((res) => {
				// 	console.log(res)
				// }).catch((err) =>{
				// 	console.log(err)
				// })
		},
		getUserInfo(){
				this.$store.dispatch('getData').then(res=>{
					// console.log(res)
				}).catch(err=>{
					// console.log(err)
				})
		},
		// 跳转到个人信息配置页面
		goModify(){
			uni.$u.route({
				url: 'pages/modifyUser/index'
			})
		},
    }
}
</script>