<template>
    <TheHeader />
    <div class="grid grid-cols-2 pt-5">
        <div class="col-start-1">
            <TheMock :isTrue="this.isTrue"/>
        </div>
        <div class="col-start-2">
            <TheGenerator @generateItem="setTrue"/>
        </div>
    </div>
</template>

<script>
    import TheHeader from './TheHeader'
    import TheMock from './TheMock'
    import TheGenerator from './TheGenerator'

    export default {
        name: 'TheHome',
        components: {
            TheHeader,
            TheMock,
            TheGenerator
        },
        data() {
            return {
                isTrue: false
            }
        },
        methods: {
            setTrue() {
                console.log('hello')
                this.isTrue = !this.isTrue
            },
        }
    }
</script>
