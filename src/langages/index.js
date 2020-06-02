import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    en: {
        modalHistory:{
            yes:'Yes',
            no:'No',
            message:'Do you really want to erase your history?',
            header:'Erase history'
        },
        login: {
            errorData:'Must not be empty',
            login: 'Login',
            logout: 'Logout',
            username:'Username',
            password:'password',
            error:'Error',
            errorMsg :'Wrong Username or Password'
        },
        button: {
            ok: 'Ok',
            cancel: 'Cancel',
        },
        searchView: {
            title: 'Search',
            search: 'Search',
            findTable: 'Find a table',
            location: 'Location',
            currentLoc: 'Current Location',
            foodStyle: 'Food Style',
            booking: 'Booking',
            start: 'Start',
            end: 'To',
            people: 'People'
        },
        bookingView: {
            error:'You have to login to show your booking informations',
            title: 'Booking',
            listHeader: 'Booking informations',
            currentBooking: 'Your booked restaurants',
            history: 'History',
            eraseHistory: 'Erase History',
            rebook: 'Rebook',
            delete: 'Delete',
            cancel: 'Cancel'
        }
    },
    fr: {
        modalHistory:{
            yes:'Oui',
            no:'Non',
            message:'Voulez vous vraiment effacer votre historique?',
            header:"Effacer l'historique"
        },
        login: {
            errorData:'Ne doit pas être vide',
            login: 'Connexion',
            logout: 'Deconnexion',
            username:"Nom d'utilisateur",
            password:'Mot de passe',
            error:'Erreur',
            errorMsg :"Mauvais Nom d'utilisateur ou mot de passe"
        },
        button: {
            ok: 'Ok',
            cancel: 'Annulé',
        },
        searchView: {
            title: 'Rechercher',
            search: 'Chercher',
            findTable: 'Cherche un restaurant',
            location: 'Position',
            currentLoc: 'Position Actuelle',
            foodStyle: 'Type de nourriture',
            booking: 'Réservation',
            start: 'Début',
            end: 'À',
            people: 'Personne'
        },
        bookingView: {
            error:'Vous devez vous connecter pour afficher vos informations de réservation',
            title: 'Réservations',
            listHeader: 'Informations de Réservation',
            currentBooking: 'Vos réservations',
            history: 'Historique',
            eraseHistory: "Vider l'historique",
            rebook: 'ReFaire',
            delete: 'Effacer',
            cancel: 'Annulé'
        }
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: (localStorage.lang) ? localStorage.lang : 'en', // set locale
    messages, // set locale messages
})

export default i18n
