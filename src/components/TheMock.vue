<template>
    <div class="h-screen w-full">
        <div class="col-start-1 col-span-12 w-full" v-if="headerChoice[0] === true">
            <MockHeader :headerChosen="this.headerChoice[1]"/>
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
            headerChoice: Array,
        },
    }
</script>