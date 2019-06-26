// All sorties Pages
import Feed from './../components/pages/Feed.vue'
import Auth from './../components/pages/Auth.vue'

// Routes
const routes = [
    { path: '/',     component: Feed, meta: { requiresAuth: true } }, // Feed Page
    { path: '/auth', component: Auth } // Auth Page
]

export default routes