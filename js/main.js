// função que muda o tema
function changeLightMode() {
    const htmlElement = document.documentElement
    htmlElement.classList.toggle('dark')
    const img = document.getElementById('profilePic')

    if(htmlElement.classList.contains('dark')){
        img.setAttribute('src', 'img/pic-dark.png')

    } else {
        img.setAttribute('src', 'img/pic-light.png')
    }
}