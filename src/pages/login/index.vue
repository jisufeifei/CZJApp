<template>
    <view>
        <view class="page-content login-page">
            <u--image class="login-app-logo" width="270px" height="270px" mode="widthFix" :src="loginLogo"></u--image>
            <view class="input-box">
                <view class="bottom-line" style="margin-top: 20px">
                    <u-input border="bottom" type="number" v-model="phoneNum" placeholder="请输入手机号" clearable maxlength="11"></u-input>
                </view>
                <view class="bottom-line" style="margin-top: 20px">
                    <u-input border="bottom" class="code-input" v-model="codeNum" placeholder="请输入验证码" type="number" clearable maxlength="4">
                        <template slot="suffix">
                            <u-code ref="uCode" @change="codeChange" seconds="60" @end="canGetCode" startText="获取验证码" endText="重新获取" changeText="x秒后重新获取"></u-code>
                            
                            <!-- #ifndef MP-WEIXIN -->
                            <u-button @tap="getCode" color="#FD8919" plain class="custom-style" :text="tips" type="primary" size="small" :disabled="isGetCode"></u-button>
                            <!-- #endif -->
                            <!-- #ifdef MP-WEIXIN -->
                            <u-button @tap="getCode" type="default" plain :text="tips" size="small" :disabled="isGetCode"></u-button>
                            <!-- #endif -->
                        </template>
                    </u-input>
                </view>
            </view>
            <view class="submint-btn">
                <u-button  text="登录" color="#FD8919" :disabled="loginDis"></u-button>
            </view>
            <view class="private-pannel">
                <u-radio-group>
                    <u-radio size="16px" activeColor="#FD8919"></u-radio> <view class="private-text">我已阅读并确认同意<view class="base-color" @click="goPrivacy">《隐私政策》</view>和<view class="base-color" @click="goUserAgreement">《用户注册协议》</view></view>
                </u-radio-group>
                
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data(){
        return {
            tips: '',
            value: '',
            isGetCode: false,
            phoneNum: '',
            codeNum: '',
        }
    },
    onLoad(){
        console.log("登录页")
    },
    computed: {
        loginDis(){
            if(this.codeNum === '' || this.phoneNum === ''){
                return true
            }
            return false
        },
        loginLogo: function(){
            return this.$store.state.common.getDomainConfigData.loginLogo
        }
    },
    methods: {
        codeChange(text) {
            this.tips = text;
        },
        getCode() {
            if(this.$refs.uCode.canGetCode){
                uni.showLoading({
                    title: '正在获取验证码'
                });
                this.$store.dispatch('')
                setTimeout(() => {
                    uni.hideLoading();
                    this.isGetCode = true;
                    uni.$u.toast('验证码已发送')
                    this.$refs.uCode.start();
                }, 3000);
            }else{
                this.isGetCode = true
            }
        },
        canGetCode() {
            this.isGetCode = false
        },
        // 跳转隐私政策页面
        goPrivacy(){
            uni.$u.route('/pages/policyPrivacy/index', {});
        },
        // 跳转用户注册协议
        goUserAgreement(){
            uni.$u.route('/pages/PolicyRegiste/index', {});
        },
    }
}
</script>
<style lang="scss" scoped>
    @import "../../common.scss";
    @import "./index.scss";
</style>