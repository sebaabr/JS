const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search pl.json and filter it
const searchMiasto = async searchText =>{
    try{
    const data = await fetch('./data/pl.json'); 
    const miasta = await data.json();


    let matches = miasta.filter(miasto => {
        const regex = new RegExp(`${searchText}`, `gi`);
        return miasto.city.match(regex); 
    });

    if(!matches) return;


    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML='';    
    };

// console.log(matches);
outputHTML(matches);

    } catch(err){
        console.log(err.message);
    }


}

//show result
const outputHTML = matches =>{
    if(matches.length > 0){
        const html = matches.map(match => 
            `<div class="card card-body mb-1" data-miasto="${match.city}">
            <h4><span class="text-primary">${match.city}</span> (${match.admin_name}) </h4><small>Lat: ${match.lat} / Long: ${match.lng}</small>
        </div>`
        ).join('');
        // console.log(html);
        matchList.innerHTML = html;
    }

}

matchList.addEventListener('click', function(e){
    const el = e.target.closest('.card');

    if(!el) return;
    console.log(el.dataset.miasto);


})


search.addEventListener('input', () => searchMiasto(search.value));