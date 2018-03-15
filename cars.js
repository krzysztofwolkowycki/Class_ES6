class pojazd {
  constructor(typ, color, silnik){
    this.typ = typ;
    this.color = color;
    this.silnik = silnik;
    this.licznik = 0;
  }
  rodzaj(){
    return "Pojazd marki: " + this.typ;
  }
  kolor(){
    return "Kolor pojazdu: " + this.color;
  }
  silnikT(){
    if(this.silnik === "elektryczny"){
      return "Rodzaj silnika ekologiczny";
    }
    else{
      return "Rodzaj nie ekologiczny";
    }
  }
 przebieg(min, max){
    min = parseInt(min);
    max = parseInt(max);
    this.licznik = Math.floor( Math.random() * ( max - min + 1 ) + min );
   if(this.licznik <= 2500){
     return "Silnik nie dotarty";
   }
   else{
     return "Przebieg pojazdu: " + this.licznik;
   }
 }
    licznikP(){
    return "Przebieg pojazdu: " + this.licznik;
  }
}


var p = new pojazd("motocykl", "czerwony", "benzyna");
console.log(p.rodzaj());
console.log(p.kolor());
console.log(p.silnikT());
console.log(p.przebieg(1000,10000));
console.log(p.licznikP());



var p1 = new pojazd("samochod", "czarny", "elektryczny");
console.log(p1.rodzaj());
console.log(p1.kolor());
console.log(p1.silnikT());
console.log(p1.przebieg(1000,10000));
console.log(p1.licznikP());

class motocykl extends pojazd {
  constructor(color){
    super("motocykl", color, "bezynowy");
  }
  iloscKol(){
    return "Pojazd jest jednosladem";
  }
}

var m = new motocykl("czerwony");
console.log(m.iloscKol());

class samochod extends pojazd{
   constructor (typ, color, silnik){
     super(typ, color, silnik);
   }
  sila(){
    if(this.color === "czerwony"){
      return "Samochod jest niezniszczalny - " + this.color;
    }
    else {
      return this.color;
    }
  }
  licznikP(liczba){
    super.licznikP();
    return this.licznik += liczba;
    
  }
}

var s = new samochod("Ostra bryka", "czerwony", "elektryczny");
console.log(s.rodzaj());
console.log(s.kolor());
console.log(s.silnikT());
console.log(s.przebieg(1000,10000));
console.log(s.sila());
console.log(s.licznikP(1000000));