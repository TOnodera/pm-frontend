import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProjectsIndex from '../views/projects/Index.vue';
import ProjectCreate from '../views/projects/Create.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/projects',
        name: 'ProjectsIndex',
        component: ProjectsIndex,
    },
    {
        path: '/projects/create',
        name: 'ProjectCreate',
        component: ProjectCreate,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
