<template>
    <div class="site-layout">
        <header class="p-text-left"><h1>Project Manager</h1></header>
        <main>
            <sidebar></sidebar>
        </main>
        <footer>2021 copyright @takeshi.</footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from 'primevue/sidebar';

export default defineComponent({
    name: 'SiteLayout',
    components: {
        Sidebar,
    },
});
</script>

<style lang="scss">
.site-layout {
    color: var(--text-color);
    header {
        background-color: var(--primary-color);
        height: 50px;
    }
    main {
        min-height: 100vh;
    }
}
</style>
