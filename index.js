let addButton = document.querySelector(".add-product");
let clearButton = document.querySelector(".clear-list");
let productList = document.querySelector(".products-list");
let productArray = [];

addButton.addEventListener("click", addProduct);
clearButton.addEventListener("click", clearList);

function addProduct() {
  let productType = document.querySelector("#type-select").value;
  let productName = document.querySelector("#product-name").value;
  let productCount = document.querySelector("#product-count").value;

  let obj = {
    type: productType,
    name: productName,
    count: productCount,
  };

  productArray.push(obj);
  renderProducts();

  document.querySelector("#type-select").value = "";
  document.querySelector("#product-name").value = "";
  document.querySelector("#product-count").value = "";
}

function renderProducts() {
  let productString = "";
  productArray.forEach((e, i) => {
    productString += `<div class="product-item">
      Тип: ${e.type}, Название: ${e.name}, Количество: ${e.count}
      <button class="delete" onclick="btnClick(${i})">Удалить</button>
    </div>`;
  });
  productList.innerHTML = productString;
}

function btnClick(index) {
  productArray.splice(index, 1);
  renderProducts();
}

function clearList() {
  productArray = [];
  productList.innerHTML = "";
}
