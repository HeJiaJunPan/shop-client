import axios from 'axios';
import nprogress from 'nprogress'

import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

requests.interceptors.request.use(configs => {
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