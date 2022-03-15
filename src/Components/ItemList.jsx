import React from "react";
import Item from "./Item";
import viena from "../images/viena.jpg"
import { useEffect, useState } from "react";

export const ItemList = ({card}) => {

    const [listaProductos, setListaProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const productos = [
      {
        id: "01",
        name: "Conjunto Viena",
        description: "Conjunto de encaje color vino",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc00261-4905142cc2057917a716357128817083-1024-1024.jpg",
      },
      {
        id: "02",
        name: "Conjunto London",
        description: "Conjunto de encaje color verde",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc92971-0739c2a5df841fe4bd16357243338037-1024-1024.jpg",
      },
      {
        id: "03",
        name: "Conjunto Lisbon",
        description: "Conjunto de encaje color negro",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc67021-bc84f61dfeb72f957c16281874590016-1024-1024.jpg",
      },
      {
        id: "04",
        name: "Conjunto Madrid",
        description: "Conjunto de encaje color gris",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc86931-22fa4c5c82701901ca16357214727637-1024-1024.jpg",
      },
      {
        id: "05",
        name: "Conjunto Oslo",
        description: "Conjunto de encaje color azul",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc88391-576490cf969b88e5ba16357221603337-1024-1024.jpg",
      },
      {
        id: "06",
        name: "Conjunto Paris",
        description: "Conjunto de encaje color verde",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/525/266/products/_dsc96871-88bdda75f65a6d97cc16357260528374-1024-1024.jpg",
      },
    ];

    const getProducts = new Promise((resolve, reject) => {
        // acciones
        let condition = true
        if(condition){
            setTimeout(()=>{
                resolve(productos)
            }, 2000)
        }else{
            reject("Error")
        }
    })

    useEffect(()=>{
        getProducts
        .then((respuesta) => setListaProductos(respuesta))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])

  return (
    <div>
      {loading ? (
        <div class="spinner-border m-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        listaProductos.map((productos) => (
          <Item card={card} productos={productos} key={productos.id} />
        ))
      )}
    </div>
  );
};

export default ItemList;
