import axios from 'axios';
import nprogress from 'nprogress'
import {getUUID} from '@/utils/userToken'
import store from '@/store'

import 'nprogress/nprogress.css'
import {getToken} from "@/utils/tokenUtil";
const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

requests.interceptors.request.use(configs => {
    // 为游客添加临时token
    configs.headers.userTempId = getUUID()
    if (store.state.user.token) {
        configs.headers.token = store.state.user.token
    }

    nprogress.start()
    return configs
})

requests.interceptors.response.use(response => {
    nprogress.done()
    return response.data
}, error => {
    nprogress.done()
    return error
})

export default requests;