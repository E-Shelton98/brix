<template>
    <div class="h-screen w-full">
        <div class="col-start-1 col-span-12 w-full" v-if="headerParams.displayHeader">
            <MockHeader :headerParams="this.headerParams"/>
        </div>

    </div>
</template>

<script>
    import MockHeader from './mock_components/MockHeader'
    
    export default {
        name: 'TheMock',
        components: {
            MockHeader
        },
        props: {
            headerParams: Object,
        },
    }
</script>