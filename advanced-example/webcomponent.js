(function () {

    var component = {
        template:
            '<div :style="style" @click="onClick">' +
            '<h1>{{ title }}</h1>' +
            '<span>{{ formatDate }}</span>' +
            '</div>',

        props: {
            title: {
                type: String
            },
            date: {
                type: Date
            }
        },

        computed: {
            formatDate() {
                var day = this.date.getDate();
                var month = this.date.getMonth() + 1;
                var year = this.date.getFullYear();

                return day + '/' + month + '/' + year;
            },
            // criei isso pq não queria gerar um arquivo css externo
            style() {
                return {
                    border: '1px solid red',
                    margin: '10px',
                    padding: '10px',
                }
            }
        }, 
        methods: {
            onClick: function() {
                this.$emit('x-event', this.title);
            }
        }
    };

    // registra o custom element
    Vue.customElement('x-component', component);

})()
