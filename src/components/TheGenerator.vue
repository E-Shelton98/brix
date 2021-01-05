<template>
    <div>
        <div class="relative inline-block">
            <button class="bg-green-300 p-2 rounded-lg" @click="showHeaderForm">Create/Edit Header</button>
            <form class="absolute z-10 shadow-md min-w-max flex flex-col" :class="formView" @submit.prevent="submitHeaderParams()">
                <label for="color">Enter Color {TEST OPTION}</label>
                <input type="text" id="color" v-model="headerParams.color">
                <label for="brand">Enter Website Name</label>
                <input type="text" id="brand" v-model="headerParams.brandName">
                <label for="search">Check for search bar</label>
                <input type="checkbox" id="search" v-model="headerParams.search">
                <button type="submit">Submit</button>
            </form>
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
                    'brandName': '',
                    'color': '',
                    'links': ['about', 'services', 'contact'],
                    'search': false
                }
            }
        },
        props: {
            generateItem: Function
        },
        methods: {
            showHeaderForm () {
                this.formView = 'block'
            },
            headerDropdownClick(headerChoice) {
                this.formView = 'hidden'
                if (headerChoice === 'selectHeader1') {
                    this.$emit('header')
                }
                else if (headerChoice === 'selectHeader2') {
                    this.$emit('header2')
                }
                else if (headerChoice === 'selectHeader3') {
                    this.$emit('header3')
                }
                
            },
            submitHeaderParams() {
                this.formView = 'hidden'
                this.$emit('displayHeader')
                this.$emit('header-params', this.headerParams)
            }
        }
    }
</script>