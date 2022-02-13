<template>
    <v-app-bar app>

        <img src="https://www.barikat.com.tr/images/barikat/barikat-tr-logo.png" style="height: 100%">
        <v-spacer></v-spacer>
        <v-toolbar-title>Hava Durumu Uygulaması</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y :close-on-content-click="true" :nudge-width="50">
            <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
                <div class="hidden-sm-and-down mr-2">
                <span>{{ user ? user.full_name : '' }}</span>
                </div>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            </template>
            <v-list dense nav>
                <v-list-item @click="logout()">
                    <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="ml-n5">
                    Çıkış Yap
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'appbar',
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        logout() {
            this.$store.commit('userLogout');
            this.$router.push({ name: 'login' })
        }
    }

}
</script>

<style>

</style>