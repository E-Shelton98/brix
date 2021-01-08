<template>
    <TheHeader />
    <div class="relative pt-5">
        <div class=" w-9/12 pl-2">
            <TheMock :headerParams="this.headerParams"/>
        </div>
        <div class="absolute top-0 right-0 w-3/12 pt-5 px-2">
            <TheGenerator @headerParams='setParams'/>
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
                headerParams: {}
            }
        },
        methods: {
            setParams(value) {
                this.headerParams = value
            }
        }
    }
</script>
