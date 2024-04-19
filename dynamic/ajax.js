function rolarParaTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Isso faz com que a rolagem seja suave
    });
}

function navegarViaAjax(url, seletor) {
    if(!url || !seletor) return
    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html
        })
}

document.querySelectorAll('[wm-link]').forEach(link => {
    const url = link.attributes['wm-link'].value
    const seletorDestino = link.attributes['wm-destino'].value

    document.addEventListener("DOMContentLoaded", function() {
        const urlDaHome = "../static/home.html";
        const seletorDaHome = ".pagina"; // Substitua pelo seletor correto
    
        navegarViaAjax(urlDaHome, seletorDaHome);
    })

    link.onclick = e => {
        e.preventDefault()
        navegarViaAjax(url, seletorDestino)
        rolarParaTopo();
    }
})