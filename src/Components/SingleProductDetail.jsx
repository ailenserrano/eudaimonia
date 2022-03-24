export default function SingleProductDetail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let products = {
        id: 1,
        name: "Bralette Volks Cherry",
        price: 2790,
        category: "corpiños",
        description: "BRALETTE VOLKS",
        stock: 5,
        image:
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc67041-abc595944ac38289d516281872940023-1024-1024.jpg",
      };

      if (products.length != 0) {
        resolve(products);
      } else {
        reject("No se encontraron productos");
      }
    }, 2000);
  });
}
