<template>
  <v-container>
    <NaviFinder />
        
    <v-row>
      <v-col
        v-for="n in 24"
        :key="n"
        cols="4"
      >
        <NaviItem />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NaviFinder from './NaviFinder.vue';
import NaviItem from './NaviItem.vue';

export default {
  name: "NaviMainPage",
  props: [],
  data () {
    return {
    }
  },
  components: {
    NaviFinder,
    NaviItem    
  },
  methods: {
  }
}
</script>
