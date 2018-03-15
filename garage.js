class samochod{
    constructor(marka, model){
        this.marka = marka;
        this.model = model;
    }
}

class parking{
    constructor(lista){
        this.lista = lista;
        this.samochody = [];
    }
  dodaj(samochod) {
     this.samochody.push(samochod);

  }
}

parking = new parking("Lista samochodw");
parking.dodaj(new samochod("Opel", "Vectra"));

console.log(parking);