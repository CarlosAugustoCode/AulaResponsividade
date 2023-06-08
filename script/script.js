let menu = document.getElementById("menu_links")
let menu_barras = document.getElementById("menu_barras")

function mostrarMenu() {
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
        // alert("Ola!")
        menu_barras.setAttribute("aria-expanded", "true")
        menu_barras.setAttribute("aria-label", "Fechar o menu")
    } else {
        menu.style.display = "none"
        menu_barras.setAttribute("aria-expanded", "false")
        menu_barras.setAttribute("aria-label", "Abrir o menu")
    }
} 
      
addEventListener("resize", () => {
    if (window.innerWidth > 1034) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none"
    }
})