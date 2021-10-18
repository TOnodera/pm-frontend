<template>
    <div class="home">
        <site-layout />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteLayout from '@/components/SiteLayout.vue';

export default defineComponent({
    name: 'Index',
    components: {
        SiteLayout,
    },
});
</script>
