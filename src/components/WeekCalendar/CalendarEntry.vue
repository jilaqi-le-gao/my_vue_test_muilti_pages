<template>
  <v-container
  id="calendar-entry"
  class='d-flex justify-center'
  fluid>
    <v-card
      width="400px">
      <v-text-field
        label="New Event"
        hide-details="auto"
        v-model="inputEntry"
        :rules="[rules.required]"
      ></v-text-field>
      <v-card-title
        class="justify-center">
        Day of Event: {{ titleOfActiveDay }}
      </v-card-title>
      <v-card-text
        align="center"
        justify="space-around"
        >
        <v-btn
          elevation="2"
          color="primary"
          @click="submitEvent(inputEntry)"
          depressed>
          Submit
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import  {store}  from '../../data/WeekCalendar/store.js';
export default {
  data () {
    return {
      inputEntry: '',
      rules: {
        required: value => !!value || 'Required.',
      }
    }
  },
  computed: {
    titleOfActiveDay () {
      return store.getActiveDay().fullTitle;
    }
  },
  methods: {
    submitEvent (eventDetails) {
      if (this.inputEntry != ''){
        store.submitEvent(eventDetails);
        this.inputEntry = '';
      }
    }
  }
}
</script>

<style  lang="scss" scoped>
#calendar-entry{

}
</style>
