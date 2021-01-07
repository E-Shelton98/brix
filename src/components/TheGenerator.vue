<template>
    <div>
        <div class="relative inline-block">
            <button class="bg-green-300 p-2 rounded-lg" @click="showHeaderForm">Create/Edit Header</button>
            <transition name="modal">
                <div class="fixed z-0 top-0 left-0 w-full h-full opacity-60 flex items-center justify-center transition-opacity duration-300 ease-out bg-green-900" v-if="headerModal">
                    <div class="align-middle">
                        <div class="w-max mx-0 my-auto px-2 py-3 bg-green-400 rounded shadow-lg transition-all duration-300 ease-out">
                            <form class="flex flex-col bg-green-300 opacity-100" @submit.prevent="setHeaderParams(true)">
                                <label for="color">Enter Color {TEST OPTION}</label>
                                <input type="text" id="color" v-model="headerParams.color">
                                <label for="brand">Enter Website Name</label>
                                <input type="text" id="brand" v-model="headerParams.brandName">
                                <label for="search">Check for search bar</label>
                                <input type="checkbox" id="search" v-model="headerParams.search">
                                <label for="linkAmount">Choose link amount</label>
                                <input type="number" min="0" name="linkAmount" v-model="headerParams.links.length">
                                <input type="text" v-model="headerParams.links[n - 1]" v-for="n in headerParams.links.length" :key="n">
                                <button type="submit">Submit</button>
                                <button type="button" @click="setHeaderParams(false)">Delete</button>
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