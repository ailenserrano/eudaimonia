export const ItemDetail = ({ id, image, description, name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <p>Precio: ${price}</p>
    </div>
  );
};
