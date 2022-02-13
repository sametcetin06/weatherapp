<template>
    <div>
        <h4 class="mb-4" style="text-align: center;"> {{ weather.date }}</h4>
        <v-card
            class="mx-auto px-2"
            min-width="200"
            max-width="480"
            outlined
        >
            <v-list-item>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        {{ currentCondition.query }}
                        <v-icon right @click="$refs.detail_dialog.openDialog()" > mdi-eye </v-icon>
                    </div>
                    <v-list-item-title class="text-h6 mb-1"> {{ weather['avgtempC'] }} °C / {{ weather['avgtempF'] }} F </v-list-item-title>
                    <v-list-item-subtitle>Ortalama Sıcaklık</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1"> {{ weather['maxtempC'] }} °C / {{ weather['maxtempC'] }} F </v-list-item-title>
                    <v-list-item-subtitle>Maksimum Sıcaklık</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1"> {{ weather['mintempC'] }} °C / {{ weather['mintempF'] }} F </v-list-item-title>
                    <v-list-item-subtitle>Minimum Sıcaklık</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6 mb-1"> {{ weather['sunHour'] }} </v-list-item-title>
                    <v-list-item-subtitle>Güneş Saati</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
        <detail-dialog :weather="weather" :ref="'detail_dialog'"></detail-dialog>
    </div>
</template>

<script>
import DetailDialog from './DetailDialog.vue'

export default {
    name: 'daycard',
    props: {
        currentCondition: {
            required: true
        },
        weather: {
            required: true
        }
    },
    components: {
        'detail-dialog': DetailDialog
    }
}
</script>