<template>
    <div class="product-container">
        <a v-for="prod in productsListDate" :key="prod.id" :href="prod.link" class="product-items">
            <div class="image">
                <img :src="prod.imgSrc" />
            </div>
            <div class="body">
                <div class="title">{{ prod.title }}</div>
                <div class="price">{{ prod.price }}</div>
                <div class="old-price">{{ prod.oldPrice }}</div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ProductList',
    props: {
        productsListDate: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: none;
}
.product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}
.product-items {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    box-shadow: 1px 1px 1px 1px;
    max-width: 450px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
    }
}
.image {
    img {
        max-width: 100px;
    }
}
// .body {
// }
.title {
    font-size: 18px;
}
.price {
    color: red;
    font-size: 20px;
}
.old-price {
    text-decoration: line-through;
    opacity: 0.5;
    font-size: 14px;
}
</style>
