// função que muda o tema
function changeLightMode() {
    console.log('clicado')
    const htmlElement = document.documentElement
    const img = document.getElementById('profilePic')
    const switchToggleTheme = document.getElementById('lightSwitch')

    htmlElement.classList.toggle('dark')

    if(htmlElement.classList.contains('dark')){
        img.setAttribute('src', 'img/pic-dark.png')
        switchToggleTheme.classList.remove('bi-brightness-high')
        switchToggleTheme.classList.add('bi-moon-stars')

    } else {
        img.setAttribute('src', 'img/pic-light.png')
        switchToggleTheme.classList.remove('bi-moon-stars')
        switchToggleTheme.classList.add('bi-brightness-high')

    }
}