import requests from '@/api/request';

export const getBaseCategoryList = () => {
    requests({
        method: 'get',
        url: '/product/getBaseCategoryList'
    }).then(response => {
        return response.data
    })
}