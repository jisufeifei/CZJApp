import { appManage } from "../../api/index";
const state = {};
const getters = {};
const actions = {
    getMenu(context,payload){
        return appManage.getMenu(payload).then(res=>{
            // console.log(res)
            return Promise.resolve({
                success: true,
                data: res.data.data
                });
            
        }).catch(rej=>{
            // console.log(rej)
            return Promise.resolve({
                success: false,
                error: rej
            });
        })
    },
    getData(contxt,payload){
        return appManage.getData(payload).then(res=>{
            // console.log(res)
            return Promise.resolve({
                success: true,
                data: res.data.data
                });
            
        }).catch(rej=>{
            // console.log(rej)
            return Promise.resolve({
                success: false,
                error: rej
            });
        })
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}