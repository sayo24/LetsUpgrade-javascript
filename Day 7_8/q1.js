var products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "white.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "black.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Blue Shirt",
    size: "S",
    color: "Blue",
    price: 1000,
    image: "blue.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Red Shirt",
    size: "M",
    color: "Red",
    price: 3000,
    image: "red.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "lightGreen Shirt",
    size: "S",
    color: "lightGreen",
    price: 1400,
    image: "lightgreen.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Violet Shirt",
    size: "M",
    color: "Violet",
    price: 1500,
    image: "violet.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Cream Shirt",
    size: "L",
    color: "Cream",
    price: 1200,
    image: "cream.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 8,
    name: "Pink Shirt",
    size: "M",
    color: "Pink",
    price: 1100,
    image: "pink.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 9,
    name: "Grey Shirt",
    size: "S",
    color: "Grey",
    price: 400,
    image: "grey.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 10,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 500,
    image: "blackblazer.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 11,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 750,
    image: "navyblue.jpg",
    description: "Good looking Top",
  },

  {
    id: 12,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 800,
    image: "indian.jpg",
    description: "Good looking Traditional Dress",
  },
];

cart = [];
var cartProductCount = 0 ;
function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";
  `<h2>No of item in cart ${cartProductCount}</h2>`
  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3 class="pName">${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
     
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3 class="cName">${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
 
  cart.push(pro);
  cartCount();
  for(var i=0; i<cart.length; i++) {
    for(var j=i+1;j<cart.length; j++){
      str1 = cart[i].name;
      str2 = cart[j].name;
      ans = str1.localeCompare(str2)
     if( ans == 0){
      alert("Product is already in cart");
      cart.pop(pro);
     }
   }
  }
  displayProducts(cart, "cart");
}

function cartCount() {
  cartProductCount = cart.length;
  document.getElementById('cartCountss').innerHTML = cartProductCount;
}

function filter() {
  maxValue = document.getElementById('maximum').value ;
  minValue = document.getElementById('minimum').value;
  var data = [];
  for(var i=0;i<products.length;i++) {
     if(products[i].price <= maxValue && products[i].price >=minValue) {
        data.push(products[i]);
        displayProducts(data,"productwrapper");
     }
  }
 
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  cartCount();
  displayProducts(cart, "cart");
}