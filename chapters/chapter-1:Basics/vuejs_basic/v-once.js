
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

        submitForm(event){

         event.preventDefault();
         console.log(event.target);// if you press event.target you get all the form in the console
         console.log(event.target.elements);

         //get all the values by their name of the lements(name,name2,name3)
         this.address = event.target.elements.address.value;
         this.phone = event.target.elements.phone.value;
         this.email = event.target.elements.email.value;

        },

        setName(event,lastname){

            this.name = event.target.value + ' ' + lastname;
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


    }
    
    });
    
    app.mount('#vuejs-basics')