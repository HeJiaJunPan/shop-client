import {getSearchList} from '@/api'

export default {
    namespaced: true,
    state: {
        searchList: {}
    },
    mutations: {
        getSearchList(state, data) {
            state.searchList = data
        }
    },
    actions: {
        async getSearchList(context, data) {
            let result = await getSearchList(data)
            if (result.code === 200) {
                context.commit('getSearchList', result.data)
            }
        }
    },
    getters: {
        goodsList(state) {
            return state.searchList.goodsList || []
        },
        attrsList(state) {
            return state.searchList.attrsList || []
        },
        trademarkList(state) {
            return state.searchList.trademarkList || []
        }
    }
}