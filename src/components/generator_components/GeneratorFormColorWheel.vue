<template>
    <div class="relative row-starts-1 col-span-2 flex flex-col justify-self-center m-2 w-96">
            <section>Select a primary color</section>
            <div class="flex bg-white py-2 m-2 h-24 overflow-x-auto flex-nowrap w-full cursor-pointer">
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-black" @click="setPrimaryColor(e, 'bg-black')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-white" @click="setPrimaryColor(e, 'bg-white')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-200" @click="setPrimaryColor(e, 'bg-gray-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-300" @click="setPrimaryColor(e, 'bg-gray-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-400" @click="setPrimaryColor(e, 'bg-gray-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-500" @click="setPrimaryColor(e, 'bg-gray-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-600" @click="setPrimaryColor(e, 'bg-gray-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-700" @click="setPrimaryColor(e, 'bg-gray-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-800" @click="setPrimaryColor(e, 'bg-gray-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-gray-900" @click="setPrimaryColor(e, 'bg-gray-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-200" @click="setPrimaryColor(e, 'bg-red-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-300" @click="setPrimaryColor(e, 'bg-red-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-400" @click="setPrimaryColor(e, 'bg-red-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-500" @click="setPrimaryColor(e, 'bg-red-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-600" @click="setPrimaryColor(e, 'bg-red-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-700" @click="setPrimaryColor(e, 'bg-red-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-800" @click="setPrimaryColor(e, 'bg-red-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-red-900" @click="setPrimaryColor(e, 'bg-red-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-200" @click="setPrimaryColor(e, 'bg-yellow-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-300" @click="setPrimaryColor(e, 'bg-yellow-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-400" @click="setPrimaryColor(e, 'bg-yellow-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-500" @click="setPrimaryColor(e, 'bg-yellow-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-600" @click="setPrimaryColor(e, 'bg-yellow-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-700" @click="setPrimaryColor(e, 'bg-yellow-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-800" @click="setPrimaryColor(e, 'bg-yellow-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-yellow-900" @click="setPrimaryColor(e, 'bg-yellow-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-200" @click="setPrimaryColor(e, 'bg-green-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-300" @click="setPrimaryColor(e, 'bg-green-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-400" @click="setPrimaryColor(e, 'bg-green-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-500" @click="setPrimaryColor(e, 'bg-green-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-600" @click="setPrimaryColor(e, 'bg-green-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-700" @click="setPrimaryColor(e, 'bg-green-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-800" @click="setPrimaryColor(e, 'bg-green-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-green-900" @click="setPrimaryColor(e, 'bg-green-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-200" @click="setPrimaryColor(e, 'bg-blue-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-300" @click="setPrimaryColor(e, 'bg-blue-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-400" @click="setPrimaryColor(e, 'bg-blue-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-500" @click="setPrimaryColor(e, 'bg-blue-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-600" @click="setPrimaryColor(e, 'bg-blue-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-700" @click="setPrimaryColor(e, 'bg-blue-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-800" @click="setPrimaryColor(e, 'bg-blue-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-blue-900" @click="setPrimaryColor(e, 'bg-blue-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-200" @click="setPrimaryColor(e, 'bg-indigo-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-300" @click="setPrimaryColor(e, 'bg-indigo-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-400" @click="setPrimaryColor(e, 'bg-indigo-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-500" @click="setPrimaryColor(e, 'bg-indigo-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-600" @click="setPrimaryColor(e, 'bg-indigo-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-700" @click="setPrimaryColor(e, 'bg-indigo-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-800" @click="setPrimaryColor(e, 'bg-indigo-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-indigo-900" @click="setPrimaryColor(e, 'bg-indigo-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-200" @click="setPrimaryColor(e, 'bg-purple-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-300" @click="setPrimaryColor(e, 'bg-purple-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-400" @click="setPrimaryColor(e, 'bg-purple-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-500" @click="setPrimaryColor(e, 'bg-purple-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-600" @click="setPrimaryColor(e, 'bg-purple-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-700" @click="setPrimaryColor(e, 'bg-purple-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-800" @click="setPrimaryColor(e, 'bg-purple-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-purple-900" @click="setPrimaryColor(e, 'bg-purple-900')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-200" @click="setPrimaryColor(e, 'bg-pink-200')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-300" @click="setPrimaryColor(e, 'bg-pink-300')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-400" @click="setPrimaryColor(e, 'bg-pink-400')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-500" @click="setPrimaryColor(e, 'bg-pink-500')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-600" @click="setPrimaryColor(e, 'bg-pink-600')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-700" @click="setPrimaryColor(e, 'bg-pink-700')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-800" @click="setPrimaryColor(e, 'bg-pink-800')"></div>
                <div class="colors flex-grow-0 flex-shrink-0 w-16 h-full bg-pink-900" @click="setPrimaryColor(e, 'bg-pink-900')"></div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'GeneratorFormColorWheel',
        data() {
            return {
                colorChosen: ''
            }
        },
        methods: {
            setPrimaryColor($event, color) {
                const colors = document.querySelectorAll('.colors')
                colors.forEach((color) => {
                    color.classList.remove('border-4')
                    color.classList.remove('border-black')
                })
                event.target.classList.add("border-4")
                event.target.classList.add("border-black")

                this.colorChosen = color
                this.$emit('colorChosen', this.colorChosen)
            }
        }
    }

</script>