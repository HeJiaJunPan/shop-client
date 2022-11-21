import {addToCart, getGoodInfo} from '@/api';

export default {
    namespaced: true,
    state: {
        goodInfo: {}
    },
    mutations: {
        getGoodInfo(state, data) {
            state.goodInfo = data
        }
    },
    actions: {
        async getGoodInfo(context, data) {
            let result = await getGoodInfo(data)
            if (result.code === 200) {
                context.commit('getGoodInfo', result.data)
            }
        },
        async addToCart(context, data) {
            let result = await addToCart(data.skuId, data.skuNum)
            if (result.code === 200) {
                return Promise.resolve('success')
            } else {
                return Promise.reject(new Error('fail'))
            }
        }
    },
    getters: {
        categoryView(state) {
            return state.goodInfo.categoryView || {}
        },
        skuInfo(state) {
            return state.goodInfo.skuInfo || {}
        },
        skuImageList(state) {
            if (state.goodInfo.skuInfo) {
                return state.goodInfo.skuInfo.skuImageList || []
            }
        },
        spuSaleAttrList(state) {
            return state.goodInfo.spuSaleAttrList || []
        }
    }
}