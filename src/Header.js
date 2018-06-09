const Vue = require('vue/dist/vue');
const axios = require('axios/dist/axios');
const VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);
    
Vue.component('intro', {
    template: `
        <div class="intro">
            <p class="lead" v-html="componentData">
            </p>
            <a href="#" class="displayPic"></a>
        </div>
    `,
    data: function () {
        return { 
            componentData: 'Hello! My name is <a target="_blank" href="https://www.linkedin.com/in/nikhil-venkatraman"> Nikhil</a>, I am an engineer living in the San Francisco bay area. Welcome to my personal webspace!'
        };
    }
});



