let displayButton = document.querySelector('#quote-generator')

 displayButton.addEventListener('click', (e) =>{
  e.preventDefault()
  getAnime()
})
function getAnime(){
  let quotes = document.querySelector('#character-quote')
  let anime = document.querySelector('#character-anime')
  let character = document.querySelector('#character-name')

  fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          quotes.textContent = data.quote
          anime.textContent = data.anime
          character.textContent = data.character
            })
}

          
