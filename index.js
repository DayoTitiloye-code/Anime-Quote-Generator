fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
          console.log(quote)
          displayQuote(quote)
        })

function displayQuote(quote) {
  let quotes = document.querySelector('#character-quote')
  let anime = document.querySelector('#character-anime')
  let character = document.querySelector('#character-name')
  
  let displayButton = document.querySelector('#quote-generator')
  let randQuote = quote.quote
  let randCharacter = quote.character
  let randAnime = quote.anime

  displayButton.addEventListener('click', (e) =>{
      e.preventDefault()
      quotes.textContent = randQuote
      anime.textContent = randAnime
      character.textContent = randCharacter

      let description = document.querySelector('section')

      if(description.style.display === 'none'){
            description.style.display = 'block'
      } else {
        description.style.display = 'none'
      }
  })
}
