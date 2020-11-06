/**Déclaration des pages du site web */
const acceuil = window.httpVueLoader('./components/Acceuil.vue') //page d'acceuil
const signIn = window.httpVueLoader('./components/SignIn.vue') //page de connexion
const enroll = window.httpVueLoader('./components/Enroll.vue') //page d'inscription


//Déclarations des différentes routes
const routes = [
    { path: '/', component: acceuil }, //vers la page d'acceuil
    { path: '/connexion', component: signIn }, //vers la page de connexion
    { path: '/inscription', component: enroll } //vers la page d'inscription
]

//Build du router
const router = new VueRouter({
    routes
})

//Application principal 
var app = new Vue({
    router,
    el: '#spa', //stand for : Single Page Application
    data: {
        status: "0"
    },
    async mounted() {

    },
    methods: {

    }
})