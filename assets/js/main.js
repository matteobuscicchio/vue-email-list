let app = new Vue({
    el: '#eMail_list',
    data: {
        eMailArray:[],
    },

    methods:{

        eMailArrayGeneartor: function(number){
            for (var index = 0; index < number; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(index){
                    app.eMailArray.push(index.data.response);
                    console.log(index.data.response);
                })
            }
      
        },

    },
    
    mounted(){
        const request = 10;
        this.eMailArrayGeneartor(request);
    }
})