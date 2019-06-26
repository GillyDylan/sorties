// All sorties Pages
import Feed from './../components/pages/Feed.vue'
import Auth from './../components/pages/Auth.vue'
import Accueil from './../components/pages/Accueil.vue'

// Routes
const routes = [
    { path: '/',     component: Feed, meta: { requiresAuth: true } }, // Feed Page
    { path: '/Accueil', component: Accueil }, // Auth Page
    { path: '/auth', component: Auth } // Auth Page
]

export default routes