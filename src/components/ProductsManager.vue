<template>
    <icons-menu :category-list-date="getCategoryList" @get-category="selectedCategory" />
    <product-list :products-list-date="getFilteredByCategory" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ProductList from './ProductList.vue'
import IconsMenu from './IconsMenu.vue'
export default {
    name: 'ProductsManager',
    components: {
        ProductList,
        IconsMenu,
    },
    computed: {
        ...mapGetters(['getCategoryList', 'getFilteredByCategory']),
    },
    created() {
        this.loadCategoryList()
        this.loadProductsList()
    },
    methods: {
        ...mapActions(['loadCategoryList', 'loadProductsList', 'selectedCategoryList']),
        selectedCategory(category) {
            this.selectedCategoryList(category)
        },
    },
}
</script>

<style lang="scss" scoped></style>
