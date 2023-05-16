const btnPrev = document.querySelector('.btnprev')
const btNext = document.querySelector('.btnext')
const banImg = document.getElementById('robo')

btnPrev.addEventListener('click', function() {
    if (banImg.style.display === 'block') {
        banImg.style.display = 'none'
    } else {
        banImg.style.display = 'block'
    }
})

btNext.addEventListener('click', function() {
    if (banImg.style.display === 'block') {
        banImg.style.display = 'none'
    } else {
        banImg.style.display = 'block'
    }
})