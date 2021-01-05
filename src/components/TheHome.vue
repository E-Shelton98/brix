<template>
    <TheHeader />
    <div class="relative pt-5">
        <div class=" w-9/12">
            <TheMock :headerChoice="this.header"/>
        </div>
        <div class="absolute top-0 right-0 w-3/12 pt-5 px-2">
            <TheGenerator @header1="setHeader1True" @header2="setHeader2True" @header3="setHeader3True"/>
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
                header: [false, 0]
            }
        },
        methods: {
            setHeader1True() {
                if (this.header[0] === true && this.header[1] === 1) {
                    this.header[0] = false
                }
                else {
                    this.header[0] = true
                    this.header[1] = 1
                }
                
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
        }
    }
</script>
