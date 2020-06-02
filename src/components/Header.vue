<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>{{title}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-menu side="end" contentId="menu">
            <ion-header>
                <ion-toolbar translucent>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item v-if="!connected" button @click="login">

                        <ion-icon name="log-in" slot="start"></ion-icon>

                        <ion-label>
                            {{$t('login.login')}}
                        </ion-label>
                    </ion-item>
                    <ion-item v-else>
                        <ion-avatar slot="start">
                            <img src="/images/icons/circle.svg">
                        </ion-avatar>
                        <ion-label>
                            <h3>{{username}}</h3>
                            <p>{{name}}</p>
                        </ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="globe" slot="start"></ion-icon>
                        <ion-label>
                            <ion-select :value="$i18n.locale" interface="popover"
                                        @ionChange="$i18n.locale = $event.target.value">
                                <ion-select-option value="en">
                                    English
                                </ion-select-option>
                                <ion-select-option value="fr">
                                    Français
                                </ion-select-option>
                            </ion-select>
                        </ion-label>
                    </ion-item>
                    <ion-item v-if="connected" button @click="logout">

                        <ion-icon name="log-out" slot="start"></ion-icon>

                        <ion-label>
                            {{$t('login.logout')}}
                        </ion-label>
                    </ion-item>

                </ion-list>

            </ion-content>
        </ion-menu>

        <ion-router-outlet id="menu" main></ion-router-outlet>
    </div>
</template>

<script>
    import {mapGetters ,mapActions} from 'vuex'

    export default {
        name: "Header",
        props: ['title'],
        methods: {
            ...mapActions(['logout']),
            login() {
                this.$router.push({name: 'login'})
            }
        },
        computed: {
            ...mapGetters(['connected', 'username', 'name'])
        }

    }
</script>

<style scoped>
    .login-modal {
        padding: 30px;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
