<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <Button label="primevue" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from 'primevue/button';

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld,
        Button,
    },
});
</script>
