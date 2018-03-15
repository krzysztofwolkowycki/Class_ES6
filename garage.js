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
  usun(marka){
      for(var i= 0; i<this.samochody.length; i++){
          if(this.samochody[i].marka === marka){
              this.samochody.splice(i,1);
              return;
          }
      }
  }
}

parking = new parking("Lista samochodw");
parking.dodaj(new samochod("Opel", "Vectra"));
parking.dodaj(new samochod("Toyota", "Corolla"));
parking.dodaj(new samochod("Fiat", "Tipo"));
parking.dodaj(new samochod("Audi", "Q7"));
parking.dodaj(new samochod("Opel", "Corsa"));
console.log(parking);

parking.usun("Opel");

console.log(parking);