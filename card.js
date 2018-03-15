class card{
    constructor(wlasciciel, wizytowki){
        this.wlasciciel = wlasciciel;
        this.wizytowki =[];
    }
}
class mainCard{
    constructor(email, telefon){
        this.email = email;
        this.telefon = telefon;
    }
}

class ownCard extends mainCard{
    constructor()
}