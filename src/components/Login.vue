<template>
    <ion-content>

        <ion-grid>
            <ion-row justify-content-center>

                <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div v-if="errorLogin">
                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>{{$t('login.error')}}</ion-card-title>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-text color="danger"><img src="/images/icons/cancel.png"
                                                              style=" margin-right:10px;width : 5% ; height : 5%;display:inline-block"
                                                              alt="error">{{$t('login.errorMsg')}}
                                </ion-text>

                            </ion-card-content>
                        </ion-card>
                    </div>
                    <div text-center>
                        <h4>{{$t('login.login')}}</h4>
                    </div>
                    <div padding>
                        <ion-item>
                            <ion-label position="floating">{{$t('login.username')}}</ion-label>
                            <ion-input required @ionChange="username=$event.target.value" type="text"
                                       Position></ion-input>
                        </ion-item>


                        <ion-item>
                            <ion-label position="floating">{{$t('login.password')}}</ion-label>
                            <ion-input required @ionChange="password=$event.target.value" type="password"></ion-input>
                        </ion-item>
                    </div>


                    <div padding>
                        <ion-button @click="loginUser" size="large" expand="block">{{$t('login.login')}}</ion-button>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>

<script>
    import {USERS} from "../datas/users";
    import {mapActions,mapGetters} from 'vuex'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                errorLogin: false,
                isOk: false
            }
        },
        computed:{
            ...mapGetters(['idUser']),
        },
        methods: {
            ...mapActions(['loginStore']),
            loginUser() {
                USERS.forEach(e => {
                    if (e.username == this.username && e.password == this.password) {
                        this.loginStore({id: e.id, username: e.username, name: e.name})
                        this.isOk = true
                        this.$router.back()
                    }
                })

                this.errorLogin = !this.isOk


            },
        },
        components: {}
    }
</script>

<style scoped>
    ion-grid {
        width: 100%;
        height: 100%;
        background: #dfdfdf;
    }

    ion-row {
        height: 100%;
    }

    ion-col {
        border: 1px solid #488aff;
        background: #fff;
    }

    ion-button {
        font-weight: 300;
    }

    @media (min-width: 240px) and (max-width: 768px) {
        ion-grid {
            background: #fff;
        }

        ion-col {
            border: none;
        }
    }

</style>
