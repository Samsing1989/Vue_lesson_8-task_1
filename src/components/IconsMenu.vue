<template>
    <div class="container">
        <div
            v-for="product in categoryListDate"
            :key="product.id"
            class="items"
            :class="{ active: goCategory === product.category }"
            @click="$emit('getCategory', product.category)"
        >
            <div class="image"><img :src="product.imgSrc" /></div>
            <div class="title">{{ product.category }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IconsMenu',

    props: {
        categoryListDate: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['getCategory'],
    computed: {
        goCategory() {
            return this.$store.getters.getCurrentCategory
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 30px;
    display: flex;
    justify-content: center;
    gap: 50px;
    background-color: rgb(215, 214, 214);
    margin-bottom: 10px;
}
.items {
    cursor: pointer;
}
.image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    img {
        max-width: 80px;
    }
}
.title {
    text-align: center;
    font-size: 24px;
}
.active {
    transition: all 0.3s;
    padding: 20px;
}
</style>
