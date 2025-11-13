function trocarTema(){
    var temaAtual = document.querySelector("body").getAttribute("data-bs-theme")
    if (temaAtual == "light"){
        document.querySelector("body").setAttribute("data-bs-theme", "dark")
        document.querySelector("#trocarTemaBtn").innerHTML = '<img src="images/icons/sol.svg" alt="">';
    } else {
        document.querySelector("body").setAttribute("data-bs-theme", "light")
        document.querySelector("#trocarTemaBtn").innerHTML = '<img src="images/icons/lua.svg" alt="">';
    }
}