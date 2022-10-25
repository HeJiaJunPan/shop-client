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