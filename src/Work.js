let Vue = require('vue/dist/vue');
let axios = require('axios/dist/axios');
let VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);

let getComponentData = function () {
    return new Promise(function(resolve, reject) {
        let api = 'https://api.mongolab.com/api/1/databases/t_website/collections/t_workExperience?apiKey=Ty71bCX96vKu8p9bjK2dX2OMqZa2Lk3I';
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
    Vue.component('work', {
        template: `<div>
        <ul>
            <li v-for="item in componentData">
                <p>
                    <blockquote>
                        <a  :href="item.url"> {{item.company}}</a>: <span v-html=item.title></span>
                    </blockquote>
                    <p v-html="item.summary"></p>
                    <span>{{item.period}}</span>
                </p>
            </li>
         </ul><hr>
        </div>`,
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
