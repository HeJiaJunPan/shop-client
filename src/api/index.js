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

export const addToCart = (skuId, skuNum) => {
    return requests({
        method: 'post',
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        baseURL: '/api'
    })
}

export const getCartList = () => {
    return requests({
        method: 'get',
        url: `/cart/cartList`,
        baseURL: '/api'
    })
}

export const deleteCartById = (cartId) => {
    return requests({
        method: 'delete',
        url: `/cart/deleteCart/${cartId}`,
        baseURL: '/api'
    })
}

export const updateCheckStatus = (cartId, isChecked) => {
    return requests({
        method: 'get',
        url: `/cart/checkCart/${cartId}/${isChecked}`,
        baseURL: '/api'
    })
}