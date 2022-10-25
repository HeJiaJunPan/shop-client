import {getBaseCategoryList, getBannerList, getFloorList} from '@/api';

export default {
    namespaced: true,
    state: {
        categoryList: [],
        bannerList: [],
        floorList: []
    },
    mutations: {
        getCategoryList(state, data) {
            state.categoryList = data
        },
        getBannerList(state, data) {
            state.bannerList = data
        },
        getFloorList(state, data) {
            state.floorList = data
        }
    },
    actions: {
        async getCategoryList(state) {
            let result = await getBaseCategoryList()
            if (result.code === 200) {
                state.commit('getCategoryList', result.data)
            }
        },
        async getBannerList(state) {
            let result = await getBannerList()
            if (result.code === 200) {
                state.commit('getBannerList', result.data)
            }
        },
        async getFloorList(state) {
            let result = await getFloorList()
            if (result.code === 200) {
                state.commit('getFloorList', result.data)
            }
        }
    },
    getters: {}
}