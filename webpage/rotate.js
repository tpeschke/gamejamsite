(function startRotatation () {
    setTimeout(rotate, 1000)
})()

function rotate () {
    let diceHoldDice = document.getElementsByClassName('dice-holder')[0].children
    let randomDice = diceHoldDice[Math.floor(Math.random()*diceHoldDice.length)];
    let baseRotation
    let randomRotation = Math.floor(Math.random()*180) + 15
    if (!randomDice.getAttribute('degree')) {
        randomDice.setAttribute('degree', randomRotation)
        baseRotation = 0
    } else {
        baseRotation = +randomDice.getAttribute('degree')
    }
    let newPostion = baseRotation + randomRotation
    randomDice.setAttribute('degree', newPostion)
    randomDice.style.transform = 'rotate(' + newPostion + 'deg)'

    setTimeout(rotate, Math.floor(Math.random()*4000) + 1000)
}