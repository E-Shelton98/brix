<template>
    <TheHeader />
    <div class="grid grid-cols-2">
        <div class="col-start-1"><section class="text-green-400">Hello World</section></div>
        <div class="text-green-600 col-start-2">How You Been?</div>
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
