import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Projects from '../views/projects/Index.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
