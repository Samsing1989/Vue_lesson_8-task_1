import { createStore } from 'vuex'
import categoryList from '@/data/categoryList.json'
import productsList from '@/data/productsList.json'

export default createStore({
    state: {
        categoryList: [],
        productsList: [],
        currentCategory: null,
    },
    getters: {
        getCategoryList: ({ categoryList }) => categoryList,
        getProductsList: ({ productsList }) => productsList,
        getFilteredByCategory: ({ productsList, currentCategory }) => {
            if (!currentCategory) return productsList
            else return productsList.filter((product) => product.category === currentCategory)
        },
        getCurrentCategory: ({ currentCategory }) => currentCategory,
    },
    mutations: {
        setCategoryList(state, list) {
            state.categoryList = list
        },
        setProductsList(state, list) {
            state.productsList = list
        },
        selectedCategory(state, category) {
            state.currentCategory = category
        },
    },
    actions: {
        loadCategoryList({ commit }) {
            commit('setCategoryList', categoryList)
        },
        loadProductsList({ commit }) {
            commit('setProductsList', productsList)
        },

        selectedCategoryList({ commit }, category) {
            commit('selectedCategory', category)
        },
    },
    modules: {},
})
