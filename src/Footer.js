const Vue = require('vue/dist/vue');
const axios = require('axios/dist/axios');
const VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);
	
Vue.component('foot', {
    template: `
        <div>
            <p class="footer text-center" v-html="componentData"> </p>
        </div>
    `,
    data: function () {
        return { 
            componentData: 'Nikhil-Venkat '+ new Date().getFullYear() + ' &copy; Powered by <a target="_blank" href="https://vuejs.org/">Vue.js</a>'
        };
    }
});