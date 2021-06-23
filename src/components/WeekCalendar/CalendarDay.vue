<template>
  <v-card
    id='calendar-day'
    class='ma-1 .rounded-t-xl'
    color="#385F73"
    dark
    width="400"
  >
    <v-card-title class="text-h5 " @click="setActiveDay(day.id)">
      {{ day.abbvTitle }}
    </v-card-title>
    <v-card-subtitle>
      {{ day.id }}
    </v-card-subtitle>

    <CalendarEvent
      v-for="(event, index) in day.events"
      :key="index"
      :day="day"
      :event="event"/>
</v-card>
</template>

<script>
import CalendarEvent from './CalendarEvent';
import { store } from '../../data/WeekCalendar/store.js';

export default {
  name: "CalendarDay",
  props: ['day'],
  components: {
    CalendarEvent,
  },
  methods: {
    setActiveDay (dayId) {
      store.setActiveDay(dayId);
    }
  }
}
</script>

<style lang="scss" scoped>
#calendar-day {

}
</style>
