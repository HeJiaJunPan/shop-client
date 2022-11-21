import {deleteCartById, getCartList, updateCheckStatus} from '@/api';

export default {
    namespaced: true,
    state: {
        cartList: {}
    },
    mutations: {
        getCartList(state, data) {
            state.cartList = data
        }
    },
    actions: {
        async getCartList(context) {
            let result = await getCartList()
            if (result.code === 200) {
                context.commit('getCartList', result.data)
            }
        },
        async deleteCartById(context, skuId) {
            let result = await deleteCartById(skuId)
            if (result.code === 200) {
                return 'success'
            } else {
                return Promise.reject(new Error('删除购物车失败！'))
            }
        },
        async updateCheckStatus(context, {skuId,isChecked}) {
            let result = await updateCheckStatus(skuId,isChecked)
            if (result.code === 200) {
                return 'success'
            } else {
                return Promise.reject(new Error('修改购物选中状态失败！'))
            }
        },
        deleteAllCart(context) {
            let cartInfoList = context.getters.cartInfoList
            let promiseList = []
            cartInfoList.forEach((cart) => {
                if (cart.isChecked) {
                    promiseList.push(context.dispatch('deleteCartById', cart.skuId))
                }
            })
            return Promise.all(promiseList)
        },
        updateAllCartStatus(context, isChecked) {
            // 如果购物车的勾选状态和全选按钮的状态不一样，则修改购物车的状态
            let cartInfoList = context.getters.cartInfoList
            let promiseList = []
            cartInfoList.forEach((cart) => {
                if (cart.isChecked != isChecked) {
                    let promise = context.dispatch('updateCheckStatus', {
                        skuId: cart.skuId,
                        isChecked: isChecked
                    })
                    promiseList.push(promise)
                }
            })
            return Promise.all(promiseList)
        }

    },
    getters: {
        cartInfoList(state) {
            if (state.cartList[0]) {
                return state.cartList[0].cartInfoList
            } else {
                return []
            }
        }
    }
}