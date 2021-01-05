<template>
    <div class="flex justify-between p-3" :class="bgColor">
        <a href="" class="brand-name">Brand Name</a>
        <div class="flex w-4/6 justify-between px-2">
            <a class="hover:underline" href="#" @click="logHeaderChosen">Link 1</a>
            <a class="hover:underline" href="" >Link 2</a>
            <a class="hover:underline" href="" >Link 3</a>
            <div>
                <input class="px-2" type="text" placeholder="search...">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MockHeader',
        props: {
            headerChosen: Number
        },
        mounted() {
            this.$nextTick(function () {
                if(this.headerChosen == 1) {
                    this.bgColor = 'bg-gray-300'
                }
                else if (this.headerChosen == 2) {
                    this.bgColor = 'bg-indigo-300'
                }
                else {
                    this.bgColor = 'bg-green-400'
                }
            })
        },
        watch: {
            headerChosen: function(){
                console.log(this.headerChosen)
                if (this.headerChosen === 1) {
                    this.bgColor = 'bg-gray-300'
                }
                else if (this.headerChosen == 2) {
                    this.bgColor = 'bg-indigo-300'
                }
                else {
                    this.bgColor = 'bg-green-400'
                }
            }
        },
        data() {
            return {
                bgColor: ''
            }
        }
    }
</script>

<style scoped>

</style>