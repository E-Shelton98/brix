<template>
    <div class="h-screen w-full">
        <div class="col-start-1 col-span-12 w-full" v-if="isTrue">
            <MockHeader />
        </div>

    </div>
</template>

<script>
    import MockHeader from './mock-Components/MockHeader'
    
    export default {
        name: 'TheMock',
        components: {
            MockHeader
        },
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