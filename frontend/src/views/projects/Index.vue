<template>
    <project-layout title="プロジェクト一覧">
        <template #card-content>
            <DataTable :value="products" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </template>
    </project-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProjectLayout from './ProjectLayout.vue';

export default defineComponent({
    components: {
        DataTable,
        Column,
        ProjectLayout,
    },
    data() {
        return {
            products: [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                },
            ],
        };
    },
});
</script>
