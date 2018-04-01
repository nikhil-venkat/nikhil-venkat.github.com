let Vue = require('vue/dist/vue');
let axios = require('axios/dist/axios');
let VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);

let getComponentData = function () {
    return new Promise(function (resolve, reject) {
        let api = 'https://api.mongolab.com/api/1/databases/t_website/collections/t_resume?apiKey=Ty71bCX96vKu8p9bjK2dX2OMqZa2Lk3I';
        Vue.axios.get(api).then(function(response) {
            if (response) {
                resolve(response.data[0].pageData.info);
            } else {
                reject('error');
            }
        });
    });
};

let init = function(data) {
    Vue.component('resume', {
        template: `<div><h1> {{title}} </h1>
        <ul>
            <li v-for="item in componentData">
                {{ item.title }}: {{ item.skills }}
            </li>
         </ul><hr>
        </div>`,
        props: ['page','title'],
        data: function () {
            return { 
                componentData: data
            };
        }
    });
};

getComponentData()
    .then(function(content){
        init(content);		
    });
