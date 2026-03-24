import "./Products.css";

function Products() {

  const products = [
    {
      name: "Lunettes Eveuss",
      price: "89€",
      image: "https://originel-eyewear.com/cdn/shop/files/EVEUSS_LUNETTE_DE_VUE_FEMME_ORIGINEL_750x.jpg?v=1690365406"
    },
    {
      name: "Lunettes Mase",
      price: "129€",
      image: "https://originel-eyewear.com/cdn/shop/files/originel-eyewear-france-lunette-de-vue-femme-original-moderne-essayage-virtuel_550x.jpg?v=1694164884"
    },
    {
      name: "Lunettes Canthal",
      price: "199€",
      image: "https://originel-eyewear.com/cdn/shop/files/originel-eyewear-france-lunette-de-vue-ecaille-combinee-noir-blanc-moderne-tendance_1445x.jpg?v=1694168552"
    },
    {
      name: "Lunettes Cleare",
      price: "250€",
      image: "https://originel-eyewear.com/cdn/shop/files/ORIGINEL_EYEWEAR_FRANCE_LUNETTE_DE_VUE_TRANSPARENTE_TENDANCE_550x.jpg?v=1694103586"
    }
  ];

  return (
    <section className="products">
      <h2>Nouveautés</h2>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index} style={{ animationDelay: `${index * 0.15}s` }} >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Acheter</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;