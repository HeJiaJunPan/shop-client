import {getCode, login, register} from '@/api';
import {setToken} from '@/utils/tokenUtil';

export default {
    namespaced: true,
    state: {
        code: '',
        token: '',
        userInfo: {}
    },
    mutations: {
        getCode(state, data) {
            state.code = data
        },
        userLogin(state, data) {
            state.token = data
        }
    },
    actions: {
        async getCode(context, data) {
            let result = await getCode(data)
            if (result.code === 200) {
                //save code
                context.commit('getCode', result.data)
                return Promise.resolve('ok')
            } else {
                return Promise.reject(new Error('验证码获取失败！'))
            }
        },
        async userRegister(context, user) {
            let result = await register(user)
            if (result.code === 200) {
                return Promise.resolve('ok')
            } else {
                return Promise.reject(new Error('注册失败，请重新注册！'))
            }
        },
        async userLogin(context, {phone, password}) {
            let result = await login(phone, password)
            if (result.code === 200) {
                context.commit('userLogin', result.data.token)
                setToken(result.data.token)
                return Promise.resolve('ok')
            } else {
                return Promise.reject(new Error('登录失败，请重试！'))
            }
        }
    },
    getters: {}
}