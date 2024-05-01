import {getCode, getUserInfo, login, logout, register} from '@/api';
import {getToken, removeToken, setToken} from '@/utils/tokenUtil';

export default {
    namespaced: true,
    state: {
        code: '',
        token: getToken(),
        userInfo: {}
    },
    mutations: {
        getCode(state, data) {
            state.code = data
        },
        userLogin(state, data) {
            state.token = data
        },
        getUserInfo(state, data) {
            state.userInfo = data
        },
        clear(state) {
            state.token = ''
            state.userInfo = {}
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
        },
        async getUserInfo(context) {
            let result = await getUserInfo()
            if (result.code === 200) {
                context.commit('getUserInfo', result.data)
                return Provmise.resolve('ok')
            } else {
                return Promise.reject(new Error('获取用户信息失败'))
            }
        },
        async logout(context) {
            let result = await logout()
            if (result.code === 200) {
                context.commit('clear')
                removeToken()
                return Promise.resolve('ok')
            } else {
                return Promise.reject(new Error('账号登出失败!'))
            }
        }
    },
    getters: {}
}