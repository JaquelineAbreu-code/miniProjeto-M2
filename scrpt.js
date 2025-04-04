// 0,1,2,3,4
// (index,1)
// (2,1)
// 0,1,3,4

// criar um array vazio
const products = [
    {
 },
    {
 },
    {
 },
    {
     
    },
  ];
  
  // criar o objeto 
  // class Produto
  class Product{
    constructor(img, otherImg, title, description, price, oldPrice, status){
      this.img = img;
      this.title = title;
      this.description = description;
      this.price = price;
    }
  }
  
  // buscando os inputs(caixa de texto que o usuario esta digitando)
  const inputImg = document.getElementById("input-img");
  const inputTitle = document.getElementById("input-title");
  const inputDescription = document.getElementById("input-description");
  const inputPrice = document.getElementById("input-price");
  const btnSave = document.getElementById("btn-save");
  const btnList = document.getElementById("btn-list");
  
  // associar uma função a uma interação do usuario 
  btnSave.addEventListener("click", ()=> {
    console.log("input: ",inputImg.value, inputTitle.value, inputDescription.value, inputPrice.value)
    // criando um novo objeto produto
    const product = new Product(inputImg.value, inputTitle.value, inputDescription.value, inputPrice.value)
    console.log("product obj: ",product)
    // .push adicionar um novo elemento ao final do meu array
    products.push(product)
    console.log("array: ", products)
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
      createList(i,products[i].img, products[i].otherImg, products[i].title, products[i].description, products[i].price, products[i].oldPrice, products[i].status)
    }
  }
  
  btnList.addEventListener("click", listProduct);
  
  // porque função anonima?
  // porque nao tem nome
  // função anônima exerce funções específicas
  // recomendada para códigos pequenos
  const verifyStatus = (status) => {
      if(status === "pending"){
          return 'yellow'
      }else if(status === "success"){
          return 'green'
      }else{
          return 'red'
      }
  }
  
  function createList(index, img, otherImg, title, description, price, oldPrice, status){
      // criando a tag li no javascript
      const itemList = document.createElement("li");
  
      // criando a tag div para img no javascript
      const divImg = document.createElement("div");
      const imgProduct = document.createElement("img");
  
      // criando a tag div para infos no javascript
      const divInfos = document.createElement("div");
      const titleProduct = document.createElement("h3");
      const descriptionProduct = document.createElement("p");
      const priceProduct = document.createElement("p");
      const oldPriceProduct = document.createElement("p");
      
      // criando a tag div para status no javascript
      const divStatus = document.createElement("div");
      const titleStatusProduct = document.createElement("p");
      const divCircleStatus = document.createElement("div");
  
      // criando botoes de editar e apagar
      const btnEdit = document.createElement("button");
      const btnDelete = document.createElement("button");
  
      // adicionando funcionalidade de editar
      btnEdit.addEventListener("click", ()=>{
        console.log("editar")
        //  || products[index].title -> este código verifica se existe algo escrito no input
        // caso nao exista ele mantem o valor anterior
        products[index].title = inputTitle.value || products[index].title;
        products[index].description = inputDescription.value  || products[index].description;
        products[index].img = inputImg.value  || products[index].img;
        products[index].price = inputPrice.value  || products[index].price;
        listProduct();
      })
  
      btnDelete.addEventListener("click", ()=>{
        console.log("deletar")
        // 0,1,2,3,4
        // (index,1)
        // (2,1)
        // 0,1,3,4
        // apagando objeto do array
        products.splice(index, 1); 
        listProduct();
      });
  
      // adicionar as classes de estilização
      itemList.classList.add("itemList")
      divImg.classList.add("divImg");
      divInfos.classList.add("divInfos");
      
      // alterar os textos
      imgProduct.src = img;
      titleProduct.innerText = title;
      descriptionProduct.innerText = description;  
      priceProduct.innerText = `R$ ${price}`;
      priceProduct.style.color = 'green'
  
  
      btnDelete.style.backgroundColor = "red";
      btnEdit.style.backgroundColor = "yellow";
      btnDelete.style.marginRight = "10px";
  
      btnDelete.innerText = 'Deletar';
      btnEdit.innerText = 'Editar';

      // adicionar as tags dentro das suas respectivas divs HTML 
      divImg.appendChild(imgProduct);
  
      // adicionar informações dentro da div info
      divInfos.appendChild(titleProduct);
      divInfos.appendChild(descriptionProduct);
      divInfos.appendChild(priceProduct);
  
      // adicionando as 3 divs criadas dentro do <li>
      itemList.appendChild(divImg);
      itemList.appendChild(divInfos);
      itemList.appendChild(btnDelete);
      itemList.appendChild(btnEdit);
  
      // adicionando o li criado no javascript a <ul> do HTML
      ulListProducts.appendChild(itemList);
  }
  
  
  
  // EM 15MIN
  // fazer uma verificação da imagem do produto 
  // se for a imagem principal a cor do valor do produto vai ser azul
  // se for a imagem secundaria a cor do valor do produto vai ser vermelha
  
  // criar um evento ouvinte para quando clicamos 2x no produto a cor de fundo
  // do produto (li) vai ser pink