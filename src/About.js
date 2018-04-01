let Vue = require('vue/dist/vue');
let axios = require('axios/dist/axios');
let VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);

let getComponentData = function () {
    return new Promise(function(resolve, reject){
        let api = 'https://api.mongolab.com/api/1/databases/t_website/collections/t_about?apiKey=Ty71bCX96vKu8p9bjK2dX2OMqZa2Lk3I';
        Vue.axios.get(api).then(function (response) {
            if (response) {
                resolve(response.data[0].pageData.content);
            } else {
                reject('error');
            }
        });
    });
};

let init = function(data) {
    Vue.component('about', {
        template: '<div><h1> About Me </h1><p v-html="componentData">  </p><hr></div>',
        props: ['page'],
        data: function () {
            return { 
                componentData: data
            };
        }
    });
};

getComponentData()
    .then(function (content) {
        init(content);		
    });
