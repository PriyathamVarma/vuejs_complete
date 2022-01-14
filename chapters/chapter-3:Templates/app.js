
const app = Vue.createApp({});

//components
    app.component('sample-component',{

        //tempaltes
        template:`
        <div class="row">
        <div class="col-sm-4">
            <h3> ADD Items</h3>
    
            <!-- form for submitting the items -->
            <form v-on:submit.prevent="formSubmit">
    
                <div class="mb-3 mt-3">
                  <label for="name">Name of the product:</label>
                  <input type="name" class="form-control" id="name" placeholder="Enter product name" name="name">
                </div>
    
                <div class="mb-3">
                  <label for="numb">Quantity:</label>
                  <input type="number" class="form-control" id="numb" placeholder="Enter Quantity" name="numb">
                </div>
    
                <div class="mb-3">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter Description" name="description">
                  </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
         
        </div>
        <div class="col-sm-8">
    
            <h3> List of Items </h3> <span> CART: {{cartCount}}</span>
    
            <ul><!-- product cards ---->
        <div class="card" v-for="(items,index) in listItems" :key="index">
            <div class="card-body">
                <h4 class="card-title">{{items.name}}</h4>
                <hr/>
                <div class="row">
                    <div class="col-sm-6">
                        <p class="card-text">{{items.qty}}</p>
                        <span>
                            <button class="btn btn-primary" @click="incrementItem(index)"  > ADD </button>
                            <button class="btn btn-danger" @click="decrementItem(index)"> Remove </button>
                        </span>
                    </div>
                    <div class="col-sm-6">
                        <h5>Product Description:</h5>
                        <p>{{items.description}}</p>
                    </div>
                </div>               
             </div>
        </div>
        
        </ul>
      
        </div>
      </div>`,

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
        
        });
    
    
    app.mount('#ecommerce');