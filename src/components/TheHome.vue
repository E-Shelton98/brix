<template>
    <TheHeader />
    <div class="grid grid-cols-2 pt-5">
        <div class="col-start-1">
            <section class="text-green-400">Hello World</section>
        </div>
        <div class="text-green-600 col-start-2">
            <section class="text-green-600">How You Been?</section>
        </div>
    </div>
</template>

<script>
    import TheHeader from './TheHeader'
    
    export default {
        name: 'TheHome',
        components: {
            TheHeader
        }
    }
</script>
