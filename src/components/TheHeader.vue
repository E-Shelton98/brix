<template>
    <div class="bg-green-300 h-16 absolute top-0 w-full flex justify-between justify-items-center items-center">
        <section class="text-left text-2xl italic pl-2">CodeName:Brix</section>
        <div class="pr-2 w-96 flex justify-around">
            <router-link to="/the_home">Home</router-link>
            <router-link to="/the_about">About</router-link>
            <router-link to="/the_contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader'
    }
</script>