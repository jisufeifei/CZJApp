import * as types from '../mutationtypes'
import { commonManage } from "../../api/index.js"
const state = {
    getDomainConfigData: {
        loginLogo: '',
        tableIcon: '',
        tableTitle: ''
    }
};
const getters = {};
const actions = {
    getWebData(context, payload){
        return commonManage.getWebData(payload)
        .then(res => {
            context.commit(types.GET_DOMAIN_CONFIG_SUCCESS, res)
            return Promise.resolve({
                success: true,
                data: res
            })
        }).catch(rej => {
            context.commit(types.GET_DOMAIN_CONFIG_ERROR, rej)
            return Promise.resolve({
                success: false
            })
        })
    },
};
const mutations ={
    [types.GET_DOMAIN_CONFIG_SUCCESS](state, payload){
        if(payload){
            state.getDomainConfigData.loginLogo = payload.loginLogo
            state.getDomainConfigData.tableIcon = payload.tableIcon
            state.getDomainConfigData.tableTitle = payload.tableTitle
        }
    },
    [types.GET_DOMAIN_CONFIG_ERROR](state){
        state.getDomainConfigData = {
            loginLogo: "",
            tableIcon: "",
            tableTitle: "",
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
