<template>
    <div class="grid grid-rows-16 grid-cols-12 h-full">
        <div class="bg-blue-400 col-start-1 col-span-12" v-if="isTrue">
            <section>Hello World</section>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TheMock',
        props: {
            isTrue: Boolean
        },
        data() {
            return {
                displayHeader: this.isTrue
            }
        }
    }
</script>