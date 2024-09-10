import { kutyaLISTA } from "./model/adat.js";
import Kartyak from "./view/Kartyak.js";
const kivKutyaLista = []


const taroloElem = $(".tartalom");
new Kartyak(kutyaLISTA, taroloElem)


//task: gonb működjön c:
$(window).on("kivalaszt",(event)=>{
    console.log(event.detail)
})