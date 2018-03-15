class samochody{
    constructor(marka, model){
        this.marka = marka;
        this.model = model;
    }
}

class garaz{
    constructor(lista){
        this.lista = lista;
        this.samochody = [];

    }
}

garaz.samochody.push({marka: "Opel", model: "Vectra"});
garaz.samochody.push({marka: "Toyota", model: "Corolla"});
garaz.samochody.push({marka: "Fiat", model: "Tipo"});
garaz.samochody.push({marka: "Audi", model: "Q7"});

console.log(garaz);