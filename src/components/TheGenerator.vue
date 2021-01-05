<template>
    <div>
        <div class="relative inline-block">
            <button class="bg-green-300 p-2 rounded-lg" @click="showDropdown">Headers</button>
            <ul class="absolute z-10 shadow-md list-none min-w-max" :class="dropdownView">
                <li class="p-2 hover:bg-gray-200" @click="headerDropdownClick('selectHeader1')">Header 1</li>
                <li class="p-2 hover:bg-gray-200" @click="headerDropdownClick('selectHeader2')">Header 2</li>
                <li class="p-2 hover:bg-gray-200" @click="headerDropdownClick('selectHeader3')">Header 3</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheGenerator',
        data () {
            return {
                dropdownView: 'hidden'
            }
        },
        props: {
            generateItem: Function
        },
        methods: {
            showDropdown () {
                this.dropdownView = 'block'
            },
            headerDropdownClick(headerChoice) {
                this.dropdownView = 'hidden'
                if (headerChoice === 'selectHeader1') {
                    this.$emit('header1')
                }
                else if (headerChoice === 'selectHeader2') {
                    this.$emit('header2')
                }
                else if (headerChoice === 'selectHeader3') {
                    this.$emit('header3')
                }
            }
        }
    }
</script>