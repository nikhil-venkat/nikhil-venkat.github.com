const Vue = require('vue/dist/vue');
const axios = require('axios/dist/axios');
const VueAxios = require('vue-axios');
Vue.use(VueAxios,axios);


require('./Header');
require('./About');
require('./Resume');
require('./Work');
require('./Footer');
function render (options) {

    setTimeout(function() {
        Vue.component('site', {
            template: `<div>
                <intro> </intro>
                <about> </about>
                <resume> </resume>
                <work> </work> 
                <foot> </foot> 
            </div>`,
            data: function () {
                return {
                };  
            }
        });
        
        new Vue({
            el: options.el
        });
    }, 900);
}

module.exports = {
    render: render
};
