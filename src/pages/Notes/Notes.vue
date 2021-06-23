<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card
              class="pa-2">
              Notes
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-2">
              TimeStamp
            </v-card>
          </v-col>
        </v-row>

        <v-row
          v-for="(note, index) in notes"
          :key="index"
          >
          <v-col>
            <v-card
              class="pa-2">
              {{ note }}
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-2">
              {{ timestamps[index] }}
            </v-card>
          </v-col>
        </v-row>


        <v-row class="d-flex my-6">
          <v-text-field
            label="Input Note Here"
            v-model="input"
            @keyup.enter="monitorEnterKey"
            hide-details="auto"
          ></v-text-field>
        </v-row>

        <v-row class="d-flex justify-center mx-6">
          <v-chip>
            Note count: {{ noteCount }}
          </v-chip>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'Notes',
  components: {
  },
  data () {
    return {
      input: '',
    }
  },
  methods: {
    monitorEnterKey () {
      this.$store.dispatch('Notes/addNote', this.input);
      this.$store.dispatch('Notes/addTimestamp', new Date().toLocaleString());
      this.input = '';
    },
  },
  computed: {
    noteCount () {
      return this.$store.getters['Notes/getNoteCounts'];
    },
    notes() {
      return this.$store.getters['Notes/getNotes'];
    },
    timestamps() {
      return this.$store.getters['Notes/getTimestamps'];
    }
  }
}
</script>

<style>
</style>
