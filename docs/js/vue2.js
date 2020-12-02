
let app = new Vue({
el:"#app2",
data:data,
methods:{
    currentCoffee:()=>{
        console.log(parseInt(window.location.search.split('=')[1]))
        return parseInt(window.location.search.split('=')[1])

    }
}
});