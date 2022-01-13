
const app = Vue.createApp({

    //Data
    
    data(){
    
        return{
    
            navbarOptions : 'options',
            bindLink : 'https://www.google.com',
            score: 1,
            htmlContent : '<h2>tag element outputting through vue</h2>'
    
        };
        
    
    },
    
    //Methods options to define functions(not a function)

    methods:{

        outputOptions(){

            const randomNumber = Math.random();
            return randomNumber

        },

        outputScore(){

            const score = this.score;//refers to score inside data function
            return score

        },

        incrementScore(){
            this.score = this.score+1
        },

        decrementScore(){
            this.score = this.score-1
        }


    }
    
    });
    
    app.mount('#vuejs-basics')