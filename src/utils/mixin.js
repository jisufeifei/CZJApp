export default {
    install(Vue){
        Vue.mixin({
            data(){
                return {}
            },
            onLaunch() {
                // #ifdef H5
                let keyword = window.document.location.host
                            if(keyword.includes('localhost')){
                                keyword = 'test-customer.workdodo.com'
                            }
                            this.$store.dispatch('getWebData',{
                                domainUrl: keyword
                            }).then(res => {
                    var link = document.querySelector("link[rel*='icon']") || document.createElement('link')
                    link.type = 'image/x-icon'
                    link.rel = 'shortcut icon'
                                link.href = this.$store.state.common.getDomainConfigData.tableIcon;
                                document.getElementsByTagName('head')[0].appendChild(link);
                    document.title = this.$store.state.common.getDomainConfigData.tableTitle
                            }).catch(error => {
                                // document.title = ''
                            })
                // #endif
            },
            methods: {
                toMoney(val) {
                    if (!val) return "0.00";
                    val = parseFloat(val).toFixed(2);
                    return (
                        val &&
                        (val.toString().indexOf(".") != -1 ?
                        val.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
                            return $1 + ",";
                        }) :
                        val.toString().replace(/(\d)(?=(\d{3}))/g, function ($0, $1) {
                            return $1 + ",";
                        }))
                    )
                },
            }
        })
    }
}
