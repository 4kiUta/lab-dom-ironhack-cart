// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  console.log(quantity)
  const subTotal = Number(price) * Number(quantity);
  // get subtotal 
  let subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerHTML = subTotal;

  return subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allElements = document.getElementsByClassName('product');

  // const allElementsArray = [...allElements];
  // allElementsArray.forEach((el)=> updateSubtotal(el))

  let totalValue = 0;
  for (let i = 0; i < allElements.length; i++) {
    const prod = allElements[i]
    let val = updateSubtotal(prod);
    totalValue += val;
  }


  // ITERATION 3
  //... your code goes here
  let total = document.querySelector("#total-value span")
  total.innerHTML = totalValue;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentNode.parentNode;
  const tbody = product.parentNode;
  tbody.removeChild(product);
  calculateAll() // run again to update the TOTAL
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const prodName = document.querySelector('.create-product td input[type="text"]').value;
  const priceNew = document.querySelector('.create-product td input[type="number"]').value;


  const myTableBody = document.querySelector('#cart tbody');


  let offscreenDOM = document.createDocumentFragment();

  let newRow = document.createElement('tr');
  newRow.setAttribute('class', 'product'); // creates a class attribute with the value 'product
  newRow.innerHTML =
    `<td class="name">
        <span>${prodName}</span>
      </td>
      <td class="price">$<span>${priceNew}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;


  // If i use clone row all the test break! Why?

  // let newRow = document.querySelector('.product').cloneNode(true); 
  // console.log(newRow)
  // // changing the values
  // const name = newRow.querySelector('.name span')
  // name.innerHTML = prodName
  // const price = newRow.querySelector('.price span')
  // price.innerHTML = priceNew

  // append child --> myTable.appendChild(
  // myTableBody.appendChild(newRow);

  offscreenDOM.appendChild(newRow);
  myTableBody.append(offscreenDOM);


  // identify the button created in the clone row and apply the removeProduct function when clicked
  const removeProductBtn = newRow.querySelector('.btn');
  removeProductBtn.addEventListener('click', removeProduct);

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //  ITERATION 4 
  // for(let i = 0; i< removeButtonsHTMLCollection.length; i++) {
  //   removeButtonsHTMLCollection[i].addEventListener('click', removeProduct);
  // }

  // const removeButtonsHTMLCollection = document.getElementsByClassName("btn btn-remove");
  const removeButtonsArray = [...document.getElementsByClassName("btn btn-remove")]
  removeButtonsArray.forEach((removeB) => {
    removeB.addEventListener('click', removeProduct);
  });

  //  ITERATION 5
  const addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct)

})
