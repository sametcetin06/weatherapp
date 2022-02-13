<template>
  
	<v-dialog v-model="dialog" transition="dialog-transition" max-width="1300" scrollable persistent>
		<v-card>
			<v-card-title center>
                <v-spacer></v-spacer>
                Detaylı Gösterim ({{ weather.date }})
				<v-toolbar flat dense>
					<v-spacer></v-spacer>
					<v-card-actions>
					<v-btn small class="mr-n5" outlined icon @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
					</v-card-actions>
				</v-toolbar>
			</v-card-title>
            <v-divider></v-divider>
			<v-card-text class="mt-5">
                <v-row width="100%">
                    <v-col cols="12" md="3">
                        <h4 class="mb-4" style="text-align: center;"> Detay </h4>
                            <v-card
                                class="mx-auto elevation-2"
                                max-width="620"
                                outlined
                            >
                                <v-list-item>
                                    <v-list-item-content>
                                        <div class="text-overline mb-4">
                                        {{ weather.date }}
                                        </div>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['avgtempC'] }} °C / {{ weather['avgtempF'] }} F </v-list-item-title>
                                        <v-list-item-subtitle>Ortalama Sıcaklık</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['maxtempC'] }} °C / {{ weather['maxtempF'] }} F </v-list-item-title>
                                        <v-list-item-subtitle>Maksimum Sıcaklık</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['mintempC'] }} / {{ weather['mintempF'] }} </v-list-item-title>
                                        <v-list-item-subtitle>Minumum Sıcaklık</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['sunHour'] }}</v-list-item-title>
                                        <v-list-item-subtitle>Güneş Saati</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['astronomy'][0]['sunrise'] }} / {{ weather['astronomy'][0]['sunset'] }}</v-list-item-title>
                                        <v-list-item-subtitle>Gün Doğumu / Batımı</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['astronomy'][0]['moonrise'] }} / {{ weather['astronomy'][0]['moonset'] }}</v-list-item-title>
                                        <v-list-item-subtitle>Ay Doğumu / Batımı</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6 mb-1"> {{ weather['astronomy'][0]['moon_phase'] }} / {{ weather['astronomy'][0]['moon_illumination'] }}</v-list-item-title>
                                        <v-list-item-subtitle>Ay Evresi / Ay Aydınlatması</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                            </v-card>
                    </v-col>
                    <v-col cols="12" md="9">
                        <h4 class="mb-4" style="text-align: center;"> Saatlik Gösterim </h4>
                        <v-row>
                            <v-data-table
                                :headers="headers"
                                :items="weather.hourly"
                                hide-default-footer
                                class="elevation-1"
                            >
                                <template v-slot:[`item.icon`]="{ item }">
                                    <v-list-item-avatar rounded color="grey">
                                    <img :src="item.weatherIconUrl[0]['value']" alt="">
                                    </v-list-item-avatar>
                                </template>
                            </v-data-table>
                        </v-row>
                    </v-col>
                </v-row>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
    name: 'detailDialog',
    data () {
        return {
            dialog: false,
            headers: [
                { text: '', value: 'icon' },
                { text: 'Zaman', value: 'time' },
                { text: 'Sıcaklık (°C)', value: 'tempC' },
                { text: 'Sıcaklık (F)', value: 'tempF' },
                { text: 'Nem', value: 'humidity' },
                { text: 'Yağış (Inches)', value: 'precipInches' },
                { text: 'Yağış (MM)', value: 'precipMM' },
                { text: 'Basınç', value: 'pressure' },
                { text: 'Basınç (Inches)', value: 'pressureInches' },
                { text: 'Çiy Oluşma Derecesi (°C)', value: 'DewPointC' },
                { text: 'Çiy Oluşma Derecesi (F)', value: 'DewPointF' },
                { text: 'Hissedilen Sıcaklık (°C)', value: 'FeelsLikeC' },
                { text: 'Hissedilen Sıcaklık (F)', value: 'FeelsLikeF' },
                { text: 'Isı İndeksi (°C)', value: 'HeatIndexC' },
                { text: 'Isı İndeksi (F)', value: 'HeatIndexF' },
                { text: 'Rüzgar Soğutması (°C)', value: 'WindChillC' },
                { text: 'Rüzgar Soğutması (F)', value: 'WindChillF' },
                { text: 'Rüzgar Kuvveti (Kmp/h)', value: 'WindGustKmph' },
                { text: 'Rüzgar Kuvveti (M)', value: 'WindGustMiles' },
                { text: 'Sis Olasılığı', value: 'chanceoffog' },
                { text: 'Donma Olasılığı', value: 'chanceoffrost' },
                { text: 'Yüksek Sıcaklık Olasılığı', value: 'chanceofhightemp' },
                { text: 'Bulutlu Olma Olasılığı', value: 'chanceofovercast' },
                { text: 'Yağmur Yağma Olasılığı', value: 'chanceofrain' },
                { text: 'Kurutma Olasılığı', value: 'chanceofremdry' },
                { text: 'Kar Olasılığı', value: 'chanceofsnow' },
                { text: 'Güneşli Olma Olasılığı', value: 'chanceofsunshine' },
                { text: 'Gök Gürültüsü Olasılığı', value: 'chanceofthunder' },
                { text: 'Rüzgar Olma Olasılığı', value: 'chanceofwindy' },
                { text: 'Bulut Örtüsü', value: 'cloudcover' },
                { text: 'Görüş Mesafesi', value: 'visibility' },
                { text: 'Görüş Mesafesi (M)', value: 'visibilityMiles' },
                { text: 'Rüzgar Yönü', value: 'winddir16Point' },
                { text: 'Rüzgar Yönü Derece', value: 'winddirDegree' },
                { text: 'Rüzgar Hızı (Kmp/h)', value: 'windspeedKmph' },
                { text: 'Rüzgar Hızı (M)', value: 'windspeedMiles' }
            ]
        }
    },
    props: {
        weather: {
            required: true
        }
    },
    methods: {
        openDialog() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        }
    }
}
</script>