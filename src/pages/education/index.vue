<template>
    <view class="page-view">
        <u-cell-group :border="false">
            <u-cell title="">
                <view slot="label" class="df">
                    <view class="cell-left-title">毕业学校</view>
                    <!-- <view > -->
                        <u--input
                            placeholder="请填写毕业学校"
                            border="surround"
                            v-model="school"
                        ></u--input>
                    <!-- </view> -->
                </view>
            </u-cell>
            <u-cell title="">
                <view slot="label" class="df">
                    <view class="cell-left-title">专业</view>
                    <!-- <view > -->
                        <u--input
                            placeholder="请填写专业"
                            border="surround"
                            v-model="specialty"
                        ></u--input>
                    <!-- </view> -->
                </view>
            </u-cell>
            <u-cell title="">
                <view slot="label" class="df-sb">
                    <text class="cell-left-title" space="nbsp" :decode="true">学历&nbsp;&nbsp;&nbsp;&nbsp;</text>
                    <view class="df cell-content-right" @click="selectDegree">
                        <u--input
                            disabledColor="#fff"
                            placeholder="请选择"
                            border="surround"
                            v-model="degree"
                            disabled
                        ></u--input>
                        <i class="iconfont icon-xiangyou1 gray-color"></i>
                    </view>
                </view>
            </u-cell>
            <u-cell title="">
                <view slot="label" class="df">
                    <view class="cell-left-title">毕业时间</view>
                    <view class="df cell-content-right" @click="selectTime">
                        <u--input
                            disabledColor="#fff"
                            placeholder="请选择"
                            border="surround"
                            v-model="graduationDate"
                            disabled
                        ></u--input>
                        <i class="iconfont icon-xiangyou1 gray-color"></i>
                    </view>
                </view>
            </u-cell>
        </u-cell-group>
        <view class="footer-btn">
            <u-button type="primary" :disabled="disBtn" :hairline="false" @click="saveEdu">保存</u-button>
        </view>
        <u-picker
                confirmText="确认" 
                @cancel="closeAll" 
                :closeOnClickOverlay="true" 
                @confirm="confirmDegree" 
                :show="degreeShow" 
                :columns="columns"
        ></u-picker>
        <u-datetime-picker
                confirmText="确认" 
                :show="graduationShow"
                v-model="datePicker"
                mode="date"
                :minDate="minDate"
                :maxDate="maxDate"
                :closeOnClickOverlay="true"
                @cancel="closeAll"
                @confirm="graduationConfirm"
        ></u-datetime-picker>
        <u-toast ref="uToast"></u-toast>
    </view>
</template>
<style lang="scss" scoped>
    @import "./index.scss";
    /deep/.u-toolbar__wrapper__confirm{
        span{
            color: #FD8919 !important;
        }
    }
</style>
<script>
export default {
    name: 'education',
    data(){
        return {
            school: '',
            specialty: '',
            degreeShow: false,
            graduationShow: false,
            datePicker: Number(new Date()),
            maxDate: Number(new Date().getTime()),
            minDate: Number(new Date('1960-01-01')),
            degree: '',
            graduationDate: '',
            columns: [
                ['专科以下','专科','本科','硕士','博士','博士以上']
            ],
        }
    },
    onLoad: function(option){
        console.log(option)
    },
    computed: {
        disBtn() {
            if(this.school == '' || this.specialty == '' || this.degree =='' || this.graduationDate == '') return true
            return false
        },
    },
    methods: {
        selectDegree(){
            this.degreeShow = true;
        },
        selectTime(){
            this.graduationShow = true;
        },
        confirmDegree(e){
            this.degreeShow = false;
            this.degree = e.value[0]
        },
        graduationConfirm(e){
            this.graduationDate = uni.$u.timeFormat(e.value, 'yyyy-mm-dd');
            this.graduationShow = false;
        },
        closeAll(){
            this.graduationShow = false;
            this.degreeShow = false;
        },
        saveEdu(){
            const reg = /^[\u4e00-\u9fa5]+$/;
            if(!reg.test(this.school)) return this.$refs.uToast.show({message: '毕业学校为中文！',type: 'error',icon: false,});
            if(!reg.test(this.specialty)) return this.$refs.uToast.show({message: '专业名称中文！',type: 'error',icon: false,});
        },
    }
}
</script>