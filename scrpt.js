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
const btnEdit = document.getElementById("btn-edit");
const btnDelete = document.getElementById("btn-delet");

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

btnList.addEventListener("click", ()=> {
  console.log("input: " ,inputNome.value + ",",inputAnime.value +",", inputDescricao.value);
  
  // criando um novo objeto produto
  const product = new product(inputNome.value,inputAnime.value, inputDescricao.value)
  console.log("product obj: ",product);
  // .push adicionar um novo elemento ao final do meu array
  personagem.push(product)
  console.log("array: ", personagem)
 );

// quando não sabemos a quantidade de uls que vamos criar 
// criamos a tag ul pelo javascript
const containerList = document.getElementById("container-list");
const ulListProducts = document.getElementById("product-list");

// funções anonimas servem para especificar uma tarefa 
const listProduct = () => {
  
  // limpando a lista para nao duplicar objetos
  ulListProducts.innerHTML = '';
 
  // criando um card para cada produto da lista
  for (let i = 0; i < personagem.length; i++) {
    createList(i,personagem[i].nome, personagem[i].anime, personagem[i].descricao)
  }
}

btnList.addEventListener("click", (listProduct));

function createList(nome, anime, descricao){
  
  // criando a tag li no javascript
  const itemList = document.createElement("li");
  
   // criando a tag div para infos no javascript
   const divInfos = document.createElement("div");
   const nomeProduct = document.createElement("h3");
   const animeProduct = document.createElement("p");
   const descricaoProduct = document.createElement("p");

   // criando botoes de editar e apagar
   const btnEdit = document.createElement("button");
   const btnDelete = document.createElement("button");

   // adicionando funcionalidade de editar
   btnEdit.addEventListener("click", ()=>{
    console.log("Editar")
    //  || products[index].title -> este código verifica se existe algo escrito no input
    // caso nao exista ele mantem o valor anterior
    personagem[index].nome = inputNome.value || personagem[index].nome;
    personagem[index].anime = inputAnime.value  || personagem[index].anime;
    personagem[index].descricao = inputDescricao.value  || personagem[index].descricao;
    listProduct();
  });

  btnDelete.addEventListener("click", ()=>{
    console.log("deletar")
    // 0,1,2,3,4
    // (index,1)
    // (2,1)
    // 0,1,3,4
    // apagando objeto do array
    personagem.splice(index, 1); 
    listProduct();
  });

// adicionar as classes de estilização
itemList.classList.add("itemList")
divInfos.classList.add("divInfos");

 // alterar os textos
 nomeProduct.src = nome;
 animeProduct.innerText = anime;
 descricaoProduct.innerText = descricao;

 btnDelete.style.backgroundColor = "red";
 btnEdit.style.backgroundColor = "yellow";
 btnDelete.style.marginRight = "10px";

 btnDelete.innerText = 'Deletar';
 btnEdit.innerText = 'Editar';


//  adicionar as tags dentro das suas respectivas divs HTML 
//  divImg.appendChild(imgProduct);


 // adicionar informações dentro da div info
 divInfos.appendChild(nomeProduct);
 divInfos.appendChild(animeProduct);
 divInfos.appendChild(descricaoProduct);

  // adicionando as  divs criadas dentro do <li>
  itemList.appendChild(divInfos);

  // adicionado botoes de editar e deletar ao item
  itemList.appendChild(btnDelete);
  itemList.appendChild(btnEdit);

    // adicionando o li criado no javascript a <ul> do HTML
    ulListProducts.appendChild(itemList);
}

