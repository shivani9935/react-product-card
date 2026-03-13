function ProductCard({ name, category, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>{category}</p>

      <h3>{price}</h3>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;