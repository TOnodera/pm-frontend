<template>
    <site-layout>
        <template #content><router-view /></template>
    </site-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteLayout from '@/components/SiteLayout.vue';

export default defineComponent({
    name: 'App',
    components: {
        'site-layout': SiteLayout,
    },
});
</script>
