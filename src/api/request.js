import axios from 'axios';
import nprogress from 'nprogress'

import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})

requests.interceptors.request.use(configs => {
    nprogress.start()
    return configs
})

requests.interceptors.response.use(data => {
    nprogress.done()
    return data
}, error => {
    nprogress.done()
    return error
})

export default requests;