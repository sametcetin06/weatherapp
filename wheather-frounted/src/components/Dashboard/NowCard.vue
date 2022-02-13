<template>
  <div>
        <h4 class="mb-4" style="text-align: center;"> Şuanki Hava Durum Bilgisi</h4>
        <v-card
            class="mx-auto px-2"
            max-width="620"
            outlined
        >
            <v-list-item>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                    {{ currentCondition.query }}
                    </div>
                    <v-list-item-title class="text-h6 mb-1"> {{ currentCondition['FeelsLikeC'] }} °C / {{ currentCondition['FeelsLikeF'] }} F </v-list-item-title>
                    <v-list-item-subtitle>Hissedilen Sıcaklık</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    rounded
                    size="80"
                    color="grey"
                >
                    <img :src="currentCondition.weatherIconUrl[0]['value']" :title="currentCondition.weatherDesc[0]['value']">
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1"> {{ currentCondition['temp_C'] }} °C / {{ currentCondition['temp_F'] }} F </v-list-item-title>
                    <v-list-item-subtitle>Şuanki Sıcaklık</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1"> {{ currentCondition['humidity'] }} / {{ currentCondition['pressure'] }} </v-list-item-title>
                    <v-list-item-subtitle>Nem / Basınç</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1"> {{ currentCondition['windspeedKmph'] }} Km-h / {{ currentCondition['windspeedMiles'] }} M </v-list-item-title>
                    <v-list-item-subtitle>Rüzgar Hızı</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

        </v-card>
  </div>
</template>

<script>
export default {
    name: 'nowcard',
    props: {
        currentCondition: {
            required: true
        }
    }
}
</script>