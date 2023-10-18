
const filterByCategory = (products) => {
       return (type) => {
              return products.filter((val) => {
                     return val.category == type;
              })
       }
}

const products = [
       { name: "Shirt", category: "Clothing" },
       { name: "Pants", category: "Clothing" },
       { name: "Hat", category: "Accessories" },
       { name: "Sunglasses", category: "Accessories" }
]

let clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);
let AccessoriesProducts = filterByCategory(products)("Accessories");
console.log(AccessoriesProducts);