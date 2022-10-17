const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('index.html', () =>{
    beforeEach(() =>{
        document.documentElement.innerHTML = html.toString()
    })

    test('it has a title', () =>{
        let title = document.querySelector('#title')
        expect(title.textContent).toBe('Anime Quote Generator')
    })

    test('it has a button', () =>{
        let button = document.querySelector('button')
        expect(button).toBeTruthy()
    })
    
    test('button has text before it', () =>{
        let buttonText = document.querySelector('#button-text')
        expect(buttonText.textContent).toBe('Press this button to generate a random quote:')
    })
})
