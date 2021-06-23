<template>
  <div id="calendar-week">
    <v-card
      class="d-flex flex-row justify-space-between my-6 mx-auto"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      elevation="2"
      outlined
    >
      <CalendarDay
      v-for="day in sharedState.seedData"
      :key=day.id
      :day="day"/>
    </v-card>
  </div>
</template>

<script>
import { store } from '../../data/WeekCalendar/store.js';
import CalendarDay from './CalendarDay';

export default {
  name: 'CalendarWeek',
  data (){
    return {
      sharedState: store.state
    }
  },
  components: {
    CalendarDay
  }
}
</script>

<style lang="scss" scoped>
#calendar-week{

}
</style>
