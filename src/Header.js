let Vue = require('vue/dist/vue');
let axios = require('axios/dist/axios');
let VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);
    
Vue.component('intro', {
    template: `
        <div class="intro">
            <p class="lead">
                 {{componentData}}
            </p>
            <a href="#" class="displayPic"></a>
        </div>
    `,
    data: function () {
        return { 
            componentData: 'Hello! My name is Nikhil, I am an engineer living in the San Francisco bay area. Welcome to my personal webspace!'
        };
    }
});



