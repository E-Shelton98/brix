<template>
    <form class="grid bg-green-300 opacity-100" @submit.prevent="setArticleParams(true)">
        
        <div class="row-start-1 col-start-1 flex flex-col m-2 w-80">
            <label for="heading">Enter Article Heading</label>
            <input class="px-1" type="text" id="heading" v-model="articleParams.heading">
            <label for="introduction">Enter Article Introduction</label>
            <textarea class="px-1" name="introduction" id="article-introduction" cols="30" rows="3" v-model="articleParams.introduction"></textarea>
        </div>
        <div class="row-start-1 col-start-2 flex flex-col m-2 w-80">
            <label for="subheadings number">How many subheadings</label>
            <input class="px-2 mb-4" type="number" min="0" max="5" name="linkAmount" v-model="articleParams.subheadings.length">
            <div class="flex flex-col m-2" v-for="n in articleParams.subheadings.length" :key="n">
                <label for="links">Enter your subheading</label>
                <input type="text" placeholder="subheading" v-model="articleParams.subheadings[n - 1]">
                <label for="subheading content">Enter your subheading content</label>
                <textarea class="px-1" name="subheading content" id="subheading-content" cols="30" rows="3" v-model="articleParams.subheadingsContent[n-1]"></textarea>
            </div>
        </div>
        <div class="row-start-2 col-start-1 p-2 flex">
            <label for="headPhoto">Head Photo?</label>
            <input class="my-auto mx-2" type="checkbox" id="search" v-model="articleParams.headPhoto">
            <input class="px-1" type="text" placeholder="Enter URL" v-if="articleParams.headPhoto" v-model="articleParams.headPhotoURL">
            <input class="px-1" type="text" placeholder="Enter Alt" v-if="articleParams.headPhoto" v-model="articleParams.headPhotoAlt">
        </div>
        
        <div class="row-start-3 col-start-1 flex flex-col">
            <div class="m-1">
                <label class="mx-1" for="linkableAmount">How Many Linkable Sources</label>
                <input class="mx-1 w-8" type="number" min="0" name="linkableAmount" v-model="articleParams.linkableSources.length">
            </div>
            <label for="linkable sources" v-if="articleParams.linkableSources.length > 0">linkable sources (http:// included)</label>
            <input class="m-1" type="text" v-for="n in articleParams.linkableSources.length" :key="n" v-model="articleParams.linkableSources[n-1]">
        </div>

        <div class="row-start-3 col-start-2 flex flex-col">
            <div class="m-1">
                <label class="mx-1" for="unlinkableAmount">How Many Unlinkable Sources</label>
                <input class="mx-1 w-8" type="number" min="0" name="unlinkableAmount" v-model="articleParams.unlinkableSources.length">
            </div>
            <label for="unlinkable sources" v-if="articleParams.unlinkableSources.length > 0">unlinkable sources</label>
            <input class="m-1" type="text" v-for="n in articleParams.unlinkableSources.length" :key="n" v-model="articleParams.unlinkableSources[n-1]">
        </div>

        <button type="submit" class="row-start-4 col-start-1 border border-black m-2 w-32">Submit</button>
        
        <button type="button" class="row-start-4 col-start-2 border border-black m-2 w-32 justify-self-end" @click="setArticleParams(false)">Delete</button>
    </form>
</template>

<script>
export default {
    name: 'GeneratorArticleForm',
    data() {
        return {
            articleParams: {
                'displayArticle': false,
                'heading': '',
                'introduction': '',
                'subheadings': [],
                'subheadingsContent': [],
                'headPhoto': false,
                'headPhotoURL': '',
                'headPhotoAlt': '',
                'linkableSources': [],
                'unlinkableSources': []
            },
            articleModal: false
        }
    },
    methods: {
        setArticleParams(displayOption) {
            this.formView = 'hidden'
            this.articleModal = false
            this.$emit('articleParams', this.articleParams)
            if(displayOption === true) {
                this.articleParams.displayArticle = true
                console.log(this.articleParams.subheadingsContent)
                this.$store.commit('setArticleParams', this.articleParams)
            }
            else {
                this.articleParams.displayArticle = false
                this.$store.commit('setArticleParams', this.articleParams)
            }
            this.$emit('articleModal', this.articleModal)
        },
        setArticleColor(value) {
            this.articleParams.color = value
        }
    }
}
</script>