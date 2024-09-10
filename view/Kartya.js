export default class Kartya {
    //adattagok
    #kutyaAdat = {};
    #szuloElem;
    
    //constructor
    constructor(adat, szuloElem){
        this.#kutyaAdat = adat
        this.#szuloElem = szuloElem
        this.kutyaKiir()
        this.gombELEM = $(".kiv:last")
        this.gombKattint()
    }


    //tagfüggvények
    kutyaKiir(){
        this.#szuloElem.append(`
        <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                <h3 class="card-title">Név: ${this.#kutyaAdat.nev}</h3>
                <p class="card-text">Kor: ${this.#kutyaAdat.kor}</p>
                <p class="card-text">Nem: ${this.#kutyaAdat.nem}</p>
                </div>
                <button class="kiv btn btn-success">Kiválaszt</button>
        </div>
        `)
    }

    gombKattint(){
        this.gombKattint.on("click", ()=>{
            console.log(this)
            const esem = new CustomEvent ("kivalaszt", {detail: this.#kutyaAdat})
            window.dispatchEvent(esem);
        })
    }

    //a this használatában van a különbség a nyilfüggvény és a function névtelen függvény között
    //function esetén a this azt az elemet jelenti amelyik az eseményt kiváltotta (html elem jellemzően)
    //nyilfüggvény esetén, a fv-t körülölelő osztályára fog mutatni
    

}