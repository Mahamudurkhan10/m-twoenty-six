// function play() {
//     //    step-1 : hide the home screen

//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');
//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground')
//     console.log(playgroundSection.classList)
//     playgroundSection.classList.remove('hidden')

// }
function handlebutton(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    if (playerPressed === 'Escape'){
        gameOver()
    }
    //    get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(playerPressed, expectedAlphabet)
    // check matched or not 
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point')
        const currentScore = getValueById('current-score')
        const updateScore = currentScore +1;
        setValueById('current-score',updateScore)

        // update score:
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText= currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore)
        // const newScore = currentScore +1;
        // currentScoreElement.innerText = newScore; 

        
        // start a new round
        // console.log('you have pressed correctly', expectedAlphabet)
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else {
        console.log('missed. you lost your heart')
        const currentLife = getValueById('lose-life')
        const loseLife = currentLife -1;
         setValueById ('lose-life', loseLife)
         if ( loseLife === 0){
            gameOver()
         }

        // const currentLifeElement = document.getElementById('lose-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)
        // const loseLife = currentLife -1;
        // currentLifeElement.innerText = loseLife;
    }

}
// capture keyboard key press 
document.addEventListener('keyup', handlebutton)



function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet)
    //  set randomly generate to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet)
}
function play() {
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // reset score and life
    setValueById ('lose-life', 5)
    setValueById ('current-score',0)
    continueGame()

}
function gameOver(){
    hideElementById ('play-ground')
    showElementById ('final-score')
    const lastScore = getValueById('current-score')
    setValueById ('last-score',lastScore)
    const element = getElementTextById('current-alphabet')
    removeBackgroundColorById(element) 
    console.log(element)
}