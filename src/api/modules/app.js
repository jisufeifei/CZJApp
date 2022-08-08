const http = uni.$u.http;
import { APIHOST } from "../config";
export default {
    getMenu(source){
        return (http.get(`${APIHOST}/app/cztask/page`, 
            source
        ))
    },
    getData(source){
        return (http.get(`${APIHOST}/app/userInfo`, 
            source
        ))
    }
}