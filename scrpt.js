// Criando um array vazio
const personagem = [];
 
// Criando o objeto
class product{
  constructor(nome, anime, descricao){
    this.nome = nome;
    this.anime = anime;
    this.descricao = descricao;
  }
}

// Buscando os inputs(caixa de texto que o usuario esta digitando)
const inputNome = document.getElementById("input-nome");
const inputAnime = document.getElementById("input-anime");
const inputDescricao = document.getElementById("input-descricao");

const btnSave = document.getElementById("btn-save");
const btnList = document.getElementById("btn-list");

// Associar uma função a uma interação do usuario
btnSave.addEventListener("click", ()=> {
  console.log("input: " ,inputNome.value + ",",inputAnime.value +",", inputDescricao.value);
  
  // criando um novo objeto produto
  const product = new product(inputNome.value,inputAnime.value, inputDescricao.value)
  console.log("product obj: ",product);

  // .push adicionar um novo elemento ao final do meu array
  personagem.push(product)
  console.log("array: ", personagem)
});

// quando não sabemos a quantidade de uls que vamos criar 
// criamos a tag ul pelo javascript
const containerList = document.getElementById("container-list");
const ulListProducts = document.getElementById("product-list");

// funções anonimas servem para especificar uma tarefa 
const listProduct = () => {
  
  // limpando a lista para nao duplicar objetos
  ulListProducts.innerHTML = '';
 
  // criando um card para cada produto da lista
  for (let i = 0; i < products.length; i++) {
    createList(i,personagem[i].nome, personagem[i].anime, personagem[i].descricao)
  }
}

btnList.addEventListener("click", listProduct);
