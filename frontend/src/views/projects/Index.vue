<template>
    <div>
        <div class="p-grid p-mb-3">
            <h2 class="p-col-6">プロジェクト一覧</h2>
            <div class="p-col-6 p-text-right"><i class="pi pi-plus" /></div>
        </div>

        <DataTable :value="products" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
    components: {
        DataTable,
        Column,
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
