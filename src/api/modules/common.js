const http = uni.$u.http;
import { APIHOST } from "../config";
export default {
    // 获取OEM平台信息
    getWebData(source){
        return (http.get(`${APIHOST}/sys/open/getDomainConfig`,
        // source
            {
                params: source
            }
        ))
    },
    // 获取验证码（公用：登录页）
    getCommonCode(source){
        return (http.get(`${APIHOST}/sys/open/sms/sendSms`,
            source
        ))
    }
}