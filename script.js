const input = document.getElementById("inputList")
const button = document.getElementById("addItem")
const buttonDelete = document.getElementById("deleteItem")
const list = document.getElementById("list") 
const produto = document.getElementById ("produto")
const deleteAll = document.getElementById ("deleteAll")
const caracteres = document.getElementById ("caracteres")
let contador = 0 
let contaCaractere = 0

//adiciona item na lista
function captureInput(){
    const p = document.createElement("p")
    p.innerText = input.value
    list.appendChild(p)
    contaCaractere = -1
    atualizadorContador(true)
    contadorCaractere (false)
    input.value = ""
}
button.addEventListener("click", captureInput)

//Atualizar a quantidade de item na lista//
function atualizadorContador(bandeira){ 
    if(bandeira == true){
        contador += 1
    }else{
        contador -= 1
    }
    produto.innerHTML = ""
    const pContador = document.createElement("p")
    pContador.innerText = "Quantidade de items: " + contador
    produto.appendChild(pContador)
}

// deleta o ultimo item inserido//
function deleteItem(){
    const ultimoFilho = list.lastChild
    list.removeChild(ultimoFilho)
    atualizadorContador(false)
}
buttonDelete.addEventListener("click", deleteItem)

function contadorCaractere(){
    // if(verde == true){
    //     contaCaractere == 0
    // }else{
    //     contaCaractere -= 1 
    // }
    caracteres.innerHTML = ""
    contaCaractere += 1
    const pCaractere = document.createElement("p")
    pCaractere.innerText = "Quantidade de carateres: " + contaCaractere
    caracteres.appendChild(pCaractere)
}
input.addEventListener("input", ()=>{
    contadorCaractere(true)
})

function deletaTudo(){
    list.innerHTML = ""
    // produto.innerHTML = ""
    // caracteres.innerHTML = ""
    contador = 0 + 1
    contaCaractere = 0 - 1
    contadorCaractere()
    atualizadorContador()
    
}
deleteAll.addEventListener("click", deletaTudo)