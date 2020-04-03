import {del, get, post, patch, put} from "./index";
import setting from '../../../config/setting'

//添加app
export function app_add_post(params) {
    return post(setting.airtest + "/apps", params)
}

