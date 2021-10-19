<template>
    <div>
        <slot name="title">
            <div class="p-grid p-mb-3">
                <h2 class="p-col-6">{{ title }}</h2>
                <div class="p-col-6 p-text-right">
                    <i
                        class="pi pi-plus create-button"
                        v-if="visibleCreateButton"
                        @click="toCreateProjectPage"
                    />
                </div>
            </div>
        </slot>
        <card>
            <template #content>
                <slot name="card-content"></slot>
            </template>
        </card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';
export default defineComponent({
    name: 'ProjectLayout',
    components: {
        Card,
    },
    props: {
        title: {
            type: String,
        },
        visibleCreateButton: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        toCreateProjectPage() {
            this.$router.push({ name: 'ProjectCreate' });
        },
    },
});
</script>

<style lang="scss">
.create-button {
    cursor: pointer;
}
</style>
