<template>
	<view class="content">
		<u-button type="primary"  text="确定"></u-button>
	</view>
</template>

<script>
// import { getMenu } from '../../api/modules/app'
// import { getMenu,getData,appManage } from '../../api/index.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getData();
			this.getUserInfo()
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
			// getData(){
			// 	getMenu({ custom: { auth: true }}).then((res) => {
			// 		console.log(res)
			// 	}).catch((err) =>{
			// 		console.log(err)
			// 	})
				// console.log(appManage)
				// console.log(this.$store.dispatch('app'))
				// getMenu({page: 1,limit: 10}).then(res=>{
				// 	cons.log(res)
				// }).catch(error=>{
				// 	console.log(error)
				// })
			// }
			// async getData(){
			// 	const {data , success}= await getMenu({ custom: { auth: true }})
			// 	console.log(data)
			// 	console.log(success)
			// },
			getUserInfo(){
				this.$store.dispatch('getData').then(res=>{
					// console.log(res)
				}).catch(err=>{
					// console.log(err)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
