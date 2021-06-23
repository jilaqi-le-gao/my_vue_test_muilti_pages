<template>
  <v-card
    elevation="2"
    outlined
  >
    <div v-if="!event.edit">
      <v-card-title class="text-h6">
        {{ event.details }}
      </v-card-title>
      <v-card-actions>
        <v-btn
          class="ma-2"
          color="primary"
          @click="editEvent(day.id, event.details)"
        >
          Edit
          <v-icon
            color="green"
            right
          >
            mdi-book-edit
          </v-icon>
        </v-btn>
        <v-btn
          class="ma-2"
          color="primary"
          @click="deleteEvent(day.id, event.details)"
        >
          Delete
          <v-icon
            color="red"
            right
          >
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-actions>
    </div>
    <div v-if="event.edit">
      <v-card-title class="text-h6">
        <v-text-field
          label="Edit Event"
          hide-details="auto"
          v-model="newEventDetails"
          :rules="[rules.required]"
        >{{ event.details }}</v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-btn
          class="ma-2"
          color="primary"
          @click="updateEvent(day.id, event.details, newEventDetails)"
        >
          Confirm
          <v-icon
            color="green"
            right
          >
            mdi-check
          </v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { store } from '../../data/WeekCalendar/store.js';

export default {
  name: 'CalendarEvent',
  props: ['event', 'day'],
  data () {
    return {
      newEventDetails: '',
      rules: {
        required: value => !!value || 'Required.',
      }
    }
  },
  methods: {
    editEvent (dayId, eventDetails) {
      // 这是使得event可以编辑
      store.editEvent(dayId, eventDetails);
    },
    updateEvent (dayId, originalEventDetails, updatedEventDetails) {
      if (updatedEventDetails === '') updatedEventDetails = originalEventDetails;
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      updatedEventDetails = '';
    },
    deleteEvent (dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails);
    }
  }
}
</script>
