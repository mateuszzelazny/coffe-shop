let app = new Vue({

    el: "#app",
    data: data,
    methods:{
        bestCoffee:()=>{
            best = 0;
            data.coffees.forEach((coffee)=>{
                if(parseFloat(coffee.price.split('zł')[0].replace(',','.'))>parseFloat(data.coffees[best].price.split('zł')[0].replace(',','.'))){
                    best=coffee.id-1;
                }
            })
            return best;
        },
        recentCoffee:()=>{

            best = 1;
            data.coffees.forEach((coffee)=>{
                if(parseFloat(coffee.bought)>parseFloat(data.coffees[best].bought)){
                    best=coffee.id;
                }
            })
            return best;
        }
    }
})