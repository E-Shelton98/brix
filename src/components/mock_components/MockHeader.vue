<template>
    <div class="flex justify-between p-3" :class="headerSettings.color">
        <a href="" class="brand-name">{{headerSettings.brandName}}</a>
        <div class="flex w-4/6 justify-between px-2">
            <li v-for="link in headerSettings.links" :key="link" class="list-none cursor-pointer hover:text-white"> {{link}} </li>
            <div v-if="headerSettings.search">
                <input class="px-2" type="text" placeholder="search...">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MockHeader',
        props: {
            headerSettings: Object
        },
        mounted() {
            this.$nextTick(function () {
                if(this.headerSettings.color == 1) {
                    this.bgColor = 'bg-gray-300'
                }
                else if (this.headerSettings.color == 2) {
                    this.bgColor = 'bg-indigo-300'
                }
                else {
                    this.bgColor = 'bg-green-400'
                }

                console.log(this.headerSettings.header, this.headerSettings.color, this.headerSettings.links)
            })
        },
        watch: {
            headerSettings: function(){
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