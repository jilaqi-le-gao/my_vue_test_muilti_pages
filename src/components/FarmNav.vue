<template>
  <v-navigation-drawer
    right
    app
  >
    <v-list>
      <v-list-item
        v-for="n in 5"
        :key="n"
        link
      >
        <v-list-item-content>
          <v-list-item-title>Item {{ n }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <v-timeline
      dense
    >
      <v-timeline-item>timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
    </v-timeline>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'FarmNav',
    //
  }
</script>
