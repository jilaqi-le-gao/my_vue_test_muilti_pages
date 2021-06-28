<template>
  <v-app id="inspire">

    <v-navigation-drawer
      app
      width="300"
    >
      <v-navigation-drawer
        absolute
        color="grey lighten-3"
        mini-variant
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4"
          color="grey darken-1"
          size="36"
        ></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
        ></v-avatar>
      </v-navigation-drawer>

      <v-sheet
        color="grey lighten-5"
        height="128"
        width="100%"
      ></v-sheet>

      <v-list
        class="pl-14"
        shaped
      >
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
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover
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
    </v-navigation-drawer>

    <v-main>
        <v-container
          fill-height
          fluid
        >
          <v-sheet
            color="grey"
            elevation="1"
            height="40%"
            width="100%"
          ></v-sheet>
          <v-card
            color="white"
            elevation="1"
            height="60%"
            width="100%"
          > 
            <v-card
            height="75%"
            width="100%">
              <div
              ref="hc_container"
              class="hc_container">
              <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
              </div>
            </v-card>
            <v-card
            height="25%"
            width="100%">
              <v-row>
                <v-col
                  cols="12"
                  sm="2"
                  md="2"
                  lg="2"
                >
                  <v-menu
                    ref="s_menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="start_time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="start_time"
                        label="起始时间"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu2"
                      :allowed-minutes="allowedStep"
                      v-model="start_time"
                      full-width
                      scrollable
                      format="24hr"
                      min="00:15"
                      :max="end_time"
                      @click:minute="$refs.s_menu.save(start_time)"
                    ></v-time-picker>
                  </v-menu>
                </v-col>

                <v-col
                  cols="12"
                  sm="2"
                  md="2"
                  lg="2"
                >
                  <v-menu
                    ref="e_menu"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="end_time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="end_time"
                        label="结束时间"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu3"
                      :allowed-minutes="allowedStep"
                      v-model="end_time"
                      full-width
                      scrollable
                      :min="start_time"
                      format="24hr"
                      @click:minute="$refs.e_menu.save(end_time)"
                    ></v-time-picker>
                  </v-menu>
                </v-col>
              </v-row>


              <v-row>
              </v-row>


              <v-row>

              </v-row>
            </v-card>
            
          </v-card>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Highcharts from 'highcharts'
  import exportingInit from 'highcharts/modules/exporting'

  exportingInit(Highcharts)

  export default {
    name: 'App',

    components: {

    },
    data() {
      return {
        menu2: false,
        menu3: false,
        end_time: "00:00",
        start_time: "00:15",
        chartOptions: {
          series: [
            {
              data: [1, 2, 3]
            }
          ]
        }
      };
    },
    mounted (){
      // these are tests for refs and get element width and height.
      // console.log(this.$refs.hc_container.parentElement);
      // console.log(this.$refs.chart);
      // console.log(this.$refs.hc_container.parentElement.clientHeight);
      // console.log(this.$refs.hc_container.parentElement.clientWidth);
      // console.log(this.$refs.hc_container.parentElement.getBoundingClientRect());
      // console.log(this.$refs.hc_container.clientWidth);
      window.dispatchEvent(new Event('resize'));
      this.$refs.chart.chart.setSize(null, this.$refs.hc_container.parentElement.clientHeight);
      this.$nextTick(function() {
        window.addEventListener('resize', this.get_hc_height);
        // window.addEventListener('resize', this.getWindowWidth);
        // window.addEventListener('resize', this.getWindowHeight);

        //Init
        // this.getWindowWidth()
        // this.getWindowHeight()
      })
    },
    methods: {
      allowedStep: m => m % 15 === 0,
      get_hc_height () {
        this.$refs.chart.chart.setSize(null, this.$refs.hc_container.parentElement.clientHeight);
      }
      // getWindowWidth(event) {
      //     this.windowWidth = document.documentElement.clientWidth;
      //   },

      // getWindowHeight(event) {
      //   this.windowHeight = document.documentElement.clientHeight;
      // }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.get_hc_height);
      // window.removeEventListener('resize', this.getWindowWidth);
      // window.removeEventListener('resize', this.getWindowHeight);
    },
  };
</script>

<style>
</style>