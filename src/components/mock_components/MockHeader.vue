<template>
    <div class="flex justify-between p-3" :class="headerParams.color">
        <a href="" class="brand-name">{{headerParams.brandName}}</a>
        <div class="flex w-4/6 justify-between px-2">
            <li v-for="link in headerParams.links" :key="link" class="list-none cursor-pointer hover:text-white"> {{link}} </li>
            <div v-if="headerParams.search">
                <input class="px-2" type="text" placeholder="search...">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MockHeader',
        props: {
            headerParams: Object
        },
    }
</script>