<template>
    <div class="h-screen w-full">
        <div class="col-start-1 col-span-12 w-full" v-if="headerParams.displayHeader">
            <MockHeader :headerParams="this.headerParams"/>
        </div>
        <div v-if="articleParams.displayArticle">
            <MockArticle :articleParams="this.articleParams"/>
        </div>

    </div>
</template>

<script>
    import MockHeader from './mock_components/MockHeader'
    import MockArticle from './mock_components/MockArticle'
    
    export default {
        name: 'TheMock',
        components: {
            MockHeader,
            MockArticle,
        },
        props: {
            headerParams: Object,
            articleParams: Object
        },
    }
</script>