<template>
    <div>
        <div class="relative inline-block">
            <button class="bg-green-300 hover:bg-green-600 p-2 m-2 w-44 rounded-lg" @click="showHeaderForm">Create/Edit Header</button>

            <button class="bg-green-300 hover:bg-green-600 p-2 m-2 w-44 rounded-lg" @click="showArticleForm">Create/Edit Article</button>

            <transition name="modal">
                <div class="fixed z-0 top-0 left-0 w-full h-full opacity-60 flex items-center justify-center transition-opacity duration-300 ease-out bg-green-900" v-if="headerModal">
                    <div class="align-middle">
                        <div class="w-max mx-0 my-auto px-2 py-3 bg-green-500 rounded shadow-lg transition-all duration-300 ease-out opacity-100">
                            <GeneratorHeaderForm @headerParams="setHeaderParams" @headerModal="setHeaderModal"/>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="modal">
                <div class="fixed z-0 top-0 left-0 w-full h-full opacity-60 flex items-center justify-center transition-opacity duration-300 ease-out bg-green-900 overflow-y-scroll" v-if="articleModal">
                    <div class="align-middle">
                        <div class="w-max mx-0 my-auto px-2 py-3 bg-green-500 rounded shadow-lg transition-all duration-300 ease-out opacity-100">
                            <GeneratorArticleForm @articleParams="setArticleParams" @articleModal="setArticleModal" />
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import GeneratorHeaderForm from './generator_components/GeneratorHeaderForm'
    import GeneratorArticleForm from './generator_components/GeneratorArticleForm'
    
    export default {
        name: 'TheGenerator',
        components: {
            GeneratorHeaderForm,
            GeneratorArticleForm,
        },
        data () {
            return {
                headerformView: 'hidden',
                headerModal: false,
                articleformView: 'hidden',
                articleModal: false,
            }
        },
        props: {
            generateItem: Function
        },
        methods: {
            showHeaderForm () {
                this.headerformView = 'block'
                this.headerModal = true
            },
            showArticleForm () {
                this.articleformView = 'block'
                this.articleModal = true
            },
            setHeaderModal() {
                this.headerModal = false
            },
            setArticleModal() {
                this.articleModal = false
            }
        }
    }
</script>

<style scoped>
    .modal-enter-active, .modal-leave-active {
        transition: opacity 0.5s ease;
    }

    .modal-enter-from, .modal-leave-to {
        opacity: 0;
    }
</style>