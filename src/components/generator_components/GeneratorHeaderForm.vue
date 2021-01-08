<template>
    <form class="grid bg-green-300 opacity-100" @submit.prevent="setHeaderParams(true)">
        <GeneratorFormColorWheel @colorChosen="setHeaderColor"/>
        <div class="row-start-2 col-start-1 flex flex-col m-2 w-80">
            <label for="brand">Enter Website Name</label>
            <input type="text" id="brand" v-model="headerParams.brandName">
            <label for="search">Check for search bar</label>
            <input type="checkbox" id="search" v-model="headerParams.search">
        </div>
        <div class="row-start-2 col-start-2 flex flex-col m-2 w-80">
            <label for="linkAmount">Choose link amount</label>
            <input class="px-2" type="number" min="0" max="5" name="linkAmount" v-model="headerParams.links.length">
            <label for="links" v-if="headerParams.links.length > 0">Enter your links</label>
            <input type="text" placeholder="link" v-model="headerParams.links[n - 1]" v-for="n in headerParams.links.length" :key="n">
        </div>
        <button type="submit" class="row-start-3 col-start-1 border border-black m-2 w-32">Submit</button>
        <button type="button" class="row-start-3 col-start-2 border border-black m-2 w-32 justify-self-end" @click="setHeaderParams(false)">Delete</button>
    </form>
</template>

<script>
import GeneratorFormColorWheel from './GeneratorFormColorWheel'

export default {
    name: 'GeneratorHeaderForm',
    data() {
        return {
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
    components: {
        GeneratorFormColorWheel
    },
    methods: {
        setHeaderParams(displayOption) {
            this.formView = 'hidden'
            this.headerModal = false
            this.$emit('headerParams', this.headerParams)
            if(displayOption === true) {
                this.headerParams.displayHeader = true
            }
            else {
                this.headerParams.displayHeader = false
            }
            this.$emit('headerModal', this.headerModal)
        },
        setHeaderColor(value) {
            this.headerParams.color = value
        }
    }
}
</script>