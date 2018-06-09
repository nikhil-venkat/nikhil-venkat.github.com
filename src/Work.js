const Vue = require('vue/dist/vue');
const axios = require('axios/dist/axios');
const VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);

const getComponentData = function () {
    return new Promise(function(resolve, reject) {
        const api = 'https://api.mongolab.com/api/1/databases/t_website/collections/t_workExperience?apiKey=Ty71bCX96vKu8p9bjK2dX2OMqZa2Lk3I';
        Vue.axios.get(api).then(function(response) {
            if (response) {
                resolve(response.data[0].pageData.info);
            } else {
                reject('error');
            }
        });
    });
};

const init = function(data) {
    Vue.component('work', {
        template: `<div class="work">
        <ul>
            <li class="work-item" v-for="item in componentData">
                <p>
                    <div class="work-item-content">
                        <a  :href="item.url"> {{item.company}}</a>: <span v-html=item.title></span>
                        <p v-html="item.summary"></p>
                        <p>{{item.period}}</p>
                    </div>
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
