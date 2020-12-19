<template>
    <div>
        <section class="text-green-600" @click="handleClick">How You Been?</section>
    </div>
</template>

<script>
    export default {
        name: 'TheGenerator',
        props: {
            generateItem: Function
        },
        methods: {
            handleClick() {
                this.$emit('generateItem')
            }
        }
    }
</script>