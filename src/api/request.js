import axios from 'axios';
import nprogress from 'nprogress'
import {getUUID} from '@/utils/userToken'

import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

requests.interceptors.request.use(configs => {
    // 为游客添加临时token
    configs.headers.userTempId = getUUID()
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