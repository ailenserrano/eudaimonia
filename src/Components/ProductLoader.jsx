export default function ProductLoader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let products = [
        {
          id: 1,
          name: "Bralette Volks Cherry",
          price: 2790,
          category: "corpiños",
          description: "BRALETTE VOLKS",
          stock: 5,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc67041-abc595944ac38289d516281872940023-1024-1024.jpg",
        },
        {
          id: 2,
          name: "Bralette Thelma Black",
          price: 1990,
          category: "corpiños",
          description: "BRALETTE THELMA",
          stock: 3,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc743211-987882538db7ea209816219038457940-1024-1024.jpg",
        },
        {
          id: 3,
          name: "Corpiño con Aro Sasha White",
          price: 3190,
          category: "corpiños",
          description: "BRALETTE SASHA",
          stock: 7,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc73731-da19bed58a56e33d4916274066134271-1024-1024.jpg",
        },
        {
          id: 4,
          name: "Bralette Angelo Silver",
          price: 1990,
          category: "corpiños",
          description: "BRALETTE ANGELO",
          stock: 2,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc88421-0e3b73947eac6b3a3e16357221603220-1024-1024.jpg",
        },
        {
          id: 5,
          name: "Regulable Bisou Silver",
          price: 990,
          category: "bombachas",
          description: "REGULABLE BISOU SILVER",
          stock: 10,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/esta1-77d0c030e85f25676216237820170270-1024-1024.jpg",
        },
        {
          id: 6,
          name: "Regulable Orwell",
          price: 990,
          category: "bombachas",
          description: "REGULABLE ORWELL",
          stock: 8,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/orwell1-8ca7bd1c64d5b7367f15976228034906-1024-1024.jpeg",
        },
        {
          id: 7,
          name: "Regulable Cassie Gray",
          price: 990,
          category: "bombachas",
          description: "REGULABLE CASSIE GRAY",
          stock: 3,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/img_01881-6266d0a0633ad904ce16213591926347-1024-1024.jpg",
        },
        {
          id: 9,
          name: "Regulable Maeve Avellana",
          price: 990,
          category: "bombachas",
          description: "REGULABLE MAEVE",
          stock: 5,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/20201203_1246381-f797c5be06af01035216070122406729-1024-1024.jpg",
        },
        {
          id: 10,
          name: "Body Nairobi",
          price: 3190,
          category: "bodys",
          description: "BODY NAIROBI",
          stock: 1,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc72871-05bafdf23855834c1016219037233636-1024-1024.jpg",
        },
        {
          id: 11,
          name: "Body Jules White",
          price: 3190,
          category: "bodys",
          description: "BODY JULES WHITE",
          stock: 9,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc03041-f41926faf4df229a6a16357179569969-1024-1024.jpg",
        },
        {
          id: 12,
          name: "Pack: 3 regulables de puntilla (mint/blue/cherry)",
          price: 2690,
          category: "packs",
          description: "PACK DE 3 REGULABLES DE PUNTILLA",
          stock: 6,
          image:
            "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/archivo_000-231-2a57a50870e4038f5316424560024250-1024-1024.jpeg",
        },
      ];
      if (products.length !== 0) {
        resolve(products);
      } else {
        reject("No se encontraron productos");
      }
    }, 2000);
  });
}
