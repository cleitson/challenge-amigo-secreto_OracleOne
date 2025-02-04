const listaDePessoas = document.querySelector('.name-list')
const nomePessoa = document.querySelector('.input-name')
const amigoSecreto = document.querySelector('.result-list')

let pessoas = []
const adicionarAmigo = () => {
    const nome = nomePessoa.value
    pessoas.push(nome)
    nomePessoa.value = ''
    console.log(pessoas)
    listaDePessoas.innerHTML = pessoas.map(pessoa => `<li>${pessoa}</li>`).join('')
}


const sortearAmigo = () => {
    const amigoSorteado = pessoas[Math.floor(Math.random() * pessoas.length)]
    amigoSecreto.innerHTML = `<li>o amigo secreto sorteado e: ${amigoSorteado}</li>`    
}