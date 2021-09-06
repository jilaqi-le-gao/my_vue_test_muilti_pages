import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#30dff3', //#3eede7
                secondary: '#b0a4e3',
                accent: '#cca4e3',  //#56004f
                selected: "#56004f",
                error: '#ff2121',
                info: '#519a73',
                success: '#9ed048',
                warning: '#f2be45',
                background: '#fffbf0',
            },
            dark: {
                primary: '#fff143',
                background: '#88ada6',
            }
        },
    },
});
