<template>
    <view class="page-view">
        <view class="avator-top df-sb">
            <view>更换头像</view>
            <view class="df">
                <u-upload
                        :fileList="fileList1"
                        @afterRead="afterRead"
                        @delete="deletePic"
                        accept="image"
                        :deletable="false"
                        name="avator"
                        :maxCount="1"
                    >
                        <u-icon class="avator-icon" :name="avaUrl" ></u-icon>
                    </u-upload>
                    <i class="iconfont icon-xiangyou1 gray-color"></i>
            </view>
        </view>
        <view class="mt4">
            <u-cell-group :border="false">
                <u-cell title="性别">
                    <view slot="value" class="font-family gray-color">保密</view>
                    <i slot="right-icon" class="iconfont icon-xiangyou1 gray-color"></i>
                </u-cell>
                <u-cell title="手机号">
                    <view slot="value" class="font-family gray-color">手机号</view>
                    <i slot="right-icon" class="iconfont icon-xiangyou1 gray-color"></i>
                </u-cell>
                <u-cell title="出生日期">
                    <view slot="value" class="font-family gray-color">2020.04.01</view>
                    <i slot="right-icon" class="iconfont icon-xiangyou1 gray-color"></i>
                </u-cell>
                <u-cell title="工作时长">
                    <view slot="value" class="font-family gray-color">2年</view>
                    <i slot="right-icon" class="iconfont icon-xiangyou1 gray-color"></i>
                </u-cell>
            </u-cell-group>
        </view>
        <view class="mt10">
            <u-cell-group :border="false">
                <u-cell title="收款账户">
                    <i slot="right-icon" class="iconfont icon-xiangyou1"></i>
                </u-cell>
                <u-cell title="个人合约">
                    <i slot="right-icon" class="iconfont icon-xiangyou1"></i>
                </u-cell>
                <u-cell title="悬赏记录">
                    <i slot="right-icon" class="iconfont icon-xiangyou1"></i>
                </u-cell>
            </u-cell-group>
        </view>
        <view class="mt10">
            <u-cell-group :border="false">
                <u-cell title="擅长领域">
                    <view
                        slot="value"
                        class="font-family base-color"
                    >添加</view>
                </u-cell>
                <u-cell title="学历">
                    <view
                        slot="value"
                        class="font-family base-color"
                        @click="goEdu('add')"
                    >添加</view>
                </u-cell>
                <u-cell title="个人简介">
                    <i slot="right-icon" class="iconfont icon-xiangyou1"></i>
                </u-cell>
            </u-cell-group>
        </view>
        <view class="footer-btn">
            <u-button type="primary" :hairline="false">退出登录</u-button>
        </view>
    </view>
</template>
<style lang="scss" scoped>
    @import './index.scss';
    /deep/.u-icon__img{
        width: 30px !important;
        height: 30px !important;
    }
</style>
<script>
export default {
    name: 'modify-user',
    data() {
        return {
            fileList1: [],
            avaUrl: 'https://czjdev.workdodo.com/czj/privateFile/defaultlogo.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTA5NDM2MDY5OTg0ODA4OTYxIiwiaWF0IjoxNjQ5MjE3NjYwLCJleHAiOjE2NDk4MjI0NjB9.LKvNKsVCw3u3sWfMAzBPEqYe2S6mkxT-7aFWrL4l8j3lXegurh8Gra0Mf-ER1hYBtfxODeIKeuC8auV2Vu8dHw&authId=1509436069984808961&t=1649405460678'
        }
    },
    onLaunch(){},
    computed: {},
    methods: {
        afterRead(){},
        deletePic(){},
        // 跳转“添加学历”页面
        goEdu(type, index){
            uni.$u.route({
                type: 'to',
				url: `pages/education/index`,
                // params: {
                //     isAdd: type === 'add' ? null : index,
                // }
			})
        },
    }
}
</script>