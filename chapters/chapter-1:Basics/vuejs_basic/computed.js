
const app = Vue.createApp({

    //Data
    
    data(){
    
        return{
    
            navbarOptions : 'options',
            bindLink : 'https://www.google.com',
            score: 1,
            htmlContent : '<h2>tag element outputting through vue</h2>',
            name : '',
            address: '',
            phone: '',
            email: '',
            
        };
        
    
    },
    
    //Methods options to define functions(not a function)

    methods:{

        resetbutton(){

            this.name = '';

        },

        outPut(){
            return this.name + "varma";
            
        },

        setName(event,lastname){

            this.name = event.target.value ;
   
        },

        outputOptions(){

            const randomNumber = Math.random();
            return randomNumber

        },

        outputScore(){

            const score = this.score;//refers to score inside data function
            return score

        },

        incrementScore(num){
            this.score = this.score+num
        },

        decrementScore(num){
            this.score = this.score-num
        }


    },

    //computed properties

    computed:{

        computedProps(){
            return this.name + "varma";
        }


    },

    //watchers

    watch:{

        //name(newValue,oldValue)
        name(value){
            console.log(value + "name has changed");
        }
    },
    
    });
    
    app.mount('#vuejs-basics')