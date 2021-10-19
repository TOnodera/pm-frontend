<template>
    <project-layout title="プロジェクト新規作成" :visibleCreateButton="false">
        <template #card-content>
            <div class="p-grid p-fluid">
                <div class="p-md-6 p-sm-12 p-field">
                    <h5 class="p-mb-2">プロジェクト名</h5>
                    <input-text />
                </div>
                <div class="p-md-6 p-sm-12 p-field">
                    <h5 class="p-mb-2">納期</h5>
                    <calendar v-model="limitDate" dateFormat="yy-mm-dd" />
                </div>
                <div class="p-col-12 p-field">
                    <h5 class="p-mb-2">メンバー</h5>
                    <pick-list v-model="cars" dataKey="vin">
                        <template #sourceHeader> 参加可能なメンバー </template>
                        <template #targetHeader> プロジェクト参加者 </template>
                        <template #item="slotProps">
                            <div class="p-caritem">
                                <img
                                    :src="
                                        'demo/images/car/' +
                                        slotProps.item.brand +
                                        '.png'
                                    "
                                />
                                <div>
                                    <span class="p-caritem-vin">{{
                                        slotProps.item.vin
                                    }}</span>
                                    <span
                                        >{{ slotProps.item.year }} -
                                        {{ slotProps.item.color }}</span
                                    >
                                </div>
                            </div>
                        </template>
                    </pick-list>
                </div>
            </div>
            <div class="p-grid p-jc-end p-fluid">
                <div class="p-md-2 p-sm-6">
                    <Button label="登録" />
                </div>
            </div>
        </template>
    </project-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectLayout from './ProjectLayout.vue';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import PickList from 'primevue/picklist';
import Button from 'primevue/button';

export default defineComponent({
    components: {
        ProjectLayout,
        InputText,
        Calendar,
        PickList,
        Button,
    },
    data() {
        return {
            limitDate: null,
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
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: 'black-watch.jpg',
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4,
                },
                {
                    id: '1002',
                    code: 'zz21cz3c1',
                    name: 'Blue Band',
                    description: 'Product Description',
                    image: 'blue-band.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3,
                },
                {
                    id: '1003',
                    code: '244wgerg2',
                    name: 'Blue T-Shirt',
                    description: 'Product Description',
                    image: 'blue-t-shirt.jpg',
                    price: 29,
                    category: 'Clothing',
                    quantity: 25,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                },
                {
                    id: '1004',
                    code: 'h456wer53',
                    name: 'Bracelet',
                    description: 'Product Description',
                    image: 'bracelet.jpg',
                    price: 15,
                    category: 'Accessories',
                    quantity: 73,
                    inventoryStatus: 'INSTOCK',
                    rating: 4,
                },
                {
                    id: '1005',
                    code: 'av2231fwg',
                    name: 'Brown Purse',
                    description: 'Product Description',
                    image: 'brown-purse.jpg',
                    price: 120,
                    category: 'Accessories',
                    quantity: 0,
                    inventoryStatus: 'OUTOFSTOCK',
                    rating: 4,
                },
                {
                    id: '1006',
                    code: 'bib36pfvm',
                    name: 'Chakra Bracelet',
                    description: 'Product Description',
                    image: 'chakra-bracelet.jpg',
                    price: 32,
                    category: 'Accessories',
                    quantity: 5,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3,
                },
                {
                    id: '1007',
                    code: 'mbvjkgip5',
                    name: 'Galaxy Earrings',
                    description: 'Product Description',
                    image: 'galaxy-earrings.jpg',
                    price: 34,
                    category: 'Accessories',
                    quantity: 23,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                },
                {
                    id: '1008',
                    code: 'vbb124btr',
                    name: 'Game Controller',
                    description: 'Product Description',
                    image: 'game-controller.jpg',
                    price: 99,
                    category: 'Electronics',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 4,
                },
                {
                    id: '1009',
                    code: 'cm230f032',
                    name: 'Gaming Set',
                    description: 'Product Description',
                    image: 'gaming-set.jpg',
                    price: 299,
                    category: 'Electronics',
                    quantity: 63,
                    inventoryStatus: 'INSTOCK',
                    rating: 3,
                },
            ],
        };
    },
});
</script>
