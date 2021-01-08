<template>
    <div>
        <div class="relative inline-block">
            <button class="bg-green-300 p-2 rounded-lg" @click="showHeaderForm">Create/Edit Header</button>
            <transition name="modal">
                <div class="fixed z-0 top-0 left-0 w-full h-full opacity-60 flex items-center justify-center transition-opacity duration-300 ease-out bg-green-900" v-if="headerModal">
                    <div class="align-middle">
                        <div class="w-max mx-0 my-auto px-2 py-3 bg-green-400 rounded shadow-lg transition-all duration-300 ease-out opacity-100">
                            <form class="grid bg-green-300 opacity-100" @submit.prevent="setHeaderParams(true)">
                                <div class="row-start-1 col-start-1 flex flex-col m-2">
                                    <label for="color">Enter Color {TEST OPTION}</label>
                                    <input type="text" id="color" v-model="headerParams.color">
                                    <label for="brand">Enter Website Name</label>
                                    <input type="text" id="brand" v-model="headerParams.brandName">
                                    <label for="search">Check for search bar</label>
                                    <input type="checkbox" id="search" v-model="headerParams.search">
                                </div>
                                <div class="row-start-1 col-start-2 flex flex-col m-2">
                                    <label for="linkAmount">Choose link amount</label>
                                    <input class="px-2" type="number" min="0" max="5" name="linkAmount" v-model="headerParams.links.length">
                                    <label for="links" v-if="headerParams.links.length > 0">Enter your links</label>
                                    <input type="text" placeholder="link" v-model="headerParams.links[n - 1]" v-for="n in headerParams.links.length" :key="n">
                                </div>
                                <button type="submit" class="row-start-2 col-start-1 border border-black m-2 w-32">Submit</button>
                                <button type="button" class="row-start-2 col-start-2 border border-black m-2 w-32 justify-self-end" @click="setHeaderParams(false)">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheGenerator',
        data () {
            return {
                formView: 'hidden',
                headerParams: {
                    'displayHeader': false,
                    'brandName': '',
                    'color': '',
                    'links': [],
                    'search': false
                },
                headerModal: false
            }
        },
        props: {
            generateItem: Function
        },
        methods: {
            showHeaderForm () {
                this.formView = 'block'
                this.headerModal = true
            },
            setHeaderParams(displayOption) {
                this.formView = 'hidden'
                this.headerModal = false
                this.$emit('header-params', this.headerParams)
                if(displayOption === true) {
                    this.headerParams.displayHeader = true
                }
                else {
                    this.headerParams.displayHeader = false
                }
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