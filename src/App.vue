<script>
	export default {
		onLaunch: function() {
			// this.getUserInfo()
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		methods: {
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

<style lang="scss">
	// @import "uview-ui/index.scss";
	@import "./common.scss";
	@import "./custom.scss";
	@import "./color.scss";
	@import "./static/iconfont/iconfont.css";
	.cell-hover-class {
        background-color: #fff !important;
    }
</style>
