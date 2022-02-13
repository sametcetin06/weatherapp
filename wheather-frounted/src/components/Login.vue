<template>
  <v-app>
    <v-main style="overflow: hidden;">
      <v-container class="fill-height" fluid >
        <img class="login-bg" src="https://www.barikat.com.tr/images/arkaplanlar/bilgi.jpg" alt="">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
              <!-- :loading="is_loading" :disabled="is_loading" -->
            <v-card tile >
              <v-row no-gutters >
                <v-col cols="4" :xs="4" :sm="4" class="logo" align-self="center" v-if="!$vuetify.breakpoint.mdAndDown">
                  <img src="https://www.barikat.com.tr/images/barikat/barikat-tr-logo.png">
                </v-col>
                <v-col :cols="$vuetify.breakpoint.mdAndDown ? 12 : 8" :xs="12">
                  <v-card-title>
                    Barikat Hava Durumu Uygulaması
                  </v-card-title>
                  <v-card-title style="padding-top: 0; margin: 0">
                    <h4 class="subtitle-1"> Tekrar hoşgeldin, lütfen hesabınıza giriş yapınız </h4>
                  </v-card-title>
                  <!--  v-model="valid" -->
                  <v-form ref="form" :lazy-validation="true">
                    <v-card-text>
                        <!-- @keyup.enter="login()" -->
                      <v-text-field
                        outlined
                        dense
                        label="Kullanıcı Adı"
                        placeholder="Kullanıcı Adınızı Giriniz..."
                        prepend-icon="mdi-account"
                        type="text"
                        :rules="[v => !!v || 'Lütfen Kullanıcı Adı Giriniz..']"
                        v-model="credentials.username"
                        @keyup.enter="login()"
                        required
                        ></v-text-field>
                      <v-text-field
                        outlined
                        dense
                        label="Parola"
                        id="password"
                        placeholder="Parolanızı Giriniz..."
                        prepend-icon="mdi-lock"
                        type="password"
                        :rules="[v => !!v || 'Lütfen Parola Giriniz...']"
                        v-model="credentials.password"
                        required
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <span class="caption grey--text text-truncate pl-4">Tavsiye edilen tarayıcı</span>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" class="ml-4">
                            mdi-google-chrome
                          </v-icon>
                        </template>
                        <span>Google Chrome 85+</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" class="ml-4">
                          mdi-firefox
                          </v-icon>
                        </template>
                        <span>Mozilla Firefox 83+</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" class="mx-4">
                          mdi-apple-safari
                          </v-icon>
                        </template>
                        <span>Apple Safari 14+</span>
                      </v-tooltip>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" class="mr-2" outlined @click.stop="login">Giriş Yap</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthService from 'app-services/AuthService'

export default {
    name: 'login',
    data() {
        return {
            credentials: {
              username: null,
              password: null
            }
        }
    },
    methods: {
        login () {
          AuthService.login(this.credentials).then(res => {
            console.log('res', res);
          }).catch(err => {
            console.log('err', err);
          })
            // this.$router.push({ name: 'dashboard' })
        }
    },
    mounted() {
        console.log('LOGIN PAGE MOUNTED !');
    }
}
</script>

<style scoped>
  .login-bg {
    position: absolute;
    left: 0;
    overflow-y: hidden;
    width: 100%;
    height: auto;
    opacity: 0.75;
  }
  .fill-height {
    overflow: hidden;
  }
  .logo {
    padding: 0;
    margin: 0;
    text-align: center;
  }
  .logo img {
      width: 85%;
  }
</style>