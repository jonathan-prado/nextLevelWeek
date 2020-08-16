// Procurar o botão 
document.querySelector("#add-time")

// Quando clicar no botão 
.addEventListener("click",cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Obter os campos 
    const fields = newFieldContainer.querySelectorAll("input")

    // Para cada campo
    fields.forEach(function (field) {
        // Obter o campo do momento e limpar
        field.value=""
    })

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}


