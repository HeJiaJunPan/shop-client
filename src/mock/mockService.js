import Mock from 'mockjs'
import floor from './floor.json'
import banner from './banner.json'
import categoryList from './categoryList.json'
import user from './user.json'

Mock.mock('/mock/banner', {
    code: 200,
    data: banner
})

Mock.mock('/mock/floor', {
    code: 200,
    data: floor
})

Mock.mock('/mock/product/getBaseCategoryList', categoryList)

Mock.mock('/mock/user/passport/auth/getUserInfo', user)