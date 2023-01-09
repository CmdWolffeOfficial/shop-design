let products = [
  //SHOES
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579309720440863/shoe_1.png",
    "name": "Air Force 1 Mid",
    "description": "white / green / black",
    "price": 159.95
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579310152470698/shoe_2.png",
    "name": "Air Force 1 Mid",
    "description": "white / gray / orange",
    "price": 149.99
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579310886469642/shoe_3.png",
    "name": "Air Force 1 Mid",
    "description": "white / blue / green",
    "price": 129.99
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579311364608000/shoe_4.png",
    "name": "Air Force 1 Mid",
    "description": "white / red",
    "price": 129.99
  },{
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579309720440863/shoe_1.png",
    "name": "Air Force 1 Mid",
    "description": "white / green / black",
    "price": 159.95
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579310152470698/shoe_2.png",
    "name": "Air Force 1 Mid",
    "description": "white / gray / orange",
    "price": 149.99
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579310886469642/shoe_3.png",
    "name": "Air Force 1 Mid",
    "description": "white / blue / green",
    "price": 129.99
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579311364608000/shoe_4.png",
    "name": "Air Force 1 Mid",
    "description": "white / red",
    "price": 129.99
  },
];

let div = (product) => {
  console.log(product);
  return `
  <div class="content">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <h6>${product.price} €</h6>
            <button class="buy">Jetzt Kaufen</button>
        </div>
        `;
};

const Shoes = () => {
  for (let i = 0; i < products.length; i++) {
    document.getElementById("content").innerHTML += div(products[i]);
  }
};

Shoes();
