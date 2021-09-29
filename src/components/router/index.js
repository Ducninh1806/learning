import { createRouter, createWebHistory } from "vue-router"

import CompHome from '../layout/CompHome.vue'
import CompUser from '../layout/CompUser.vue'
import CompError from '../layout/CompError.vue'
const routes = [
    {path: '/', component: CompHome},
    {path: '/user', component: CompUser},
    {path: '/:pathMatch(.*)*', component: CompError}
]

const router = createRouter ({
    history: createWebHistory(), 
    routes: routes
})

export default router