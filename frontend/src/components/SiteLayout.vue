<template>
    <div class="site-layout">
        <header>
            <h1 class="title p-text-bold">
                <i
                    class="pi pi-bars p-mr-1 p-d-inline-block hamberger"
                    @click="toggleSidebar"
                />Project Manager
            </h1>
        </header>
        <main class="p-m-5">
            <slot name="content"></slot>
        </main>
        <sidebar v-model:visible="visibleSidebar" />
        <footer class="p-text-center">2021 copyright @takeshi</footer>
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
    data() {
        return {
            visibleSidebar: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.visibleSidebar = !this.visibleSidebar;
        },
    },
});
</script>

<style lang="scss">
$header_height: 50px;
$title_size: 20px;

.site-layout {
    header {
        background-color: var(--primary-color);
        height: $header_height;
        .title {
            font-size: $title_size;
            padding: ($header_height - $title_size) / 2;
            color: var(--accent-color);
            .hamberger:hover {
                cursor: pointer;
            }
        }
    }
    main {
        min-height: 100vh;
    }
}
</style>
