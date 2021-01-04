<template>
    <TheHeader />
    <div class="grid pt-5">
        <div class="col-start-1 col-end-3 w-full">
            <TheMock :isTrue="this.isTrue"/>
        </div>
        <div class="col-start-3 object-right">
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
