<template>
  <div>
    <h2> {{ storeState.numbers }}</h2>
  </div>
</template>

<script>
import { store } from '../../data/WeekCalendar/store.js';

console.log(store);

export default {
  name: 'NumberDisplay',
  data (){
    return {
      storeState: store.state
    }
  }
}
</script>
