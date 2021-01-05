<template>
    <TheHeader />
    <div class="relative pt-5">
        <div class=" w-9/12">
            <TheMock :displayHeader="this.header" :headerOptions="this.headerParams"/>
        </div>
        <div class="absolute top-0 right-0 w-3/12 pt-5 px-2">
            <TheGenerator @displayHeader="setHeaderTrue" @header-params='logHeaderParams'/>
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
                header: false,
                headerParams: {}
            }
        },
        methods: {
            setHeaderTrue() {
               this.header = true
            },
            setHeader2True() {
                if (this.header[0] === true && this.header[1] === 2) {
                    this.header[0] = false
                }
                else {
                    this.header[0] = true
                    this.header[1] = 2
                }
                
            },
            setHeader3True() {
                if (this.header[0] === true && this.header[1] === 3) {
                    this.header[0] = false
                }
                else {
                    this.header[0] = true
                    this.header[1] = 3
                }
                
            },
            logHeaderParams(value) {
                this.headerParams = value
            }
        }
    }
</script>
