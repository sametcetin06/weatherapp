<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <v-container fluid>
          <!-- Search Template Started -->
          <v-row>
              <v-col cols="12" md="3"></v-col>
              <v-col cols="12" md="6">
                  <v-row class="search-city">
                      <v-col cols="12" md="8">
                        <v-text-field
                            v-model="cityName"
                            outlined
                            label="Şehir Adı Giriniz..."
                            placeholder="Ankara"
                            type="text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field
                            v-model="numOfDays"
                            outlined
                            label="Gün Sayısı"
                            placeholder="3"
                            type="number"
                        ></v-text-field>
                      </v-col>
                  </v-row>
              </v-col>
              <v-col cols="12" md="3"></v-col>
          </v-row>
          <!-- Search Template Finished -->
          
          <v-row v-if="weatherData.length > 0">
              <v-col cols="12" md="3">
                  <now-card class="ml-2" :currentCondition="currentCondition"></now-card>
              </v-col>
              <v-col cols="12" md="9">
                  <v-row>
                      <v-col v-for="(weather, index) in weatherData" :key="String(index)">
                        <day-card :currentCondition="currentCondition" :weather="weather"></day-card>
                      </v-col>
                  </v-row>
              </v-col>
          </v-row>

          <!-- Error Template Started -->
          <div style="text-align: center;" v-if="errorMessage">
              <h2> Uyarı !</h2>
              <p>{{ errorMessage }}</p>
          </div>
          <div style="text-align: center;" v-if="cityName && cityName.length <= 2">
              <p>Aramak için en az 3 harf giriniz...</p>
          </div>
          <!-- Error Template Finished -->

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import WeatherService from 'app-services/WeatherService'
import DayCard from './Dashboard/DayCard.vue'
import NowCard from './Dashboard/NowCard.vue'
import AppBar from './AppBar.vue'

export default {
    name: 'dashboard',
    data() {
        return {
            numOfDays: '5',
            weatherData: [],
            cityName: null,
            errorMessage: null,
            currentCondition: null
        }
    },
    methods: {
        getWeatherData () {
            let self = this
            self.clear()
            WeatherService.getWeatherData({ q: this.cityName, num_of_days: this.numOfDays }).then(res => {
                res = res.data.data;
                if (res.error) {
                    self.errorMessage = res.error[0].msg
                } else {
                    self.weatherData = res.weather;
                    self.currentCondition = {...res.current_condition[0], ...res.request[0]};
                }
            }).catch(err => {
                console.log(err);
            })
        },
        search() {
            this.cityName.length > 2 ? this.getWeatherData() : this.clear()
        },
        clear() {
            this.errorMessage = null;
            this.weatherData = [];
            this.currentCondition = null;
        }
    },
    watch: {
        cityName() {
            this.search()
        },
        numOfDays() {
            this.search()
        }
    },
    components: {
        'app-bar': AppBar,
        'now-card': NowCard,
        'day-card': DayCard
    }
}
</script>

<style scoped>
.search-city {
    margin: 1rem 6rem;
}
</style>