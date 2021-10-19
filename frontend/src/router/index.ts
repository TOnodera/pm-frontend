import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProjectsIndex from '../views/projects/Index.vue';
import ProjectCreate from '../views/projects/Create.vue';
import MembersIndex from '../views/members/Index.vue';
import MemberCreate from '../views/members/Create.vue';

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

    {
        path: '/members',
        name: 'MembersIndex',
        component: MembersIndex,
    },
    {
        path: '/members/create',
        name: 'MemberCreate',
        component: MemberCreate,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
