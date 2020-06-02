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
        <ion-menu side="end"  contentId="menu">
            <ion-header>
                <ion-toolbar translucent>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item>
                        <ion-icon name="mail" slot="start"></ion-icon>
                        <ion-item @click="test">test</ion-item>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="paper-plane" slot="start"></ion-icon>
                        <ion-label>Outbox</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-icon name="heart" slot="start"></ion-icon>
                        <ion-label>Favorites</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Langage</ion-label>
                        <ion-select :value="$i18n.locale" interface="popover" @ionChange="$i18n.locale = $event.target.value">
                            <ion-select-option value="en">
                                English
                            </ion-select-option>
                            <ion-select-option value="fr">
                                Français
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-list>

            </ion-content>
        </ion-menu>

        <ion-router-outlet id="menu" main></ion-router-outlet>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ['title'],
        methods:{
          test(){
              this.$router.push({name: 'restaurant'})
          }
        },
    }
</script>

<style scoped>

</style>
