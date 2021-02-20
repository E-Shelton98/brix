<template>
    <main>
        <div v-if="articleParams.headPhoto">
            <img v:bindsrc="articleParams.headPhotoURL" v-bind:alt="articleParams.headPhotoAlt">
        </div>
        <h1>{{articleParams.heading}}</h1>
        <p v-if="articleParams.introduction !== ''">{{articleParams.introduction}}</p>
        <div v-for="n in articleParams.subheadings.length" :key="n">
            <h3> {{ articleParams.subheadings[n-1] }} </h3>
            <p> {{ articleParams.subheadingsContent[n-1] }} </p>
        </div>
        <div>
            <ol>
                <section>Sources</section>
                <li v-for="link in articleParams.linkableSources" :key="link">
                    <a v-bind:href="link">{{link}}</a>
                </li>
                <li v-for="n in articleParams.unlinkableSources.length" :key="n"> {{ articleParams.unlinkableSources[n-1] }} </li>
            </ol>
        </div>
    </main>
</template>

<script>
export default {
    name: 'MockArticle',
    props: {
        articleParams: Object
    }
}
</script>