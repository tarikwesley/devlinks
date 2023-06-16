function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Tarik Wesley usando camisa azul com fundo azul e óculos de grau"
    )
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Foto de Tarik Wesley usando camisa azul com fundo amarelo e óculos de grau"
    )
  }
}
