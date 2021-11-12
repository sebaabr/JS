const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search states.json and filter it
const searchStates = async searchText =>{
    const data = await fetch('../data/pl.json') ;
    const miasta = await data.json();


// console.log(miasta);

let matches = miasta.filter(miasto => {
    const regex = new RegExp(`^${searchText}`, `gi`);
    return miasto.city.match(regex); //|| state.abbr.match(regex);
})

// console.log(matches);

if(searchText.length === 0) {
    matches = [];
    matchList.innerHTML='';    
};

// console.log(matches);
outputHTML(matches);

}

//show result
const outputHTML = matches =>{
    if(matches.length > 0){
        const html = matches.map(match => 
            `<div class="card card-body mb-1">
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
    console.log(el.lastElementChild.textContent);

})


search.addEventListener('input', () => searchStates(search.value));