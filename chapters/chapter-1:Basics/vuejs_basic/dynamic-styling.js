const app = Vue.createApp({
    //data
    data(){

        return{

            boxA: false,
            boxB: false,
            boxC: false

        };


    },



    //methods

    methods:{

        box(box){

            if (box === 'A'){
                this.boxA = !this.boxA;
            }
            else if(box === 'B'){
                this.boxB = !this.boxB;
            }
            else if(box === 'C'){
                this.boxC = !this.boxC;
            }

        }
    }

    //computed properties

    //watchers

});


app.mount('#styling');