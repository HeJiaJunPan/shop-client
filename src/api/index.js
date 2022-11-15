import requests from '@/api/request';

export const getBaseCategoryList = () => {
    return requests({
        method: 'get',
        url: '/product/getBaseCategoryList'
    })
}

export const getBannerList = () => {
    return requests({
        method: 'get',
        url: '/banner'
    })
}

export const getFloorList = () => {
    return requests({
        method: 'get',
        url: '/floor'
    })
}

export const getSearchList = (params) => {
    return requests({
        method: 'post',
        url: '/list',
        baseURL: '/api',
        data: params
    })
}

export const getGoodInfo = (skuId) => {
    return requests({
        method: 'get',
        url: `/item/${skuId}`,
        baseURL: '/api'
    })
}