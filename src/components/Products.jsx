import "./Products.css";

function Products() {
  return (
    <section className="products">
      <h2>Tendances</h2>

      <div className="product-grid">
        <div className="product-card">
          <img src="https://originel-eyewear.com/cdn/shop/files/EVEUSS_LUNETTE_DE_VUE_FEMME_ORIGINEL_750x.jpg?v=1690365406" />
          <h3>Lunettes Eveuss</h3>
          <p>89€</p>
          <button>Acheter</button>
        </div>

        <div className="product-card">
          <img src="https://originel-eyewear.com/cdn/shop/files/originel-eyewear-france-lunette-de-vue-femme-original-moderne-essayage-virtuel_550x.jpg?v=1694164884" />
          <h3>Lunettes Mase</h3>
          <p>129€</p>
          <button>Acheter</button>
        </div>

        <div className="product-card">
          <img src="https://originel-eyewear.com/cdn/shop/files/originel-eyewear-france-lunette-de-vue-ecaille-combinee-noir-blanc-moderne-tendance_1445x.jpg?v=1694168552" />
          <h3>Lunettes Canthal</h3>
          <p>199€</p>
          <button>Acheter</button>
        </div>

        <div className="product-card">
          <img src="https://originel-eyewear.com/cdn/shop/files/ORIGINEL_EYEWEAR_FRANCE_LUNETTE_DE_VUE_TRANSPARENTE_TENDANCE_550x.jpg?v=1694103586" />
          <h3>Lunettes Cleare</h3>
          <p>250€</p>
          <button>Acheter</button>
        </div>
      </div>
    </section>
  );
}

export default Products;