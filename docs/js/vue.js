var app = new Vue({

    el: "#app",
    data: {
        regions: [{
                id: 1,
                name: "Afryka",
                display: "Afryki",
                picture: "assets/img/coffeeAfrica.jpg"
            },
            {
                id: 2,
                name: "Azja",
                display: "Azji",
                picture: "assets/img/coffeeAsia.jpg"
            },
            {
                id: 3,
                name: "Ameryka łacińska",
                display: "Ameryki Łacińskiej",
                picture: "assets/img/coffeeLatinAmerica.jpg"
            },
            {
                id: 4,
                name: "Ameryka południowa",
                display: "Ameryki Poludniowej",
                picture: "assets/img/coffeeSouthAmerica.jpg"
            },
        ],
        coffees: [{
            name: "Rwanda muteteli",
            price: "27zł/100g",
            region: 1
        }, {
            name: "Tanzania machare",
            price: "29zł/100g",
            region: 1
        }, {
            name: "Kenya kijani kiboko",
            price: "40zł/100g",
            region: 1
        }, {
            name: "Tanzania kilimandżaro",
            price: "19,90zł/100g",
            region: 1
        }, {
            name: "Etiopia sidamo",
            price: "19,50zł/100g",
            region: 1
        }, {
            name: "Papua new guinea korofeigu",
            price: "45zł/100g",
            region: 2
        }, {
            name: "Papua nowa gwinea",
            price: "14,50zł/100g",
            region: 2
        }, {
            name: "Java blue west",
            price: "19,90zł/100g",
            region: 2
        }, {
            name: "Guatemala santa rosa",
            price: "16zł/100g",
            region: 3
        }, {
            name: "Costa rica hacienda sonora",
            price: "18zł/100g",
            region: 3
        }, {
            name: "Dominikana barahona AA",
            price: "22zł/100g",
            region: 3
        }, {
            name: "Cascara",
            price: "75zł/100g",
            region: 3
        }, {
            name: "Nikaragua flores del cafe",
            price: "24zł/100g",
            region: 3
        }, {
            name: "Meksyk magarogype",
            price: "27zł/100g",
            region: 3
        }, {
            name: "Gwatemala lampocoy",
            price: "21zł/100g",
            region: 3
        }, {
            name: "Nikaragua magarogype",
            price: "25zł/100g",
            region: 3
        }, {
            name: "Jamajka blue mountain",
            price: "150zł/100g",
            region: 3
        }, {
            name: "Cuba turquino",
            price: "22zł/100g",
            region: 3
        }, {
            name: "Colombia salgar",
            price: "32zł/100g",
            region: 4
        }, {
            name: "Brazil fazenda moinho",
            price: "62,50zł/100g",
            region: 4
        }, {
            name: "Zielona Arabica mielona",
            price: "9,90zł/100g",
            region: 4
        }, {
            name: "Kolumbia kachalu organic",
            price: "19,90zł/100g",
            region: 4
        }, {
            name: "Ekwador galapagos",
            price: "38zł/100g",
            region: 4
        }, {
            name: "Brazylia carmo",
            price: "22zł/100g",
            region: 4
        }, {
            name: "dupa",
            price: "cycki"
        },]
    }
})