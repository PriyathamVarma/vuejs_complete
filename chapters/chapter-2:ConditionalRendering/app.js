const app = Vue.createApp({
    //data
    data(){

        return{

            listItems:[

                {id:1,name:'varma',address:'NR2 4QG'},
                {id:2,name:'varma',address:'NR2 3HL'},
                {id:3,name:'varma',address:'NR4 7HL'},

            ],

            conditionCheck : 'yess',
        };

    },

    //methods

    methods:{

        addItems(event){

            event.preventDefault();

            let name = event.target.elements.name.value;
            let address = event.target.elements.address.value;
            let id = this.listItems[this.listItems.length-1].id + 1;

            let pushedItem = {id:id,name:name,address:address};
            console.log(pushedItem);

            this.listItems.push(pushedItem);



        },

        deleteItems(value){

            this.listItems.splice(value,1);

        }
    }




});


app.mount('#styling');