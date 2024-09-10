import { kutyaKiir } from "./fv.js"
import { kutyaLISTA } from "./model/adat.js"
import Kartya from "./view/Kartya.js"
//
let cim = "Minden, amit a kutyákról tudni kell!" // globális, blokkszintű {}
cim = "Minden ami kutya!"
const nev = "Cement"

//var globális, függvény szintű

//írjuk ki a cím alá a cím változó tartalmát
//megfogjuk a HTML elemet
const cimELEM=$("header")
cimELEM.append(`<p>${cim}</p>`)

//kutya adatait szeretném tárolni, név, kor, nem
const kutya1 = {
    nev:"Cement",
    kor:10,
    nem:"Hím"
}

//kutya1={nev:"Aszfalt"} ilyet nem lehet
const taroloElem = $(".tartalom");


