(function () {
    
    var component = {
        template: '<p>{{ message }}</p>',
        data: function () {
            return {
                message: 'Hello! I\'m a custom element'
            }
        }
    };

    Vue.customElement('x-component', component);
    
})()
