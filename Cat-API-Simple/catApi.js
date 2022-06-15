const btnCat = document.getElementById('cat_btn');


btnCat.addEventListener("click", getCat)

function getCat(){
    
    fetch('Https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src', `${catsImgUrl}`)
    
        
        let boxCat = document.querySelector('#boxCat');
        boxCat.innerHTML = '';
        boxCat.appendChild(catsImgEl);
        
    })
    .catch(err => console.log(err))
}

