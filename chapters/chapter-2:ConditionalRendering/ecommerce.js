

var app = Vue.createApp({

//data

data(){
    return{

        cart: 0,

        listItems : [
            {id:1, name:'car',qty: 0,description:''},
            {id:2, name:'car_blue',qty: 10,description:''},
            {id:3, name:'car_green',qty: 1,description:''},
            {id:4, name:'car_white',qty: 10,description:''},

        ]
    }
},

//methods

methods:{

    // form submit method
    formSubmit(event){

        let id = this.listItems[this.listItems.length-1].id + 1;
        let name = event.target.elements.name.value;
        let qty = event.target.elements.numb.value;
        let description = event.target.elements.description.value;

        let insertedItem = {id:id, name:name, qty:qty, description:description};

        this.listItems.push(insertedItem);


    },

    //increment quantities
    incrementItem(value){
        this.listItems[value].qty ++;
        this.cart = this.cart+1;
    },

    //decrement quantities
    decrementItem(value){
        this.listItems[value].qty --;
        this.cart = this.cart-1;
    },

         },

//computed properties

computed:{
    cartCount(){
        
        return this.cart;
    }
}

//watchers


});


app.mount('#ecommerce');