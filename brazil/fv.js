export function kutyaKiir(kutya){
    const taroloElem =$(".tartalom")
    taroloElem.append(`
    <div class="card col-lg-4 col-md-6">
        <div class="card-body">
            <h3 class="card-title">Név: ${kutya.nev}</h3>
            <p class="card-text">Kor: ${kutya.kor}</p>
            <p class="card-text">Nem: ${kutya.nem}</p>
            </div>
            <button class="kiv btn btn-success">Kiválaszt</button>
    </div>
    `)
    
}